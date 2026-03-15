---
description: "Audit de maillage interne : détecte les articles orphelins et propose des insertions de liens entre articles"
---

# /link-audit — Audit de Maillage Interne

**Périodicité recommandée :** après chaque 5-10 articles publiés

Tu audites le maillage interne de l'ensemble des articles Covelia.fr et proposes des améliorations.

## Étape 1 : Chargement des données

1. **Lis `src/data/internal-links.ts`** pour charger le registre centralisé de tous les articles (slugs, URLs, catégories, keywords, ancres suggérées)
2. **Pour chaque article du registre**, lis le fichier MDX correspondant dans `src/content/[category]/[slug].mdx` et extrais :
   - Tous les liens internes dans le contenu (pattern: `](/` ou `href="/`)
   - Les `relatedArticles` du frontmatter
   - Le nombre total de liens internes par article

## Étape 2 : Construction de la matrice de liens

Avec les données des 5 agents, construis :

### Matrice de liens (qui lie vers qui)

```
             | auto-1 | auto-2 | hab-1 | hab-2 | mut-1 | ...
auto-1       |   —    |   ✓    |       |       |   ✓   |
auto-2       |   ✓    |   —    |       |       |       |
hab-1        |        |        |   —   |   ✓   |       |
...
```

### Métriques par article
- **Liens sortants** : nombre de liens vers d'autres articles Covelia
- **Liens entrants** : nombre de liens reçus d'autres articles
- **Score maillage** : (sortants + entrants) / 2

## Étape 3 : Diagnostic

Identifie et catégorise les problèmes :

### 1. Articles orphelins (0 liens entrants)
Articles qui ne sont liés par aucun autre article. Problème critique pour le SEO.

### 2. Pages pilier sans liens vers leurs spokes
Chaque page `pillar: true` devrait lier vers TOUS ses spokes (articles du même pilier).

### 3. Spokes sans lien vers leur page pilier
Chaque spoke devrait lier vers sa page pilier au minimum.

### 4. Liens inter-piliers manquants
Opportunités de liens entre piliers quand les sujets se recoupent :
- assurance-auto ↔ reglementation (lois Hamon, Chatel)
- mutuelle-sante ↔ reglementation (100% Santé, résiliation)
- assurance-emprunteur ↔ reglementation (loi Lemoine)
- assurance-habitation ↔ assurance-auto (multi-risques)

### 5. Articles sous le seuil de 8 liens internes
Articles ayant moins de 8 liens internes sortants (ou moins de 10 pour les piliers). Afficher le nombre exact et le seuil attendu.

### 6. relatedArticles non à jour
Vérifier que le champ `relatedArticles` du frontmatter est cohérent avec les liens réels.

## Étape 4 : Proposition d'insertions

Pour chaque lien manquant identifié, propose :

```markdown
### Insertion #X (priorité: haute/moyenne/basse)

- **Article source :** [slug] — [title]
- **Article cible :** [slug] — [title]
- **Type :** pillar→spoke / spoke→pillar / inter-pilier / thématique
- **Texte d'ancrage suggéré :** "[texte du lien]"
- **Emplacement suggéré :** [section/H2 où insérer le lien]
- **Contexte :** "[phrase complète avec le lien intégré naturellement]"
```

Trie les insertions par priorité :
1. **Haute** : pages pilier ↔ spokes, articles orphelins
2. **Moyenne** : liens inter-piliers thématiques
3. **Basse** : enrichissement de maillage existant

## Étape 5 : Rapport synthétique

```
╔══════════════════════════════════════════════════╗
║         AUDIT MAILLAGE INTERNE — Covelia.fr      ║
╠══════════════════════════════════════════════════╣
║                                                  ║
║  Articles total :           XX                   ║
║  Articles orphelins :       XX                   ║
║  Liens internes total :     XX                   ║
║  Liens moyens/article :     X.X                  ║
║                                                  ║
║  Par pilier :                                    ║
║  • assurance-auto :         XX articles, XX liens║
║  • assurance-habitation :   XX articles, XX liens║
║  • mutuelle-sante :         XX articles, XX liens║
║  • assurance-emprunteur :   XX articles, XX liens║
║  • reglementation :         XX articles, XX liens║
║                                                  ║
║  Insertions proposées :     XX                   ║
║  • Priorité haute :         XX                   ║
║  • Priorité moyenne :       XX                   ║
║  • Priorité basse :         XX                   ║
║                                                  ║
╚══════════════════════════════════════════════════╝
```

## Étape 6 : Application

Demande à l'utilisateur :
- "Voulez-vous appliquer toutes les insertions haute priorité ?"
- "Ou voulez-vous les passer en revue une par une ?"

Pour chaque insertion approuvée :
1. Ouvre l'article source
2. Insère le lien dans le contexte proposé
3. Met à jour le champ `relatedArticles` du frontmatter si nécessaire
4. Vérifie que le build passe après chaque modification

## Contraintes
- Ne jamais forcer un lien qui n'est pas naturel dans le contexte
- Le texte d'ancrage doit être descriptif (pas "cliquez ici")
- Maximum 3-4 liens internes par section H2 (éviter le sur-maillage)
- Les liens doivent apporter de la valeur au lecteur, pas juste du "SEO juice"
