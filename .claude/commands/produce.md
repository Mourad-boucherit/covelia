---
description: "Pipeline complet de production d'article : plan-next → research → write → review → publish, en une seule commande"
---

# /produce — Pipeline Complet de Production

Tu es l'orchestrateur principal de Covelia.fr. Tu pilotes le pipeline complet de production d'un article, de la planification au déploiement.

**Argument optionnel :** $ARGUMENTS
- Si vide : commence par `/plan-next` pour choisir l'article
- Si un keyword/sujet est fourni : saute directement à la recherche sur ce sujet
- Si un slug est fourni avec un fichier existant dans `src/content/` : saute à `/review`

## Phase 0 : Contexte

Avant toute action, lis `src/data/covelia-context.md` pour charger l'identité, le ton, le positionnement et les contraintes Covelia. Ce contexte guide toutes les phases suivantes.

## Pipeline

```
┌──────────┐    ┌─────────────┐    ┌────────────┐    ┌─────────┐    ┌────────────┐    ┌───────────┐
│ CONTEXTE │───→│  PLAN-NEXT  │───→│  RESEARCH  │───→│  WRITE  │───→│   REVIEW   │───→│  PUBLISH  │
│ Identité │    │  Quel sujet │    │  Brief     │    │  MDX    │    │  Scorecard │    │  Deploy   │
└──────────┘    └─────────────┘    └────────────┘    └─────────┘    └────────────┘    └───────────┘
                       ↑                                                  │
                       │                              ┌───────────┐      │
                       └──────────────────────────────│ CORRECTIONS│←─────┘
                                                      │ si < 8/10  │
                                                      └───────────┘
```

## Phase 1 : Planification

Si aucun sujet n'est fourni :

1. Scanne `src/content/` pour inventorier les articles existants par pilier
2. Compare avec le calendrier éditorial intégré (voir les données ci-dessous)
3. Applique les règles de priorisation : pilier avant spokes, calendrier, volume, saisonnalité
4. Présente les **3 meilleurs candidats** :

```
### Recommandation 1 (priorité haute)
- **Keyword :** [keyword]
- **Volume :** [volume]  |  **Pilier :** [catégorie]  |  **Type :** Pillar/Spoke
- **Justification :** [pourquoi maintenant]
```

**STOP — Attendre le choix de l'utilisateur avant de continuer.**

### Calendrier éditorial

**Mois 1-2 (Mars-Avril 2026) : Auto + Habitation**

| # | Keyword | Volume | Type | Pilier |
|---|---------|--------|------|--------|
| 1 | assurance auto | 50K-80K | Pillar | assurance-auto |
| 2 | assurance habitation | 30K-50K | Pillar | assurance-habitation |
| 3 | comment résilier assurance auto | 3K-8K | Spoke | assurance-auto |
| 4 | assurance auto pas cher | 8K-15K | Spoke | assurance-auto |
| 5 | prix assurance auto jeune conducteur | 3K-8K | Spoke | assurance-auto |
| 6 | assurance habitation locataire | 3K-8K | Spoke | assurance-habitation |
| 7 | assurance auto en ligne | 3K-8K | Spoke | assurance-auto |
| 8 | comparatif assurance habitation | 3K-8K | Spoke | assurance-habitation |
| 9 | garantie assurance auto | 1K-3K | Spoke | assurance-auto |
| 10 | assurance habitation propriétaire | 1K-3K | Spoke | assurance-habitation |

**Mois 3-4 (Mai-Juin 2026) : Mutuelle + Emprunteur**

| # | Keyword | Volume | Type | Pilier |
|---|---------|--------|------|--------|
| 11 | mutuelle santé | 30K-50K | Pillar | mutuelle-sante |
| 12 | assurance emprunteur | 15K-30K | Pillar | assurance-emprunteur |
| 13 | changer de mutuelle | 3K-8K | Spoke | mutuelle-sante |
| 14 | mutuelle dentaire | 3K-8K | Spoke | mutuelle-sante |
| 15 | délégation assurance emprunteur | 1K-3K | Spoke | assurance-emprunteur |
| 16 | loi Lemoine assurance emprunteur | 1K-3K | Spoke | assurance-emprunteur |
| 17 | mutuelle senior | 3K-8K | Spoke | mutuelle-sante |
| 18 | remboursement optique mutuelle | 1K-3K | Spoke | mutuelle-sante |
| 19 | assurance emprunteur taux | 1K-3K | Spoke | assurance-emprunteur |
| 20 | résiliation mutuelle | 1K-3K | Spoke | mutuelle-sante |

**Mois 5-6 (Juillet-Août 2026) : Réglementation**

| # | Keyword | Volume | Type | Pilier |
|---|---------|--------|------|--------|
| 21 | loi Hamon assurance | 3K-8K | Spoke | reglementation |
| 22 | résiliation infra-annuelle | 1K-3K | Spoke | reglementation |
| 23 | loi Chatel assurance | 1K-3K | Spoke | reglementation |
| 24 | devoir de conseil assurance | 500-1K | Spoke | reglementation |

**Articles supplémentaires :**
franchise assurance auto (1K-3K), bonus malus (3K-8K), tous risques vs tiers (1K-3K), dégât des eaux (3K-8K), habitation meublé (1K-3K), 100% santé (3K-8K), questionnaire santé emprunteur (1K-3K)

### Règles de priorisation
1. Pages pilier avant spokes (le pilier doit exister pour mailler)
2. Suivre le calendrier Mois 1-2 → 3-4 → 5-6
3. Volume de recherche (à priorité égale, plus haut volume d'abord)
4. Saisonnalité
5. Favoriser les articles qui créent des liens vers l'existant

---

## Phase 2 : Recherche

Une fois le sujet choisi, dispatche **3 agents en parallèle** :

**Agent 1 — Stats 2026 :** Recherche via WebSearch les stats récentes sur le sujet. Sources : INSEE, ACPR, FFA/France Assureurs, DREES, UFC-Que Choisir, Argus de l'Assurance. Objectif : 6-10 stats sourcées avec année et organisme.

**Agent 2 — Réglementation :** Recherche le cadre légal applicable. Code des assurances, Code de la consommation, lois récentes (Hamon, Chatel, Lemoine, 100% Santé). Références exactes (articles de loi, dates).

**Agent 3 — SERP :** Analyse les résultats Google FR. Top 5 concurrents, People Also Ask, angles manquants, intent dominant.

Pendant ce temps, lis `src/data/internal-links.ts` pour les opportunités de maillage structurées.

### Synthèse en brief

Compile les résultats en un brief structuré :
- Intent de recherche
- 6-10 stats sourcées et datées
- 8-12 entités nommées
- 5-8 questions FAQ
- Plan article (H1, capsule, H2/H3, placement stats/tables/CTA)
- Maillage interne pré-construit (minimum 10 liens depuis `internal-links.ts`)

**STOP — Présenter le brief à l'utilisateur pour validation/ajustement avant de rédiger.**

---

## Phase 3 : Rédaction

Rédige l'article MDX complet en suivant strictement ces règles :

### Règles GEO (non-négociables)
- **Capsule réponse** : 40-60 mots en premier paragraphe, réponse directe, contient le keyword
- **Densité stats** : 1 stat sourcée / 150-200 mots (format: "Selon [Source] ([année]), [donnée]")
- **Entités nommées ≥5** : lois, organismes, assureurs — jamais de langage générique
- **Hiérarchie** : minimum 4 H2, pas de niveaux sautés, pas de `---` manuels (le CSS ajoute les séparateurs)
- **Rythme visuel** : alterner texte / composant / texte, max 3 paragraphes consécutifs sans élément visuel
- **Citation expert** : au moins 1 citation attribuée via `<ExpertQuote>`
- **Ton** : informatif, neutre, factuel, vouvoiement
- **Longueur** : pilier 3 500-5 000 mots, spoke 2 000-2 800 mots
- **Paragraphes courts** : max 3-4 phrases par paragraphe

### Règles réglementaires (HARD GATE)
- **JAMAIS** : comparaison personnalisée, formulaires, recommandation spécifique, "selon votre profil", "nous vous conseillons"
- **TOUJOURS** : cadrage informatif ("selon les données du marché"), formulations neutres, `affiliateDisclosure: true` si liens affiliés

### Structure MDX
```
---
title: "≤65 chars avec keyword"
description: "≤160 chars"
datePublished: 2026-XX-XX
author: { name: "Covelia", credentials: "Expert en assurance" }
category: "[pilier]"
pillar: [true/false]
faq: [5-8 questions]
affiliateDisclosure: [true/false]
estimatedReadingTime: [minutes]
tags: [...]
relatedArticles: [slugs existants]
---

[imports des composants UTILISÉS uniquement]

[Capsule 40-60 mots]

## [H2 sections avec stats, entités, contenu riche]

## Questions fréquentes
<FAQSection faq={frontmatter.faq} />

*Dernière mise à jour : [mois] 2026.*
```

### Composants disponibles
- `FAQSection` : `faq: Array<{question, answer}>`
- `ComparisonTable` : `headers: string[], rows: Array<Record<string,string>>, caption?: string, highlights?: number[]`
- `AffiliateLink` : `href: string, label: string, partner?: string`
- `CallToAction` : `title?: string, description?: string, links: Array<{label, href, partner}>` — **2 par article** (après intro + avant FAQ)
- `StatHighlight` : `value: string, label: string, source: string, context?: string` — **1 par article**, dans les 500 premiers mots
- `ExpertQuote` : `quote: string, author: string, title: string, org?: string` — **1 par article**, remplace les blockquotes markdown pour citations attribuées
- `InfoBox` : `type?: 'tip'|'warning'|'info'|'important', title?: string` — contenu via `<slot />`, min **1 tip** par article

### Règle de nommage du slug (CRITIQUE)
Le slug = nom du fichier MDX (sans extension) = segment d'URL final. Il est dérivé du **titre de l'article**, JAMAIS identique au nom de la catégorie.
- Ex: titre "Assurance auto : guide complet" → slug `guide-complet-assurance-auto` (PAS `assurance-auto`)
- Ex: titre "Comment résilier son assurance auto" → slug `resilier-assurance-auto`
- Maximum 5-6 mots, kebab-case, sans articles ni prépositions inutiles

### Post-écriture
1. Crée le répertoire `src/content/[catégorie]/` si nécessaire
2. Écrit le fichier MDX avec le slug dérivé du titre (JAMAIS le nom de la catégorie)
3. Lance `npm run build` pour valider

**Pas de subagents pour la rédaction** — cohérence de ton exige un seul rédacteur.

---

## Phase 4 : Review

Audite l'article selon 3 axes :

### GEO Score (X/10)
| Critère | Pts |
|---------|-----|
| Capsule 40-60 mots | /1 |
| Densité stats 1/200 mots | /2 |
| FAQ 5-8 questions | /1 |
| Entités nommées ≥5 | /1 |
| Hiérarchie H2/H3 | /1 |
| Liens internes ≥8 | /2 |
| Sources externes ≥3 | /1 |
| Citation expert | /1 |
| Diversité visuelle (3+ composants) | /1 |

### Conformité (PASS/FAIL)
Scan pour : comparaison personnalisée, collecte leads, conseil personnalisé, disclosure manquant.

### Technique (PASS/FAIL)
Frontmatter Zod-valide, imports utilisés, liens internes existants, build OK.

### Seuil
- **GEO ≥ 9/11 ET Conformité PASS ET Technique PASS** → Phase 4.5
- **Sinon** → Corriger automatiquement et re-auditer (max 2 itérations)

---

## Phase 4.5 : Vérification maillage (OBLIGATOIRE)

Avant publication, vérifie spécifiquement le maillage interne :

1. **Compter les liens internes** (pattern: `](/` ou `href="/`). Seuil : pilier ≥ 10, spoke ≥ 8
2. **Vérifier le lien pilier** : pour les spokes, un lien vers la page pilier doit être présent dans les 500 premiers mots
3. **Vérifier la distribution** : au moins 1 lien par section H2 (hors FAQ)
4. **Si manquants** : insérer les liens depuis `src/data/internal-links.ts` avec des ancres descriptives

---

## Phase 5 : Publication

1. `npm run build` final
2. Vérifie le HTML dans `dist/`
3. Commit avec message conventionnel : `content(pilier): add "titre"`
4. **Mettre à jour `src/data/internal-links.ts`** : ajouter le nouvel article au registre avec slug, url, category, pillar, title, targetKeywords et suggestedAnchors
5. Affiche le résumé de déploiement

**STOP — Attendre confirmation explicite avant `git push`.**

Après push : "Déploiement Cloudflare Pages en cours."

---

## Résumé de fin de pipeline

```
╔══════════════════════════════════════════════════════╗
║              ARTICLE PRODUIT ET DÉPLOYÉ              ║
╠══════════════════════════════════════════════════════╣
║                                                      ║
║  Titre :      [title]                                ║
║  Slug :       [slug]                                 ║
║  Pilier :     [catégorie]                            ║
║  Type :       Pillar / Spoke                         ║
║  Mots :       ~XXXX                                  ║
║  Lecture :    X min                                  ║
║                                                      ║
║  GEO Score :  X/10                                   ║
║  Stats :      X citées                               ║
║  FAQ :        X questions                            ║
║  Liens :      X internes, X externes                 ║
║                                                      ║
║  Commit :     [hash]                                 ║
║  Fichier :    src/content/[cat]/[slug].mdx           ║
║                                                      ║
║  Prochain :   /produce pour l'article suivant        ║
║               /link-audit après 5-10 articles        ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```

---

## Phase 6 : Apprentissage (auto-amélioration)

Après chaque article produit, améliore le système pour le suivant.

### 6a — Feedback utilisateur

Demande à l'utilisateur :
- "Des ajustements à retenir pour les prochains articles ?" (ton, longueur, style, structure...)
- Note tout feedback reçu pendant le pipeline (corrections demandées, sections ajoutées/supprimées, préférences de formulation)

### 6b — Auto-diagnostic

Analyse ce qui s'est passé pendant le pipeline :
- Le build a-t-il échoué ? Sur quoi ? → Ajouter un garde-fou dans `/write`
- Le review a-t-il détecté des patterns récurrents (score < 2 sur un critère) ? → Renforcer la règle dans `/write`
- Des corrections manuelles ont-elles été nécessaires ? → Les intégrer comme règle
- La recherche a-t-elle trouvé suffisamment de stats ? → Ajuster les sources dans `/research`

### 6c — Mise à jour

Pour chaque amélioration identifiée :

1. **Si c'est une préférence utilisateur** → Sauvegarder dans la mémoire (`memory/feedback_*.md`) pour que TOUTES les futures conversations en bénéficient
2. **Si c'est une règle de rédaction** → Modifier directement le skill concerné (`.claude/commands/write.md`, `review.md`, etc.) via le Edit tool
3. **Si c'est un pattern récurrent** → Ajouter un exemple concret dans le skill pour guider les futures rédactions

### Exemples d'auto-améliorations :

| Signal | Action |
|--------|--------|
| L'utilisateur corrige systématiquement le ton → trop formel | Ajouter dans `/write` : "Ton accessible, pas académique" + mémoire feedback |
| Le review donne toujours 0/1 sur liens internes | Renforcer dans `/write` la section maillage avec une checklist |
| Les stats DREES sont toujours introuvables | Retirer DREES des sources prioritaires dans `/research`, ajouter des alternatives |
| Le build échoue sur les imports MDX | Ajouter une vérification des imports avant le Write dans `/write` |
| L'utilisateur ajoute toujours une section "Lexique" | Ajouter cette section au template dans `/write` |

### Format de mise à jour des skills

Quand tu modifies un skill, annonce-le clairement :
```
Amélioration appliquée à /write :
  Ajout règle : "[nouvelle règle]"
  Raison : [feedback utilisateur / pattern détecté]
```

Ne jamais supprimer de règles existantes sans validation utilisateur. Uniquement ajouter ou affiner.
