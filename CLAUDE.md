# Covelia.fr — CLAUDE.md

## Projet
Site éditorial français d'information et de comparaison d'assurances. Stratégie GEO (Generative Engine Optimization) pour maximiser les citations par les IA.

## Stack
- **Framework :** Astro 6 (pages statiques, zéro JS client)
- **Styling :** Tailwind CSS 4 (via @tailwindcss/vite)
- **Contenu :** MDX + Content Collections (Astro content loader)
- **TypeScript :** strict mode
- **Hébergement :** Cloudflare Pages (adapter @astrojs/cloudflare)
- **SEO :** astro-seo, @astrojs/sitemap

## Architecture
- **Output :** `static` — toutes les pages sont pré-rendues au build
- **Zéro JS client** sur les pages articles (CSS-only interactions)
- **Content Collections** avec schéma Zod strict pour chaque article
- **5 piliers de contenu :** assurance-auto, assurance-habitation, mutuelle-sante, assurance-emprunteur, reglementation

## Conventions de contenu GEO
- **Capsule réponse :** 40-60 mots en début d'article, réponse directe à la question
- **Stats :** au moins 1 stat sourcée tous les 150-200 mots
- **FAQ :** 5-8 paires question/réponse par article (schema FAQPage)
- **Sources :** obligatoires, citées dans le texte
- **Frontmatter :** toujours complet (title max 65 chars, description max 160 chars)

## Contraintes réglementaires (CRITIQUE)
- **PAS de comparaison personnalisée** (nécessite statut ORIAS)
- **PAS de formulaires de collecte de leads**
- **Disclosure affilié obligatoire** sur chaque page avec contenu affilié (Art. L.121-4 Code consommation)
- **Mentions légales** conformes LCEN Art. 6
- **RGPD :** pas de cookies PII, analytics anonymisées

## Conventions de code
- **Composants :** PascalCase (ex: `FAQSection.astro`)
- **Contenu :** kebab-case (ex: `resilier-assurance-auto.mdx`)
- **TypeScript :** strict, pas de `any`
- **CSS :** Tailwind utility-first, custom dans `src/styles/global.css`
- **Imports :** utiliser les alias Astro (`@/components/...` etc.)

## Palette de couleurs
- Corail primaire/CTA : `--color-coral` (#F97316)
- Corail clair (backgrounds) : `--color-coral-light` (#FED7AA)
- Bleu nuit (fond/texte) : `--color-navy` (#1E293B)
- Bleu nuit clair : `--color-navy-light` (#334155)
- Bleu nuit foncé : `--color-navy-dark` (#0F172A)

## Commandes
```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run preview  # Preview du build
```

## Fichiers clés
| Fichier | Rôle |
|---------|------|
| `src/content.config.ts` | Schémas Zod des collections |
| `src/layouts/BaseLayout.astro` | Squelette HTML, nav, footer |
| `src/layouts/ArticleLayout.astro` | Layout article avec TOC, breadcrumbs |
| `src/components/SchemaOrg.astro` | Données structurées JSON-LD |
| `src/data/affiliates.ts` | Registre centralisé URLs affiliés |
| `src/data/internal-links.ts` | Registre centralisé articles + ancres pour maillage interne |
| `public/robots.txt` | Contrôle accès bots IA |
| `astro.config.mjs` | Config Astro (Cloudflare, sitemap, MDX, Tailwind) |
