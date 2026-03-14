---
description: "Build, validation, commit et déploiement d'un article sur Cloudflare Pages"
---

# /publish — Build, Commit et Déploiement

Tu gères le pipeline de publication des articles Covelia.fr vers Cloudflare Pages.

## Étape 1 : Identification des changements

Lance `git status` et `git diff --name-only` pour identifier :
- Les fichiers MDX nouveaux ou modifiés dans `src/content/`
- Tout autre fichier modifié (composants, config, etc.)

Si aucun changement détecté : "Aucun article à publier. Le working tree est propre."

## Étape 2 : Build de production

```bash
npm run build
```

Analyse la sortie :
- **Succès** : note le nombre de pages générées et le temps de build
- **Échec** : affiche l'erreur complète, identifie le fichier problématique, et propose un fix

Si le build échoue, NE PAS continuer. Corriger d'abord.

## Étape 3 : Vérification du HTML généré

Pour chaque article nouveau/modifié, vérifie que le fichier HTML correspondant existe dans `dist/` :
- Article dans `src/content/assurance-auto/mon-article.mdx` → vérifie `dist/assurance-auto/mon-article/index.html`

Si le HTML n'est pas généré, c'est un problème de routing. Vérifier `src/pages/`.

## Étape 4 : Commit

Prépare le commit avec un message conventionnel :

### Format du message de commit

Pour un **nouvel article** :
```
content(pilier): add "titre de l'article"
```

Pour une **mise à jour** :
```
content(pilier): update "titre de l'article"
```

Pour **plusieurs articles** :
```
content: add X articles (pilier1, pilier2)
```

Pour des **corrections post-review** :
```
fix(pilier): improve GEO score for "titre"
```

### Procédure
1. Stage uniquement les fichiers pertinents (MDX, composants modifiés)
2. NE PAS stager des fichiers sensibles (.env, credentials)
3. Crée le commit

## Étape 5 : Confirmation avant push

Affiche un résumé avant de pousser :

```
╔══════════════════════════════════════════════════╗
║             PRÊT À DÉPLOYER                      ║
╠══════════════════════════════════════════════════╣
║                                                  ║
║  Commit :    [hash court]                        ║
║  Message :   [message de commit]                 ║
║                                                  ║
║  Fichiers :                                      ║
║  + src/content/assurance-auto/article.mdx        ║
║  ~ src/components/Modified.astro                 ║
║                                                  ║
║  Build :     OK (XX pages, X.Xs)                 ║
║  Branch :    main                                ║
║  Remote :    origin                              ║
║                                                  ║
║  ⚠ Le push sur main déclenche le déploiement     ║
║    Cloudflare Pages automatiquement.             ║
║                                                  ║
╚══════════════════════════════════════════════════╝

Confirmer le push ? (oui/non)
```

**ATTENDRE la confirmation explicite de l'utilisateur avant de pusher.**

## Étape 6 : Push et déploiement

Si l'utilisateur confirme :
```bash
git push origin main
```

Après le push :
- "Push effectué. Le déploiement Cloudflare Pages est en cours."
- "Vérifiez le déploiement sur le dashboard Cloudflare ou sur votre URL de production."

## Contraintes
- JAMAIS pusher sans confirmation explicite de l'utilisateur
- JAMAIS forcer un push (`--force`)
- JAMAIS committer des fichiers `.env` ou contenant des secrets
- Si le build échoue, corriger avant de continuer
- Un commit = un article (sauf batch explicitement demandé)
- Toujours utiliser des messages de commit conventionnels

## Skills liés
- Prochain article ? → Lancez `/produce` pour le pipeline complet
- Maillage à vérifier ? → Lancez `/link-audit` après 5-10 articles publiés
