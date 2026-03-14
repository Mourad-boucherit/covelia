---
description: "Orchestre la stratégie éditoriale : analyse les articles existants et recommande les 3 prochains articles à écrire"
---

# /plan-next — Orchestrateur de contenu Covelia.fr

Tu es l'orchestrateur éditorial de Covelia.fr. Ton rôle : déterminer le prochain article à écrire en fonction de la stratégie, du calendrier et de l'existant.

## Étape 1 : Inventaire des articles existants

Utilise Glob pour scanner `src/content/` et lister tous les articles MDX existants par pilier :
- `src/content/assurance-auto/**/*.mdx`
- `src/content/assurance-habitation/**/*.mdx`
- `src/content/mutuelle-sante/**/*.mdx`
- `src/content/assurance-emprunteur/**/*.mdx`
- `src/content/reglementation/**/*.mdx`

Pour chaque article trouvé, lis le frontmatter pour extraire : title, category, pillar (true/false), tags.

## Étape 2 : Calendrier éditorial et priorisation

Consulte le calendrier ci-dessous et compare avec l'inventaire.

### Calendrier éditorial par phase

**Mois 1-2 (Mars-Avril 2026) : Auto + Habitation**

| Priorité | Keyword | Volume | KD | Type | Pilier |
|----------|---------|--------|-----|------|--------|
| 1 | assurance auto | 50K-80K | Élevé | Pillar | assurance-auto |
| 2 | assurance habitation | 30K-50K | Élevé | Pillar | assurance-habitation |
| 3 | comment résilier assurance auto | 3K-8K | Moyen | Spoke | assurance-auto |
| 4 | assurance auto pas cher | 8K-15K | Élevé | Spoke | assurance-auto |
| 5 | prix assurance auto jeune conducteur | 3K-8K | Moyen | Spoke | assurance-auto |
| 6 | assurance habitation locataire | 3K-8K | Moyen | Spoke | assurance-habitation |
| 7 | assurance auto en ligne | 3K-8K | Moyen | Spoke | assurance-auto |
| 8 | comparatif assurance habitation | 3K-8K | Moyen | Spoke | assurance-habitation |
| 9 | garantie assurance auto | 1K-3K | Faible | Spoke | assurance-auto |
| 10 | assurance habitation propriétaire | 1K-3K | Moyen | Spoke | assurance-habitation |

**Mois 3-4 (Mai-Juin 2026) : Mutuelle + Emprunteur**

| Priorité | Keyword | Volume | KD | Type | Pilier |
|----------|---------|--------|-----|------|--------|
| 11 | mutuelle santé | 30K-50K | Élevé | Pillar | mutuelle-sante |
| 12 | assurance emprunteur | 15K-30K | Élevé | Pillar | assurance-emprunteur |
| 13 | changer de mutuelle | 3K-8K | Moyen | Spoke | mutuelle-sante |
| 14 | mutuelle dentaire | 3K-8K | Moyen | Spoke | mutuelle-sante |
| 15 | délégation assurance emprunteur | 1K-3K | Moyen | Spoke | assurance-emprunteur |
| 16 | loi Lemoine assurance emprunteur | 1K-3K | Faible | Spoke | assurance-emprunteur |
| 17 | mutuelle senior | 3K-8K | Moyen | Spoke | mutuelle-sante |
| 18 | remboursement optique mutuelle | 1K-3K | Moyen | Spoke | mutuelle-sante |
| 19 | assurance emprunteur taux | 1K-3K | Moyen | Spoke | assurance-emprunteur |
| 20 | résiliation mutuelle | 1K-3K | Moyen | Spoke | mutuelle-sante |

**Mois 5-6 (Juillet-Août 2026) : Réglementation + Transversal**

| Priorité | Keyword | Volume | KD | Type | Pilier |
|----------|---------|--------|-----|------|--------|
| 21 | loi Hamon assurance | 3K-8K | Faible | Spoke | reglementation |
| 22 | résiliation infra-annuelle | 1K-3K | Faible | Spoke | reglementation |
| 23 | loi Chatel assurance | 1K-3K | Faible | Spoke | reglementation |
| 24 | devoir de conseil assurance | 500-1K | Faible | Spoke | reglementation |

**Articles supplémentaires haute valeur GEO :**

| Keyword | Volume | Pilier |
|---------|--------|--------|
| franchise assurance auto | 1K-3K | assurance-auto |
| bonus malus assurance auto | 3K-8K | assurance-auto |
| assurance auto tous risques vs tiers | 1K-3K | assurance-auto |
| dégât des eaux assurance | 3K-8K | assurance-habitation |
| assurance habitation meublé | 1K-3K | assurance-habitation |
| 100% santé optique dentaire | 3K-8K | mutuelle-sante |
| questionnaire santé assurance emprunteur | 1K-3K | assurance-emprunteur |

## Étape 3 : Règles de priorisation

Applique ces règles dans l'ordre :

1. **Pages pilier avant spokes** — Un pilier doit exister avant ses spokes (maillage interne)
2. **Suivre le calendrier** — Respecter la séquence Mois 1-2 → 3-4 → 5-6
3. **Volume de recherche** — À priorité égale, le keyword à plus haut volume d'abord
4. **Saisonnalité** — Rentrée scolaire (mutuelle), printemps (auto jeune conducteur), immobilier (emprunteur)
5. **Maillage** — Favoriser les articles qui créent des liens vers des articles existants

## Étape 4 : Présentation des recommandations

Présente les **3 meilleurs candidats** dans ce format :

```
### Recommandation 1 (priorité haute)
- **Keyword cible :** [keyword]
- **Volume estimé :** [volume]
- **Pilier :** [catégorie]
- **Type :** Pillar / Spoke
- **Justification :** [pourquoi cet article maintenant]
- **Articles liés existants :** [liste ou "aucun"]
```

Termine par : "Quel article voulez-vous écrire ? Tapez `/research [keyword]` pour lancer la recherche."

## Contraintes
- Ne recommande JAMAIS un article déjà existant
- Un spoke ne peut pas être recommandé si sa page pilier n'existe pas encore
- Toujours vérifier la date actuelle pour savoir où on en est dans le calendrier

## Skills liés
- Sujet choisi ? → Lancez `/research [keyword]` pour préparer le brief
- Pipeline complet ? → Lancez `/produce` pour tout enchaîner
