---
description: "Recherche approfondie et brief structuré pour un article : stats, réglementation, SERP, FAQ"
---

# /research — Recherche et Brief Structuré

**Argument attendu :** $ARGUMENTS (le sujet ou keyword cible de l'article)

Tu prépares un brief complet et structuré pour la rédaction d'un article Covelia.fr sur le sujet : **$ARGUMENTS**

## Étape 1 : Recherche parallèle (3 agents)

Dispatche **3 agents en parallèle** avec le Agent tool :

### Agent 1 : Statistiques 2026
```
Recherche les statistiques les plus récentes (2025-2026) sur le sujet "$ARGUMENTS" en France.

Sources prioritaires à chercher via WebSearch :
- INSEE (indices prix, statistiques ménages)
- ACPR/Banque de France (rapports annuels assurance)
- FFA — France Assureurs (chiffres clés du marché)
- DREES (comptes de la santé, protection sociale)
- Argus de l'Assurance (études de marché)
- UFC-Que Choisir (enquêtes consommateurs)

Pour chaque stat trouvée, note :
- La donnée chiffrée exacte
- La source précise (organisme, titre du rapport)
- L'année de la donnée
- L'URL source si disponible

Objectif : trouver 6-10 statistiques pertinentes et sourcées.
```

### Agent 2 : Veille réglementaire
```
Recherche le cadre réglementaire français applicable à "$ARGUMENTS".

Via WebSearch, cherche :
- Articles de loi pertinents (Code des assurances, Code de la consommation, Code de la mutualité)
- Lois récentes impactantes (Hamon, Chatel, Lemoine, 100% Santé, etc.)
- Décrets ou arrêtés récents (2025-2026)
- Jurisprudence notable récente
- Positions de l'ACPR ou du médiateur de l'assurance

Pour chaque élément réglementaire, note :
- La référence exacte (article de loi, numéro de décret)
- Le contenu/impact en 1-2 phrases
- La date d'entrée en vigueur
```

### Agent 3 : Analyse SERP et concurrence
```
Analyse les résultats de recherche Google pour "$ARGUMENTS" en France.

Via WebSearch :
1. Cherche "$ARGUMENTS" et note les 5 premiers résultats organiques (titre, URL, angle)
2. Cherche "$ARGUMENTS site:lesfurets.com OR site:lelynx.fr OR site:assurland.com OR site:meilleureassurance.com"
3. Identifie les "People Also Ask" / questions associées
4. Cherche "$ARGUMENTS comparatif 2026" pour voir les angles concurrents

Synthétise :
- Les angles les plus couverts par les concurrents
- Les angles MANQUANTS (opportunités de différenciation)
- Les questions PAA trouvées (pour alimenter la FAQ)
- Le type d'intent dominant (informationnel, commercial, transactionnel)
```

## Étape 2 : Inventaire articles existants

Pendant que les agents travaillent, scanne les articles existants dans `src/content/` pour identifier les opportunités de maillage interne.

Lis le frontmatter de chaque article existant pour trouver des liens possibles vers/depuis le futur article.

## Étape 3 : Synthèse en Brief Structuré

Une fois les 3 agents terminés, compile un brief dans ce format exact :

```markdown
# Brief : [Titre de travail de l'article]

## Metadata
- **Keyword principal :** [keyword]
- **Intent :** Informationnel / Commercial / Mixte
- **Pilier :** [catégorie]
- **Type :** Pillar / Spoke
- **Slug proposé :** [slug-en-kebab-case]

## Capsule réponse (draft 40-60 mots)
[Réponse directe à la question principale, contenant le keyword]

## Statistiques à intégrer (minimum 6)
1. [Stat] — Source : [source], [année]
2. [Stat] — Source : [source], [année]
...

## Cadre réglementaire
- [Loi/article] : [impact en 1 phrase]
...

## Entités nommées à inclure (8-12)
[Liste des noms propres : lois, organismes, assureurs, dispositifs]

## FAQ proposée (5-8 questions)
1. [Question issue des PAA ou gaps concurrents]
...

## Structure article proposée
- H1 : [titre optimisé ≤65 caractères]
- H2 : [section 1 — angle]
- H2 : [section 2 — angle]
- H2 : [section pratique / "comment faire"]
- H2 : [section comparatif si pertinent]
- H2 : Questions fréquentes

## Opportunités de maillage interne
- Vers : [articles existants pertinents]
- Depuis : [articles existants qui devraient lier vers celui-ci]

## Angles de différenciation vs concurrence
- [Ce que les concurrents ne couvrent pas]
- [Angle unique Covelia possible]
```

## Étape 4 : Validation

Présente le brief à l'utilisateur et demande :
- Validation ou ajustements du plan
- Informations complémentaires issues de son expertise assurance
- Choix du titre final

Termine par : "Brief validé ? Tapez `/write [slug]` pour lancer la rédaction."

## Contraintes
- Toutes les stats doivent être datées 2026 ou sources 2025 présentées comme "dernières données disponibles"
- JAMAIS de données inventées — si une stat n'est pas trouvée, l'indiquer clairement
- Les sources doivent être vérifiables (URL ou référence précise)
- Le brief doit contenir assez d'information pour rédiger l'article SANS recherche supplémentaire
