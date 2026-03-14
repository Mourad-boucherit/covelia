---
description: "Rafraîchit un article existant : vérifie les stats, met à jour les données obsolètes, relance le review"
---

# /update — Rafraîchissement de Contenu

**Argument :** $ARGUMENTS (slug de l'article à mettre à jour, ou "all" pour scanner tous les articles)

Tu vérifies et mets à jour le contenu d'un article Covelia.fr pour garantir qu'il reste précis et pertinent.

## Mode 1 : Article spécifique ($ARGUMENTS = slug)

### Étape 1 : Lecture de l'article

Lis le fichier MDX de l'article dans `src/content/**/$ARGUMENTS.mdx`.
Extrais :
- Toutes les statistiques citées (chiffres, pourcentages, montants)
- Toutes les sources mentionnées
- Toutes les références réglementaires (lois, articles de code, décrets)
- Tous les liens externes
- La date `datePublished` et `dateModified` du frontmatter

### Étape 2 : Vérification (agents parallèles)

Dispatche **3 agents en parallèle** :

#### Agent 1 : Vérification des stats
```
Pour chaque statistique trouvée dans l'article :
- Via WebSearch, cherche la source originale pour vérifier si les données sont toujours à jour
- Identifie si des données plus récentes existent
- Note les stats obsolètes avec les nouvelles valeurs

Statistiques à vérifier :
[LISTE DES STATS EXTRAITES]

Retourne pour chaque stat :
- Stat originale
- Statut : À JOUR / OBSOLÈTE / NON VÉRIFIABLE
- Nouvelle valeur si obsolète
- Source de la mise à jour
```

#### Agent 2 : Veille réglementaire
```
Pour chaque référence réglementaire dans l'article :
- Via WebSearch, vérifie si la loi/le décret a été modifié récemment
- Cherche de nouvelles lois ou réformes impactant le sujet
- Vérifie les montants réglementaires (plafonds, seuils) qui changent annuellement

Références à vérifier :
[LISTE DES REFS RÉGLEMENTAIRES]

Retourne :
- Référence originale
- Statut : INCHANGÉ / MODIFIÉ / ABROGÉ
- Détails de la modification si applicable
```

#### Agent 3 : Vérification des liens
```
Pour chaque lien externe dans l'article :
- Via WebFetch, vérifie que l'URL est accessible (pas de 404, pas de redirect vers page d'accueil)
- Note les liens cassés

Liens à vérifier :
[LISTE DES URLS]

Retourne :
- URL
- Statut : OK / CASSÉ / REDIRIGÉ
- URL de remplacement si trouvée
```

### Étape 3 : Rapport de mise à jour

Présente les résultats :

```markdown
## Rapport de mise à jour — [slug]

### Stats
| Stat | Statut | Action |
|------|--------|--------|
| [stat 1] | À JOUR | Aucune |
| [stat 2] | OBSOLÈTE | Remplacer par [nouvelle valeur] |

### Réglementation
| Référence | Statut | Action |
|-----------|--------|--------|
| [loi X] | INCHANGÉ | Aucune |
| [décret Y] | MODIFIÉ | Mettre à jour [détail] |

### Liens externes
| URL | Statut | Action |
|-----|--------|--------|
| [url 1] | OK | Aucune |
| [url 2] | CASSÉ | Remplacer par [alternative] |

### Résumé
- X stats à mettre à jour
- X références réglementaires à modifier
- X liens cassés à corriger
```

### Étape 4 : Application des mises à jour

Si des mises à jour sont nécessaires :
1. Demande confirmation à l'utilisateur
2. Applique chaque correction dans le fichier MDX
3. Met à jour `dateModified` dans le frontmatter avec la date du jour
4. Ajoute/met à jour la ligne en fin d'article : `*Dernière mise à jour : [mois année].*`

### Étape 5 : Re-validation

Après les modifications :
1. Lance `npm run build` pour vérifier la compilation
2. Propose de lancer `/review` pour re-valider le score GEO

---

## Mode 2 : Scan global ($ARGUMENTS = "all")

### Étape 1 : Inventaire

Scanne tous les fichiers MDX dans `src/content/` et pour chaque article note :
- Le slug
- La date `datePublished`
- La date `dateModified` (si présente)
- Le nombre de jours depuis la dernière modification

### Étape 2 : Priorisation

Trie les articles par urgence de mise à jour :

1. **Critique (>6 mois)** : articles jamais modifiés depuis >6 mois
2. **Important (3-6 mois)** : articles modifiés il y a 3-6 mois
3. **OK (<3 mois)** : articles modifiés récemment

Présente le tableau et recommande les 3 articles les plus urgents à mettre à jour.

L'utilisateur choisit → lance le Mode 1 sur l'article sélectionné.

## Contraintes
- JAMAIS inventer de nouvelles stats — uniquement utiliser des données vérifiées via WebSearch
- Les dates dans le contenu doivent rester en 2026
- Conserver le style et le ton de l'article original
- Ne pas modifier la structure (H2/H3) sauf si une section est devenue obsolète
- Toujours mettre à jour `dateModified` quand le contenu change
