export const SITE_TITLE = 'Covelia.fr';
export const SITE_DESCRIPTION = 'Guides et comparatifs assurance en France — auto, habitation, mutuelle santé, emprunteur. Informations claires, indépendantes et à jour.';
export const SITE_URL = 'https://covelia.fr';

export const CATEGORIES = [
	{ slug: 'assurance-auto', label: 'Assurance Auto', icon: 'car' },
	{ slug: 'assurance-habitation', label: 'Assurance Habitation', icon: 'home' },
	{ slug: 'mutuelle-sante', label: 'Mutuelle Santé', icon: 'heart-pulse' },
	{ slug: 'assurance-emprunteur', label: 'Assurance Emprunteur', icon: 'landmark' },
	{ slug: 'reglementation', label: 'Réglementation', icon: 'scale' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
