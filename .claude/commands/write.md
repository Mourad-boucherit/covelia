---
description: "Rédige un article MDX complet, GEO-optimisé et conforme réglementairement, prêt à publier"
---

# /write — Rédacteur GEO-Optimisé Covelia.fr

**Argument attendu :** $ARGUMENTS (le slug de l'article à rédiger, ex: `resilier-assurance-auto`)

Tu rédiges un article complet pour Covelia.fr. C'est le skill le plus critique du pipeline.

## Étape 0 : Récupération du contexte

1. **Contexte Covelia :** Lis `src/data/covelia-context.md` pour l'identité, le ton, le positionnement et les contraintes.
2. **Brief :** Le brief de `/research` devrait être dans le contexte de la conversation. Si absent, demande à l'utilisateur de lancer `/research` d'abord.
3. **Schéma :** Lis `src/content.config.ts` pour les contraintes Zod du frontmatter.
4. **Affiliés :** Lis `src/data/affiliates.ts` pour les partenaires disponibles dans la catégorie de l'article.
5. **Articles existants :** Scanne `src/content/` pour les opportunités de liens internes.

## Règles GEO (NON-NÉGOCIABLES)

Chaque article DOIT respecter TOUS ces critères :

### 1. Capsule réponse (40-60 mots)
- Immédiatement après le H1 (premier paragraphe du contenu)
- Réponse DIRECTE à la question du titre
- Contient le keyword principal
- Pas de "dans cet article nous allons voir..." — répondre directement
- Exemple : "La résiliation d'une assurance auto est possible à tout moment après la première année grâce à la loi Hamon (L.113-15-2 du Code des assurances). Avant 12 mois, seuls certains motifs légitimes permettent une résiliation anticipée. Le préavis est d'un mois, et l'assureur doit rembourser le prorata des cotisations."

### 2. Densité statistique
- Minimum 1 stat sourcée tous les 150-200 mots
- Format : "Selon [source] ([année]), [stat chiffrée]"
- Sources nommées (pas "selon les études" mais "selon France Assureurs (2025)")
- Privilégier les stats du brief de recherche

### 3. Entités nommées
- Minimum 5 entités nommées par article
- Types : lois (loi Hamon, loi Chatel), organismes (ACPR, FFA), assureurs, dispositifs (bonus-malus)
- JAMAIS de langage générique quand un nom propre existe

### 4. Hiérarchie de headings
- Minimum 4 H2
- Pas de niveaux sautés (pas de H3 sans H2 parent)
- Chaque H2 commence par répondre directement à la question du heading
- H2 formulés comme des questions quand c'est naturel

### 5. Citation expert
- Au moins 1 citation attribuée par article
- Format : *"Citation pertinente"* — **Nom, Titre/Organisme**
- Peut être du fondateur Covelia ou d'une source externe

### 6. Blocs extractibles par les IA

Chaque article doit contenir au moins 3 de ces 6 types de blocs, optimisés pour l'extraction par les moteurs génératifs :

- **Bloc définition** : "L'assurance auto est..." en début de section — phrase déclarative complète que l'IA peut extraire telle quelle
- **Bloc étapes** : listes numérotées pour les "comment faire" — structure HowTo extractible
- **Bloc comparaison** : toujours utiliser `<ComparisonTable>` — données structurées comparatives
- **Bloc avantages/inconvénients** : structure binaire claire (avantages vs limites, pas "pour/contre" promotionnel)
- **Bloc FAQ** : via `<FAQSection>` — déjà structuré en schema FAQPage
- **Bloc statistique** : formaliser le pattern "Selon [Source] ([année]), [stat chiffrée]." — phrase auto-suffisante citéable

### 7. Ton et style
- Informatif, neutre, factuel
- JAMAIS promotionnel (le contenu informationnel génère 6x plus de citations IA)
- Vouvoiement systématique
- Phrases courtes et claires (1 idée par phrase)

### 8. Anti-patterns de rédaction (INTERDIT)

Ces formulations diluent le contenu et réduisent la citabilité par les IA :

- **Mots vides** : "optimiser", "innovative", "solution", "performant", "incontournable", "clé en main" — remplacer par des faits précis
- **Voix passive** : "l'assurance est souscrite par..." → "l'assuré souscrit..."
- **Points d'exclamation** : jamais dans un article informatif
- **Introductions creuses** : "Dans un monde où...", "Il est important de...", "De nos jours..." — commencer directement par le contenu
- **Mots de liaison superflus** : "En effet", "Il convient de noter que", "Force est de constater" — aller droit au but
- **Adverbes vagues** : "très", "vraiment", "particulièrement" — quantifier ou supprimer

### 9. Longueur minimale
- **Article pilier** : 3 000-4 500 mots
- **Article spoke** : 1 800-2 500 mots
- Compter les mots du contenu MDX uniquement (hors frontmatter et imports)

### 10. Composants visuels
- Minimum **3 types de composants différents** par article
- `StatHighlight` : **1 par article**, placé dans les 500 premiers mots (après la capsule réponse)
- `CallToAction` : **2 placements** — après l'intro et avant la FAQ
- `InfoBox type="tip"` : au moins **1 par article**
- `ExpertQuote` : **1 par article** — remplace les blockquotes markdown pour les citations attribuées
- `InfoBox type="warning"` : à utiliser quand une sanction ou un risque est mentionné

### 11. Paragraphes courts
- Maximum **3-4 phrases par paragraphe**
- Découper les blocs longs pour faciliter la lecture mobile et l'extraction IA

## Règles réglementaires (HARD GATE — violation = article rejeté)

### INTERDIT — Ne JAMAIS écrire :
- Comparaison personnalisée : "selon votre profil", "pour vous", "adapté à vos besoins"
- Collecte de données : formulaires, calculateurs personnalisés, "entrez vos informations"
- Recommandation spécifique : "nous vous conseillons X", "le meilleur choix est Y"
- Conseil personnalisé : "dans votre situation", "si vous êtes..."

### OBLIGATOIRE — Toujours :
- Cadrer comme informatif : "selon les données du marché", "les comparateurs en ligne indiquent"
- Parler en termes généraux : "un conducteur jeune" (pas "vous, jeune conducteur")
- `affiliateDisclosure: true` dans le frontmatter si l'article contient des liens affiliés
- Formulations neutres pour les CTA : "Comparer les offres sur [comparateur]" (pas "Trouvez VOTRE assurance")

## Structure de l'article MDX

```mdx
---
title: "[Titre ≤65 caractères incluant le keyword principal]"
description: "[Meta description ≤160 caractères, incitative, avec keyword]"
datePublished: 2026-XX-XX
author:
  name: "Covelia"
  credentials: "Expert en assurance"
  url: "https://covelia.fr"
category: "[assurance-auto|assurance-habitation|mutuelle-sante|assurance-emprunteur|reglementation]"
pillar: [true|false]
faq:
  - question: "[Question 1]"
    answer: "[Réponse complète en HTML si besoin, 2-4 phrases]"
  - question: "[Question 2]"
    answer: "[Réponse]"
  [... 5-8 questions au total]
affiliateDisclosure: [true|false]
estimatedReadingTime: [nombre en minutes]
tags: ["tag1", "tag2", "tag3"]
relatedArticles: ["slug-article-existant-1", "slug-article-existant-2"]
---

import FAQSection from '@/components/FAQSection.astro';
import ComparisonTable from '@/components/ComparisonTable.astro';
import AffiliateLink from '@/components/AffiliateLink.astro';
import CallToAction from '@/components/CallToAction.astro';
import StatHighlight from '@/components/StatHighlight.astro';
import ExpertQuote from '@/components/ExpertQuote.astro';
import InfoBox from '@/components/InfoBox.astro';

[CAPSULE RÉPONSE — 40-60 mots — réponse directe à la question du titre, contenant le keyword principal. Pas d'introduction, pas de "bienvenue", juste la réponse.]

<StatHighlight value="[chiffre clé]" label="[description courte]" source="[Source, année]" context="[phrase de contexte optionnelle]" />

## [H2 — Contexte et chiffres clés]

[Contenu avec stats sourcées. Chaque paragraphe apporte une information nouvelle. Minimum 1 stat par section.]

Selon [Source] ([année]), [stat chiffrée]. [Analyse de cette stat].

## [H2 — Fonctionnement / Explication]

[Explication claire du mécanisme, avec références aux lois et organismes pertinents.]

## [H2 — Guide pratique "Comment..."]

[Structure de type HowTo : étapes numérotées, conseils actionnables]

1. **[Étape 1]** — [Explication]
2. **[Étape 2]** — [Explication]
3. **[Étape 3]** — [Explication]

## [H2 — Comparatif du marché] (si pertinent)

<ComparisonTable
  headers={["Critère", "Option A", "Option B", "Option C"]}
  rows={[
    {"Critère": "...", "Option A": "...", "Option B": "...", "Option C": "..."},
  ]}
  caption="Comparatif [sujet] en 2026"
  highlights={[1]}
/>

<CallToAction
  title="Comparez les offres d'assurance"
  description="Utilisez un comparateur en ligne pour trouver l'offre la plus adaptée."
  links={[
    { label: "Comparer sur LeLynx", href: "[URL affiliée]", partner: "LeLynx" },
    { label: "Comparer sur Assurland", href: "[URL affiliée]", partner: "Assurland" },
  ]}
/>

<ExpertQuote quote="[Citation pertinente d'un expert ou organisme]" author="[Nom]" title="[Titre/Fonction]" org="[Organisme]" />

<InfoBox type="tip" title="[Astuce pratique]">
[Conseil actionnable pour le lecteur, 2-3 phrases maximum.]
</InfoBox>

<CallToAction
  title="Comparez les offres"
  description="[Description adaptée au sujet de l'article]"
  links={[
    { label: "Comparer sur LeLynx", href: "[URL affiliée]", partner: "LeLynx" },
    { label: "Comparer sur Assurland", href: "[URL affiliée]", partner: "Assurland" },
  ]}
/>

## Questions fréquentes

<FAQSection faq={frontmatter.faq} />

*Dernière mise à jour : [mois] 2026. Les informations présentées sont données à titre indicatif et ne constituent pas un conseil personnalisé.*
```

## Étape 1 : Rédaction

Rédige l'article complet en suivant strictement :
- Le brief de recherche (stats, FAQ, structure, entités)
- Les règles GEO ci-dessus
- Les contraintes réglementaires
- Le schéma Zod de `content.config.ts`

**Important :** La rédaction doit être mono-thread (pas de subagents). La cohérence du ton et du style exige un seul rédacteur.

N'importe JAMAIS les composants non utilisés. Si l'article n'a pas de tableau comparatif, n'importe pas ComparisonTable.

## Étape 2 : Création du fichier

1. Détermine le pilier/catégorie de l'article
2. **Génère le slug à partir du titre de l'article** (règle critique ci-dessous)
3. Vérifie que le répertoire `src/content/[catégorie]/` existe (crée-le si nécessaire)
4. Écris le fichier : `src/content/[catégorie]/[slug].mdx`

### Règle de nommage du slug (CRITIQUE)

Le slug = le nom du fichier MDX (sans extension) = le segment d'URL final. Il est dérivé du **titre de l'article**, PAS de la catégorie.

**Règles :**
- Le slug est la version kebab-case du titre, simplifiée et sans mots vides
- Le slug ne doit JAMAIS être identique au nom du dossier/catégorie (sinon l'URL devient `/assurance-auto/assurance-auto/` — redondant et mauvais pour le SEO)
- Le slug doit être descriptif et unique — un lecteur doit comprendre le sujet en lisant l'URL
- Maximum 5-6 mots, pas d'articles ni de prépositions inutiles

**Exemples :**

| Titre | Catégorie | Slug | URL finale |
|-------|-----------|------|------------|
| "Assurance auto : guide complet pour bien s'assurer" | assurance-auto | `guide-complet-assurance-auto` | `/assurance-auto/guide-complet-assurance-auto/` |
| "Comment résilier son assurance auto" | assurance-auto | `resilier-assurance-auto` | `/assurance-auto/resilier-assurance-auto/` |
| "Prix assurance auto jeune conducteur en 2026" | assurance-auto | `prix-jeune-conducteur-2026` | `/assurance-auto/prix-jeune-conducteur-2026/` |
| "Mutuelle santé : tout comprendre" | mutuelle-sante | `guide-complet-mutuelle-sante` | `/mutuelle-sante/guide-complet-mutuelle-sante/` |
| "Loi Hamon : résilier son assurance facilement" | reglementation | `loi-hamon-resiliation-assurance` | `/reglementation/loi-hamon-resiliation-assurance/` |

**Anti-patterns (INTERDIT) :**
- `assurance-auto.mdx` dans le dossier `assurance-auto/` → URL `/assurance-auto/assurance-auto/`
- `mutuelle-sante.mdx` dans le dossier `mutuelle-sante/` → URL `/mutuelle-sante/mutuelle-sante/`
- Slugs génériques identiques au pilier

## Étape 3 : Validation build

Lance `npm run build` et vérifie que la compilation réussit.

Si erreur :
- Lis l'erreur attentivement
- Corrige le fichier MDX
- Relance le build

## Étape 4 : Résumé

Présente un résumé de l'article créé :
- Chemin du fichier
- Nombre de mots approximatif
- Temps de lecture estimé
- Nombre de stats citées
- Nombre de liens internes
- Nombre de FAQ
- Composants utilisés
- Note : "Lancez `/review` pour l'audit qualité avant publication."

## Composants disponibles

| Composant | Props | Usage |
|-----------|-------|-------|
| `FAQSection` | `faq: Array<{question, answer}>` | FAQ schema.org, 1 par article |
| `ComparisonTable` | `headers: string[], rows: Array<Record<string,string>>, caption?, highlights?` | Tableaux comparatifs |
| `AffiliateLink` | `href: string, label: string, partner?: string` | Lien affilié inline |
| `CallToAction` | `title?, description?, links: Array<{label, href, partner}>` | Bloc CTA, 2 par article |
| `StatHighlight` | `value: string, label: string, source: string, context?: string` | Stat héro, 1 dans les 500 premiers mots |
| `ExpertQuote` | `quote: string, author: string, title: string, org?: string` | Citation attribuée, 1 par article |
| `InfoBox` | `type?: 'tip'\|'warning'\|'info'\|'important', title?: string` | Callout via `<slot />`, min 1 tip par article |

## Rappels critiques
- Les dates dans le contenu et le frontmatter doivent être en 2026
- Le title doit faire ≤65 caractères
- La description doit faire ≤160 caractères
- Les FAQ doivent avoir entre 5 et 8 questions
- Le slug doit être en kebab-case, dérivé du titre, et JAMAIS identique au nom de la catégorie (voir règle de nommage Étape 2)
- Les URLs affiliées viennent de `src/data/affiliates.ts`
- Longueur : pilier 3 000-4 500 mots, spoke 1 800-2 500 mots
- Minimum 3 types de composants visuels différents par article
- Paragraphes courts : max 3-4 phrases

## Skills liés
- Brief manquant ? → Lancez `/research [keyword]`
- Article terminé ? → Lancez `/review` pour l'audit qualité
- Pipeline complet ? → Lancez `/produce` pour tout enchaîner
