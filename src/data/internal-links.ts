export interface ArticleLink {
	slug: string;
	category: string;
	pillar: boolean;
	url: string;
	title: string;
	targetKeywords: string[];
	suggestedAnchors: string[];
}

export const articleRegistry: ArticleLink[] = [
	// ── Assurance Auto ──
	{
		slug: 'guide-complet-assurance-auto',
		category: 'assurance-auto',
		pillar: true,
		url: '/assurance-auto/guide-complet-assurance-auto/',
		title: 'Assurance auto : guide complet pour bien s\'assurer',
		targetKeywords: ['assurance auto', 'garanties auto', 'prix assurance', 'bonus-malus'],
		suggestedAnchors: [
			'guide complet de l\'assurance auto',
			'tout savoir sur l\'assurance auto',
			'assurance automobile en détail',
			'notre guide assurance auto',
		],
	},
	{
		slug: 'resilier-assurance-auto',
		category: 'assurance-auto',
		pillar: false,
		url: '/assurance-auto/resilier-assurance-auto/',
		title: 'Comment résilier son assurance auto en 2026',
		targetKeywords: ['résiliation assurance auto', 'loi Hamon', 'loi Chatel', 'changement assureur'],
		suggestedAnchors: [
			'résilier son assurance auto',
			'résiliation grâce à la loi Hamon',
			'changer d\'assureur auto',
			'procédure de résiliation auto',
		],
	},
	{
		slug: 'assurance-auto-pas-cher',
		category: 'assurance-auto',
		pillar: false,
		url: '/assurance-auto/assurance-auto-pas-cher/',
		title: 'Assurance auto pas cher : comment payer moins',
		targetKeywords: ['assurance auto pas cher', 'réduire prime auto', 'assurance au km', 'prix assurance auto'],
		suggestedAnchors: [
			'payer moins cher son assurance auto',
			'réduire le coût de son assurance auto',
			'assurance auto à petit prix',
			'astuces pour une assurance auto moins chère',
		],
	},
	{
		slug: 'prix-jeune-conducteur-2026',
		category: 'assurance-auto',
		pillar: false,
		url: '/assurance-auto/prix-jeune-conducteur-2026/',
		title: 'Prix assurance auto jeune conducteur 2026',
		targetKeywords: ['assurance jeune conducteur', 'surprime', 'conduite accompagnée', 'prix assurance auto'],
		suggestedAnchors: [
			'prix pour un jeune conducteur',
			'assurance auto jeune conducteur',
			'surprime jeune conducteur',
			'coût de l\'assurance pour les jeunes',
		],
	},
	{
		slug: 'garanties-assurance-auto',
		category: 'assurance-auto',
		pillar: false,
		url: '/assurance-auto/garanties-assurance-auto/',
		title: 'Garanties assurance auto : lesquelles choisir ?',
		targetKeywords: ['garantie assurance auto', 'tous risques', 'tiers', 'responsabilité civile', 'bris de glace'],
		suggestedAnchors: [
			'choisir ses garanties auto',
			'garanties d\'assurance automobile',
			'différence entre tiers et tous risques',
			'les garanties essentielles en auto',
		],
	},
	{
		slug: 'assurance-auto-en-ligne',
		category: 'assurance-auto',
		pillar: false,
		url: '/assurance-auto/assurance-auto-en-ligne/',
		title: 'Assurance auto en ligne : souscrire, comparer, économiser',
		targetKeywords: ['assurance auto en ligne', 'souscription digitale', 'comparateur assurance', 'assureur en ligne'],
		suggestedAnchors: [
			'souscrire une assurance auto en ligne',
			'comparer les assurances auto sur internet',
			'assureurs en ligne',
			'assurance automobile digitale',
		],
	},
	// ── Assurance Habitation ──
	{
		slug: 'guide-complet-assurance-habitation',
		category: 'assurance-habitation',
		pillar: true,
		url: '/assurance-habitation/guide-complet-assurance-habitation/',
		title: 'Assurance habitation : guide complet pour 2026',
		targetKeywords: ['assurance habitation', 'MRH', 'garanties habitation', 'prix assurance habitation'],
		suggestedAnchors: [
			'guide complet de l\'assurance habitation',
			'tout savoir sur l\'assurance habitation',
			'assurance multirisque habitation',
			'notre guide assurance habitation',
		],
	},
	{
		slug: 'assurance-habitation-locataire',
		category: 'assurance-habitation',
		pillar: false,
		url: '/assurance-habitation/assurance-habitation-locataire/',
		title: 'Assurance habitation locataire : obligations et prix',
		targetKeywords: ['assurance habitation locataire', 'risques locatifs', 'responsabilité locative', 'attestation assurance'],
		suggestedAnchors: [
			'assurance habitation pour les locataires',
			'obligations d\'assurance du locataire',
			'assurance risques locatifs',
			'assurance obligatoire pour locataire',
		],
	},
	{
		slug: 'assurance-habitation-proprietaire',
		category: 'assurance-habitation',
		pillar: false,
		url: '/assurance-habitation/assurance-habitation-proprietaire/',
		title: 'Assurance habitation propriétaire : obligations et prix',
		targetKeywords: ['assurance habitation propriétaire', 'PNO', 'copropriété', 'loi Alur'],
		suggestedAnchors: [
			'assurance habitation pour les propriétaires',
			'assurance propriétaire non occupant',
			'assurance PNO',
			'obligations d\'assurance du propriétaire',
		],
	},
	{
		slug: 'comparatif-assurance-habitation',
		category: 'assurance-habitation',
		pillar: false,
		url: '/assurance-habitation/comparatif-assurance-habitation/',
		title: 'Comparatif assurance habitation : critères clés 2026',
		targetKeywords: ['comparatif assurance habitation', 'MRH', 'franchise assurance', 'prix assurance habitation'],
		suggestedAnchors: [
			'comparatif des assurances habitation',
			'comparer les offres d\'assurance habitation',
			'critères de comparaison habitation',
			'meilleure assurance habitation 2026',
		],
	},
];

/**
 * Trouve les opportunités de maillage interne pour un article donné.
 * Exclut l'article courant et retourne les articles pertinents triés par priorité :
 * 1. Articles pilier du même pilier (lien obligatoire pour les spokes)
 * 2. Articles du même pilier
 * 3. Articles d'autres piliers partageant des keywords
 */
export function findLinkingOpportunities(currentSlug: string): ArticleLink[] {
	const current = articleRegistry.find((a) => a.slug === currentSlug);
	if (!current) return articleRegistry;

	const others = articleRegistry.filter((a) => a.slug !== currentSlug);

	// Trier par pertinence : même pilier d'abord, pillar en premier
	return others.sort((a, b) => {
		const aScore = (a.category === current.category ? 10 : 0) + (a.pillar ? 5 : 0);
		const bScore = (b.category === current.category ? 10 : 0) + (b.pillar ? 5 : 0);
		return bScore - aScore;
	});
}

/**
 * Retourne le pilier d'une catégorie donnée.
 */
export function getPillarForCategory(category: string): ArticleLink | undefined {
	return articleRegistry.find((a) => a.category === category && a.pillar);
}

/**
 * Retourne les spokes d'une catégorie donnée.
 */
export function getSpokesForCategory(category: string): ArticleLink[] {
	return articleRegistry.filter((a) => a.category === category && !a.pillar);
}
