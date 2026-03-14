---
description: "Rédige un article MDX complet, GEO-optimisé et conforme réglementairement, prêt à publier"
---

# /write — Rédacteur GEO-Optimisé Covelia.fr

**Argument attendu :** $ARGUMENTS (le slug de l'article à rédiger, ex: `resilier-assurance-auto`)

Tu rédiges un article complet pour Covelia.fr. C'est le skill le plus critique du pipeline.

## Étape 0 : Récupération du contexte

1. **Brief :** Le brief de `/research` devrait être dans le contexte de la conversation. Si absent, demande à l'utilisateur de lancer `/research` d'abord.
2. **Schéma :** Lis `src/content.config.ts` pour les contraintes Zod du frontmatter.
3. **Affiliés :** Lis `src/data/affiliates.ts` pour les partenaires disponibles dans la catégorie de l'article.
4. **Articles existants :** Scanne `src/content/` pour les opportunités de liens internes.

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

### 6. Ton et style
- Informatif, neutre, factuel
- JAMAIS promotionnel (le contenu informationnel génère 6x plus de citations IA)
- Vouvoiement systématique
- Phrases courtes et claires

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

[CAPSULE RÉPONSE — 40-60 mots — réponse directe à la question du titre, contenant le keyword principal. Pas d'introduction, pas de "bienvenue", juste la réponse.]

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
2. Vérifie que le répertoire `src/content/[catégorie]/` existe (crée-le si nécessaire)
3. Écris le fichier : `src/content/[catégorie]/[slug].mdx`

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

## Rappels critiques
- Les dates dans le contenu et le frontmatter doivent être en 2026
- Le title doit faire ≤65 caractères
- La description doit faire ≤160 caractères
- Les FAQ doivent avoir entre 5 et 8 questions
- Le slug doit être en kebab-case
- Les URLs affiliées viennent de `src/data/affiliates.ts`
