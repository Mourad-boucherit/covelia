export interface AffiliatePartner {
	name: string;
	slug: string;
	url: string;
	categories: string[];
	description: string;
}

export const affiliatePartners: AffiliatePartner[] = [
	{
		name: 'LeLynx',
		slug: 'lelynx',
		url: 'https://www.lelynx.fr', // Remplacer par URL affiliée
		categories: ['assurance-auto', 'assurance-habitation', 'mutuelle-sante'],
		description: 'Comparateur d\'assurances en ligne',
	},
	{
		name: 'Assurland',
		slug: 'assurland',
		url: 'https://www.assurland.com', // Remplacer par URL affiliée
		categories: ['assurance-auto', 'assurance-habitation', 'mutuelle-sante', 'assurance-emprunteur'],
		description: 'Comparateur d\'assurances multi-produits',
	},
	{
		name: 'LesFurets',
		slug: 'lesfurets',
		url: 'https://www.lesfurets.com', // Remplacer par URL affiliée
		categories: ['assurance-auto', 'assurance-habitation', 'mutuelle-sante'],
		description: 'Comparateur d\'assurances et mutuelles',
	},
];

export function getPartnersForCategory(category: string): AffiliatePartner[] {
	return affiliatePartners.filter((p) => p.categories.includes(category));
}
