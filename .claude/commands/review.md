---
description: "Audit qualité GEO, conformité réglementaire et technique d'un article — scorecard avec corrections automatiques"
---

# /review — Audit Qualité, GEO et Conformité

**Argument :** $ARGUMENTS (slug de l'article à auditer, ou vide pour auditer le dernier article créé/modifié)

Tu audites un article Covelia.fr selon 3 axes et produis un scorecard détaillé.

## Étape 0 : Identification de l'article

1. Lis `src/data/covelia-context.md` pour le contexte éditorial de référence.
2. Si un slug est fourni ($ARGUMENTS), cherche le fichier dans `src/content/**/$ARGUMENTS.mdx`
3. Si aucun argument, utilise Glob pour trouver le fichier MDX le plus récemment modifié dans `src/content/`
4. Lis le fichier complet (frontmatter + contenu)
5. Lis aussi `src/content.config.ts` pour le schéma Zod de référence

## Axe 1 : Score GEO (X/10)

Évalue chaque critère et attribue les points :

| # | Critère | Points | Comment vérifier |
|---|---------|--------|-----------------|
| 1 | **Capsule réponse 40-60 mots** | /1 | Compte les mots du premier paragraphe après le frontmatter et les imports. Doit être entre 40 et 60 mots. Doit répondre directement à la question du titre. 1pt si 30-70 mots, 0pt sinon. |
| 2 | **Densité statistique (1 stat/200 mots)** | /2 | Compte le nombre total de mots et le nombre de stats sourcées (pattern: "Selon [Source]", chiffres avec %, euros, nombres). Ratio attendu : 1 stat pour 150-200 mots. 2pts si ratio respecté, 1pt si proche, 0pt si insuffisant. |
| 3 | **FAQ 5-8 questions** | /1 | Vérifie le frontmatter `faq`. 1pt si 5-8 questions, 0pt sinon. |
| 4 | **Entités nommées ≥5** | /1 | Scanne le contenu pour les noms propres : lois, organismes, assureurs, dispositifs. 1pt si ≥5 entités distinctes, 0pt sinon. |
| 5 | **Hiérarchie H2/H3 correcte** | /1 | Vérifie : minimum 4 H2, pas de niveaux sautés (H3 sans H2 parent), pas de H1 dans le contenu. 1pt si correct, 0pt sinon. |
| 6 | **Liens internes ≥2** | /1 | Compte les liens vers d'autres pages Covelia (pattern: `](/` ou `href="/`). 1pt si ≥2, 0pt sinon. |
| 7 | **Sources externes ≥3** | /1 | Compte les citations de sources (organismes, études, rapports). 1pt si ≥3 sources distinctes, 0pt sinon. |
| 8 | **Citation expert avec attribution** | /1 | Cherche un composant `<ExpertQuote>` ou un pattern de citation avec attribution. 1pt si présent, 0pt sinon. |
| 9 | **Diversité visuelle (3+ composants)** | /1 | Vérifie que l'article utilise au moins 3 types de composants visuels différents parmi : StatHighlight, ExpertQuote, InfoBox, ComparisonTable, CallToAction. 1pt si ≥3 types, 0pt sinon. |

**Score total : X/10**

### Contexte scientifique (données Princeton GEO)

Ces chiffres justifient le poids de chaque critère et doivent être mentionnés dans le scorecard quand un critère est en échec :

| Technique GEO | Impact sur la visibilité AI | Critères liés |
|---------------|----------------------------|---------------|
| Citations sourcées | **+40%** de boost | Critères 2, 7 |
| Statistiques chiffrées | **+37%** de boost | Critère 2 |
| Citations expert | **+30%** de boost | Critère 8 |
| Langage fluide et naturel | **+25%** de boost | Ton général |
| Contenu structuré (headings, listes) | **+22%** de boost | Critère 5 |
| Keyword stuffing | **-10%** de pénalité | Check négatif |

### Check négatif : Keyword stuffing

Vérifier que le keyword principal n'apparaît pas plus de 1 fois par 100 mots (densité > 1% = alerte). Le keyword stuffing réduit la visibilité AI de -10% selon les données Princeton. Si détecté, retirer -1 point au score GEO total et signaler dans le scorecard.

## Axe 2 : Conformité réglementaire (PASS/FAIL)

Scanne le contenu pour détecter des violations. Chaque violation = FAIL automatique.

### Checks de violations (chercher ces patterns) :

**Comparaison personnalisée (INTERDIT) :**
- "selon votre profil"
- "pour vous"
- "adapté à vos besoins"
- "votre situation"
- "dans votre cas"
- "si vous êtes" (suivi de conseil)
- "nous vous recommandons"
- "le meilleur choix pour"

**Collecte de leads (INTERDIT) :**
- Balises `<form`, `<input`
- "entrez vos informations"
- "remplissez le formulaire"
- "devis personnalisé"
- "simulation personnalisée"

**Conseil personnalisé (INTERDIT) :**
- "nous vous conseillons"
- "vous devriez choisir"
- "optez pour"
- "prenez" (impératif de conseil)

**Disclosure affilié (OBLIGATOIRE si liens affiliés) :**
- Vérifie que `affiliateDisclosure: true` si des liens `rel="nofollow sponsored"` ou des composants AffiliateLink/CallToAction sont présents

**Résultat :** PASS (aucune violation) ou FAIL (liste des violations avec numéro de ligne)

## Axe 3 : Technique (PASS/FAIL)

### Checks techniques :

1. **Frontmatter Zod-valide :**
   - `title` présent et ≤65 caractères
   - `description` présente et ≤160 caractères
   - `datePublished` est une date 2026
   - `author` avec `name` obligatoire
   - `category` est une des 5 valeurs autorisées
   - `faq` est un tableau de 5-8 objets {question, answer} si présent
   - `pillar` est un booléen

2. **Slug/nom de fichier valide (CRITIQUE) :**
   - Le nom du fichier MDX (slug) ne doit JAMAIS être identique au nom du dossier/catégorie
   - Ex INTERDIT : `src/content/assurance-auto/assurance-auto.mdx` → URL redondante `/assurance-auto/assurance-auto/`
   - Le slug doit être dérivé du titre de l'article, descriptif et unique
   - Si violation détectée → FAIL automatique avec suggestion de renommage

2. **Imports MDX valides :**
   - Chaque composant importé est utilisé dans l'article
   - Pas d'import de composant non utilisé
   - Les chemins d'import utilisent les alias `@/components/`

3. **Liens internes existants :**
   - Pour chaque lien interne, vérifie que l'article cible existe dans `src/content/`

4. **Build réussi :**
   - Lance `npm run build` et vérifie l'absence d'erreurs

5. **Longueur minimale :**
   - Article pilier (`pillar: true`) : 3 000-4 500 mots — FAIL si < 3 000
   - Article spoke (`pillar: false`) : 1 800-2 500 mots — FAIL si < 1 800
   - Compter les mots du contenu MDX uniquement (hors frontmatter et imports)

6. **Robots.txt AI bots :**
   - Vérifie que `public/robots.txt` autorise les crawlers IA essentiels :
     - `GPTBot` (OpenAI search)
     - `ChatGPT-User` (OpenAI browsing)
     - `PerplexityBot` (Perplexity)
     - `ClaudeBot` (Anthropic)
     - `Google-Extended` (Gemini/AI Overviews)
   - Si un bot essentiel est bloqué, signaler comme FAIL avec explication

7. **Anti-patterns de rédaction :**
   - Scanne pour les mots vides : "optimiser", "innovative", "solution", "performant", "incontournable"
   - Vérifie l'absence de points d'exclamation
   - Vérifie l'absence d'introductions creuses : "Dans un monde où...", "Il est important de..."
   - Résultat : WARN (liste des occurrences) — pas bloquant mais signalé

8. **Paragraphes longs :**
   - Signaler les paragraphes de plus de 5 phrases
   - Résultat : WARN (liste des paragraphes trop longs avec numéro de ligne) — pas bloquant mais signalé

**Résultat :** PASS (tous les checks OK) ou FAIL (liste des problèmes)

## Scorecard final

Présente le résultat dans ce format :

```
╔══════════════════════════════════════════════════╗
║           SCORECARD — [slug de l'article]        ║
╠══════════════════════════════════════════════════╣
║                                                  ║
║  GEO Score :        X/10  [██████████░░] XX%     ║
║                                                  ║
║  1. Capsule réponse      X/1  [détail]           ║
║  2. Densité stats        X/2  [détail]           ║
║  3. FAQ 5-8 questions    X/1  [détail]           ║
║  4. Entités nommées ≥5   X/1  [détail]           ║
║  5. Hiérarchie headings  X/1  [détail]           ║
║  6. Liens internes ≥2    X/1  [détail]           ║
║  7. Sources externes ≥3  X/1  [détail]           ║
║  8. Citation expert      X/1  [détail]           ║
║  9. Diversité visuelle   X/1  [détail]           ║
║                                                  ║
║  Conformité :       PASS ✓ / FAIL ✗              ║
║  [Détails si FAIL]                               ║
║                                                  ║
║  Technique :        PASS ✓ / FAIL ✗              ║
║  [Détails si FAIL]                               ║
║                                                  ║
╠══════════════════════════════════════════════════╣
║  VERDICT :  PRÊT À PUBLIER / CORRECTIONS REQUISES║
╚══════════════════════════════════════════════════╝
```

## Seuil de publication

**PRÊT À PUBLIER** si : GEO ≥ 8/10 **ET** Conformité = PASS **ET** Technique = PASS

**CORRECTIONS REQUISES** sinon. Dans ce cas :
1. Liste chaque correction nécessaire avec le numéro de ligne
2. Propose d'appliquer les corrections automatiquement
3. Si l'utilisateur accepte, applique les corrections et relance l'audit

## Post-audit

Si PRÊT À PUBLIER : "Article validé. Tapez `/publish` pour builder, committer et déployer."
Si CORRECTIONS REQUISES : "X corrections identifiées. Voulez-vous que je les applique automatiquement ?"

## Skills liés
- Corrections appliquées ? → Relancez `/review` pour vérifier
- Article validé ? → Lancez `/publish` pour déployer
- Pipeline complet ? → Lancez `/produce` pour tout enchaîner
