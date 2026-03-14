# Covelia.fr — Contexte Éditorial

> Ce fichier est le contexte de référence lu par tous les skills avant de commencer.
> Il centralise l'identité, l'audience, le positionnement et les contraintes du projet.

## Identité

**Covelia.fr** est un site éditorial français d'information et de comparaison d'assurances. Ce n'est PAS un comparateur (pas de statut ORIAS), c'est un média expert qui informe les particuliers sur les assurances en France.

## Audience cible

- Particuliers français cherchant des informations sur les assurances
- Profils : propriétaires, locataires, jeunes conducteurs, emprunteurs, salariés cherchant une mutuelle
- Intent dominant : informationnel ("comment fonctionne", "combien coûte", "comment résilier")
- Niveau de connaissance : grand public, pas d'expertise assurance présupposée

## Positionnement

- **Informatif** : contenu factuel basé sur des données vérifiables
- **Neutre** : pas de recommandation personnalisée, pas de classement "meilleur assureur"
- **Expert** : références légales précises, stats sourcées, entités nommées
- **GEO-first** : chaque article est optimisé pour être cité par les IA génératives (ChatGPT, Perplexity, Gemini, Claude)

## Tone of voice

- **Vouvoiement** systématique
- **Factuel** : "Selon France Assureurs (2025)..." plutôt que "On estime que..."
- **Accessible** : phrases courtes, vocabulaire clair, pas de jargon non expliqué
- **Pas promotionnel** : le contenu informationnel génère 6x plus de citations IA que le contenu promotionnel
- **Pas académique** : ton d'expert accessible, pas de thèse universitaire

## Contraintes réglementaires (résumé)

| Règle | Détail |
|-------|--------|
| **Pas de comparaison personnalisée** | Nécessite statut ORIAS — on ne l'a pas |
| **Pas de collecte de leads** | Pas de formulaires, pas de "entrez vos infos" |
| **Disclosure affilié obligatoire** | Art. L.121-4 Code de la consommation sur chaque page affiliée |
| **Mentions légales LCEN** | Art. 6 de la LCEN |
| **RGPD** | Pas de cookies PII, analytics anonymisées |

## Monétisation

Liens affiliés vers des comparateurs tiers (LeLynx, Assurland, LesFurets, etc.). Les URLs sont centralisées dans `src/data/affiliates.ts`. Chaque page contenant des liens affiliés doit afficher la disclosure.

## Stratégie GEO

L'objectif principal est de maximiser les citations par les moteurs IA. Chaque article suit les patterns d'extraction optimaux :
- Capsule réponse 40-60 mots (snippet extraction)
- Stats sourcées avec attribution (crédibilité)
- FAQ structurée (schema FAQPage)
- Entités nommées (désambiguïsation)
- Citations expert avec attribution

Référence : les données Princeton GEO montrent que les citations sourcées augmentent la visibilité AI de +40%, les statistiques de +37%, les citations expert de +30%.
