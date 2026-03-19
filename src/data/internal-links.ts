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
	{
		slug: 'bonus-malus-assurance-auto',
		category: 'assurance-auto',
		pillar: false,
		url: '/assurance-auto/bonus-malus-assurance-auto/',
		title: 'Bonus-malus assurance auto : calcul et barème 2026',
		targetKeywords: ['bonus-malus', 'CRM', 'coefficient réduction-majoration', 'sinistre responsable'],
		suggestedAnchors: [
			'fonctionnement du bonus-malus',
			'calcul du coefficient bonus-malus',
			'système de bonus-malus auto',
			'barème CRM assurance auto',
		],
	},
	{
		slug: 'franchise-assurance-auto',
		category: 'assurance-auto',
		pillar: false,
		url: '/assurance-auto/franchise-assurance-auto/',
		title: 'Franchise assurance auto : types, montants et calcul',
		targetKeywords: ['franchise assurance auto', 'franchise absolue', 'franchise relative', 'rachat de franchise'],
		suggestedAnchors: [
			'comprendre la franchise auto',
			'types de franchise en assurance auto',
			'montant de la franchise auto',
			'rachat de franchise auto',
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
	{
		slug: 'degat-des-eaux-assurance',
		category: 'assurance-habitation',
		pillar: false,
		url: '/assurance-habitation/degat-des-eaux-assurance/',
		title: 'Dégât des eaux assurance : démarches et indemnisation',
		targetKeywords: ['dégât des eaux', 'sinistre habitation', 'convention IRSI', 'constat amiable', 'indemnisation dégât des eaux'],
		suggestedAnchors: [
			'dégât des eaux et assurance',
			'déclarer un dégât des eaux',
			'indemnisation dégât des eaux',
			'convention IRSI dégât des eaux',
		],
	},
	// ── Mutuelle Santé ──
	{
		slug: 'guide-complet-mutuelle-sante',
		category: 'mutuelle-sante',
		pillar: true,
		url: '/mutuelle-sante/guide-complet-mutuelle-sante/',
		title: 'Mutuelle santé : guide complet pour bien choisir',
		targetKeywords: ['mutuelle santé', 'complémentaire santé', '100% Santé', 'contrat responsable', 'prix mutuelle'],
		suggestedAnchors: [
			'guide complet de la mutuelle santé',
			'tout savoir sur la complémentaire santé',
			'choisir sa mutuelle santé',
			'notre guide mutuelle santé',
		],
	},
	{
		slug: 'changer-de-mutuelle',
		category: 'mutuelle-sante',
		pillar: false,
		url: '/mutuelle-sante/changer-de-mutuelle/',
		title: 'Changer de mutuelle santé en 2026 : guide complet',
		targetKeywords: ['changer de mutuelle', 'changement complémentaire santé', 'résiliation infra-annuelle mutuelle'],
		suggestedAnchors: [
			'changer de mutuelle santé',
			'comment changer de complémentaire',
			'étapes pour changer de mutuelle',
			'changement de mutuelle en 2026',
		],
	},
	{
		slug: 'mutuelle-dentaire-remboursements',
		category: 'mutuelle-sante',
		pillar: false,
		url: '/mutuelle-sante/mutuelle-dentaire-remboursements/',
		title: 'Mutuelle dentaire : remboursements, tarifs et garanties',
		targetKeywords: ['mutuelle dentaire', 'remboursement dentaire', 'prothèse dentaire', '100% Santé dentaire'],
		suggestedAnchors: [
			'remboursement dentaire par la mutuelle',
			'mutuelle dentaire et prothèses',
			'prise en charge soins dentaires',
			'100% Santé en dentaire',
		],
	},
	{
		slug: 'resilier-mutuelle-sante',
		category: 'mutuelle-sante',
		pillar: false,
		url: '/mutuelle-sante/resilier-mutuelle-sante/',
		title: 'Résiliation mutuelle santé : guide complet 2026',
		targetKeywords: ['résiliation mutuelle', 'résilier mutuelle santé', 'loi infra-annuelle', 'changement mutuelle'],
		suggestedAnchors: [
			'résilier sa mutuelle santé',
			'résiliation d\'une mutuelle santé',
			'procédure de résiliation mutuelle',
			'résiliation infra-annuelle mutuelle',
		],
	},
	{
		slug: 'mutuelle-senior-guide',
		category: 'mutuelle-sante',
		pillar: false,
		url: '/mutuelle-sante/mutuelle-senior-guide/',
		title: 'Mutuelle senior : guide complet pour bien choisir',
		targetKeywords: ['mutuelle senior', 'complémentaire santé senior', 'prix mutuelle retraité', 'loi Évin'],
		suggestedAnchors: [
			'guide de la mutuelle senior',
			'mutuelle pour les seniors',
			'choisir sa mutuelle après 60 ans',
			'complémentaire santé pour retraités',
		],
	},
	{
		slug: 'remboursement-optique-mutuelle',
		category: 'mutuelle-sante',
		pillar: false,
		url: '/mutuelle-sante/remboursement-optique-mutuelle/',
		title: 'Remboursement optique mutuelle : tarifs et règles',
		targetKeywords: ['remboursement optique', 'mutuelle optique', '100% santé optique', 'lunettes remboursement'],
		suggestedAnchors: [
			'remboursement optique par la mutuelle',
			'prise en charge des lunettes',
			'100% Santé en optique',
			'reste à charge optique',
		],
	},
	{
		slug: '100-sante-optique-dentaire',
		category: 'mutuelle-sante',
		pillar: false,
		url: '/mutuelle-sante/100-sante-optique-dentaire/',
		title: '100 % Santé optique dentaire : le guide complet 2026',
		targetKeywords: ['100% Santé', 'RAC 0', 'panier 100% Santé', 'optique dentaire audiologie'],
		suggestedAnchors: [
			'réforme 100% Santé',
			'reste à charge zéro',
			'panier 100% Santé optique et dentaire',
			'équipements sans reste à charge',
		],
	},
	// ── Assurance Emprunteur ──
	{
		slug: 'guide-complet-assurance-emprunteur',
		category: 'assurance-emprunteur',
		pillar: true,
		url: '/assurance-emprunteur/guide-complet-assurance-emprunteur/',
		title: 'Assurance emprunteur : guide complet pour 2026',
		targetKeywords: ['assurance emprunteur', 'loi Lemoine', 'délégation assurance', 'TAEA', 'prêt immobilier'],
		suggestedAnchors: [
			'guide complet de l\'assurance emprunteur',
			'tout savoir sur l\'assurance de prêt',
			'assurance emprunteur en détail',
			'notre guide assurance emprunteur',
		],
	},
	{
		slug: 'delegation-assurance-emprunteur',
		category: 'assurance-emprunteur',
		pillar: false,
		url: '/assurance-emprunteur/delegation-assurance-emprunteur/',
		title: 'Délégation assurance emprunteur : droits et économies',
		targetKeywords: ['délégation assurance emprunteur', 'loi Lagarde', 'équivalence garanties', 'assurance externe'],
		suggestedAnchors: [
			'délégation d\'assurance emprunteur',
			'choisir une assurance emprunteur externe',
			'économies par la délégation d\'assurance',
			'droit à la délégation emprunteur',
		],
	},
	{
		slug: 'loi-lemoine-assurance-emprunteur',
		category: 'assurance-emprunteur',
		pillar: false,
		url: '/assurance-emprunteur/loi-lemoine-assurance-emprunteur/',
		title: 'Loi Lemoine : changer d\'assurance emprunteur en 2026',
		targetKeywords: ['loi Lemoine', 'résiliation assurance emprunteur', 'questionnaire santé', 'droit à l\'oubli'],
		suggestedAnchors: [
			'loi Lemoine assurance emprunteur',
			'changer d\'assurance de prêt avec la loi Lemoine',
			'résiliation emprunteur loi Lemoine',
			'suppression questionnaire santé',
		],
	},
	{
		slug: 'taux-assurance-emprunteur',
		category: 'assurance-emprunteur',
		pillar: false,
		url: '/assurance-emprunteur/taux-assurance-emprunteur/',
		title: 'Taux assurance emprunteur 2026 : barèmes et calcul',
		targetKeywords: ['taux assurance emprunteur', 'TAEA', 'coût assurance prêt', 'barème emprunteur'],
		suggestedAnchors: [
			'taux d\'assurance emprunteur en 2026',
			'barème de l\'assurance de prêt',
			'calcul du TAEA',
			'coût de l\'assurance emprunteur',
		],
	},
	{
		slug: 'questionnaire-sante-assurance-emprunteur',
		category: 'assurance-emprunteur',
		pillar: false,
		url: '/assurance-emprunteur/questionnaire-sante-assurance-emprunteur/',
		title: 'Questionnaire santé assurance emprunteur : guide 2026',
		targetKeywords: ['questionnaire santé', 'assurance emprunteur santé', 'convention AERAS', 'droit à l\'oubli'],
		suggestedAnchors: [
			'questionnaire santé assurance emprunteur',
			'remplir le questionnaire médical',
			'convention AERAS et emprunt',
			'suppression questionnaire santé loi Lemoine',
		],
	},
	// ── Réglementation ──
	{
		slug: 'guide-reglementation-assurance-france',
		category: 'reglementation',
		pillar: true,
		url: '/reglementation/guide-reglementation-assurance-france/',
		title: 'Réglementation assurance en France : guide complet',
		targetKeywords: ['réglementation assurance', 'loi Hamon', 'loi Chatel', 'droits assuré', 'ACPR'],
		suggestedAnchors: [
			'guide de la réglementation assurance',
			'tout savoir sur vos droits en assurance',
			'réglementation assurance en France',
			'les lois qui protègent les assurés',
		],
	},
	{
		slug: 'loi-hamon-resiliation-assurance',
		category: 'reglementation',
		pillar: false,
		url: '/reglementation/loi-hamon-resiliation-assurance/',
		title: 'Loi Hamon assurance : résilier son contrat à tout moment',
		targetKeywords: ['loi Hamon', 'résiliation assurance', 'article L113-15-2', 'loi 2014-344'],
		suggestedAnchors: [
			'loi Hamon assurance',
			'résiliation via la loi Hamon',
			'résilier grâce à la loi Hamon',
			'dispositif Hamon de résiliation',
		],
	},
	{
		slug: 'resiliation-infra-annuelle',
		category: 'reglementation',
		pillar: false,
		url: '/reglementation/resiliation-infra-annuelle/',
		title: 'Résiliation infra-annuelle : changer d\'assurance en 2026',
		targetKeywords: ['résiliation infra-annuelle', 'RIA', 'loi Hamon', 'loi 2019-733', 'résilier assurance'],
		suggestedAnchors: [
			'résiliation infra-annuelle',
			'résilier à tout moment après un an',
			'droit de résiliation infra-annuelle',
			'RIA en assurance',
		],
	},
	{
		slug: 'loi-chatel-assurance',
		category: 'reglementation',
		pillar: false,
		url: '/reglementation/loi-chatel-assurance/',
		title: 'Loi Chatel assurance : droits, délais et résiliation',
		targetKeywords: ['loi Chatel', 'avis d\'échéance', 'résiliation échéance', 'article L113-15-1'],
		suggestedAnchors: [
			'loi Chatel en assurance',
			'obligation d\'information loi Chatel',
			'résiliation via la loi Chatel',
			'avis d\'échéance loi Chatel',
		],
	},
	{
		slug: 'devoir-conseil-assurance',
		category: 'reglementation',
		pillar: false,
		url: '/reglementation/devoir-conseil-assurance/',
		title: 'Devoir de conseil en assurance : vos droits en 2026',
		targetKeywords: ['devoir de conseil', 'obligation conseil assurance', 'DDA', 'ACPR', 'article L521-4'],
		suggestedAnchors: [
			'devoir de conseil en assurance',
			'obligations de conseil de l\'assureur',
			'cadre réglementaire du conseil en assurance',
			'droits de l\'assuré en matière de conseil',
		],
	},
	// ── Nouveaux articles (Mars 2026) ──
	{
		slug: 'assurance-auto-tous-risques-vs-tiers',
		category: 'assurance-auto',
		pillar: false,
		url: '/assurance-auto/assurance-auto-tous-risques-vs-tiers/',
		title: 'Tous risques ou tiers : quelle assurance auto choisir ?',
		targetKeywords: ['tous risques vs tiers', 'formule assurance auto', 'tiers étendu', 'comparatif formules'],
		suggestedAnchors: [
			'choisir entre tous risques et tiers',
			'comparatif tous risques vs tiers',
			'quelle formule d\'assurance auto',
			'différence tous risques et tiers',
		],
	},
	{
		slug: 'assurance-auto-au-kilometre',
		category: 'assurance-auto',
		pillar: false,
		url: '/assurance-auto/assurance-auto-au-kilometre/',
		title: 'Assurance auto au kilomètre : fonctionnement et prix',
		targetKeywords: ['assurance auto au km', 'pay as you drive', 'forfait kilométrique', 'petit rouleur'],
		suggestedAnchors: [
			'assurance auto au kilomètre',
			'pay as you drive',
			'assurance pour petits rouleurs',
			'formule au km',
		],
	},
	{
		slug: 'declaration-sinistre-assurance-auto',
		category: 'assurance-auto',
		pillar: false,
		url: '/assurance-auto/declaration-sinistre-assurance-auto/',
		title: 'Déclaration de sinistre auto : procédure complète',
		targetKeywords: ['déclaration sinistre auto', 'constat amiable', 'indemnisation sinistre', 'e-constat'],
		suggestedAnchors: [
			'déclarer un sinistre auto',
			'procédure de déclaration de sinistre',
			'remplir un constat amiable',
			'indemnisation après sinistre',
		],
	},
	{
		slug: 'assurance-habitation-meuble',
		category: 'assurance-habitation',
		pillar: false,
		url: '/assurance-habitation/assurance-habitation-meuble/',
		title: 'Assurance habitation meublé : obligations et garanties',
		targetKeywords: ['assurance habitation meublé', 'location meublée', 'assurance meublé', 'mobilier location'],
		suggestedAnchors: [
			'assurance habitation meublé',
			'assurer un logement meublé',
			'assurance location meublée',
			'couverture mobilier de location',
		],
	},
	{
		slug: 'assurance-habitation-etudiant',
		category: 'assurance-habitation',
		pillar: false,
		url: '/assurance-habitation/assurance-habitation-etudiant/',
		title: 'Assurance habitation étudiant : guide complet 2026',
		targetKeywords: ['assurance habitation étudiant', 'logement étudiant', 'CROUS assurance', 'colocation assurance'],
		suggestedAnchors: [
			'assurance habitation étudiant',
			'assurer son logement étudiant',
			'assurance pour étudiants',
			'assurance CROUS',
		],
	},
	{
		slug: 'assurance-pno-proprietaire-non-occupant',
		category: 'assurance-habitation',
		pillar: false,
		url: '/assurance-habitation/assurance-pno-proprietaire-non-occupant/',
		title: 'Assurance PNO : guide du propriétaire non occupant',
		targetKeywords: ['assurance PNO', 'propriétaire non occupant', 'bailleur assurance', 'investissement locatif'],
		suggestedAnchors: [
			'assurance PNO',
			'assurance propriétaire non occupant',
			'assurance bailleur',
			'assurance pour investissement locatif',
		],
	},
	{
		slug: 'mutuelle-entreprise-obligatoire',
		category: 'mutuelle-sante',
		pillar: false,
		url: '/mutuelle-sante/mutuelle-entreprise-obligatoire/',
		title: 'Mutuelle entreprise obligatoire : droits et obligations',
		targetKeywords: ['mutuelle entreprise obligatoire', 'ANI', 'complémentaire santé collective', 'panier de soins'],
		suggestedAnchors: [
			'mutuelle d\'entreprise obligatoire',
			'obligation de mutuelle pour les salariés',
			'complémentaire santé collective',
			'loi ANI mutuelle',
		],
	},
	{
		slug: 'portabilite-mutuelle-entreprise',
		category: 'mutuelle-sante',
		pillar: false,
		url: '/mutuelle-sante/portabilite-mutuelle-entreprise/',
		title: 'Portabilité mutuelle entreprise : droits et durée',
		targetKeywords: ['portabilité mutuelle', 'maintien mutuelle après départ', 'article L911-8', 'mutuelle chômage'],
		suggestedAnchors: [
			'portabilité de la mutuelle',
			'garder sa mutuelle après un licenciement',
			'maintien des droits mutuelle',
			'portabilité complémentaire santé',
		],
	},
	{
		slug: 'garanties-assurance-emprunteur-ipt-itt',
		category: 'assurance-emprunteur',
		pillar: false,
		url: '/assurance-emprunteur/garanties-assurance-emprunteur-ipt-itt/',
		title: 'Garanties assurance emprunteur : IPT, ITT, DC, PTIA',
		targetKeywords: ['garanties emprunteur', 'IPT', 'ITT', 'PTIA', 'décès emprunteur', 'incapacité emprunteur'],
		suggestedAnchors: [
			'garanties de l\'assurance emprunteur',
			'IPT et ITT emprunteur',
			'couverture décès et invalidité',
			'comprendre les garanties emprunteur',
		],
	},
	{
		slug: 'mediateur-assurance-recours',
		category: 'reglementation',
		pillar: false,
		url: '/reglementation/mediateur-assurance-recours/',
		title: 'Médiateur assurance : comment saisir et obtenir gain',
		targetKeywords: ['médiateur assurance', 'recours assurance', 'litige assurance', 'médiation assurance'],
		suggestedAnchors: [
			'saisir le médiateur de l\'assurance',
			'recours en cas de litige',
			'médiation assurance',
			'résoudre un litige avec son assureur',
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
