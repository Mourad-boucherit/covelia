import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articleSchema = z.object({
	title: z.string().max(65),
	description: z.string().max(160),
	datePublished: z.coerce.date(),
	dateModified: z.coerce.date().optional(),
	author: z.object({
		name: z.string(),
		credentials: z.string().optional(),
		url: z.string().url().optional(),
	}),
	category: z.enum([
		'assurance-auto',
		'assurance-habitation',
		'mutuelle-sante',
		'assurance-emprunteur',
		'reglementation',
	]),
	pillar: z.boolean().default(false),
	faq: z
		.array(
			z.object({
				question: z.string(),
				answer: z.string(),
			}),
		)
		.optional(),
	affiliateDisclosure: z.boolean().default(false),
	estimatedReadingTime: z.number().optional(),
	tags: z.array(z.string()).default([]),
	relatedArticles: z.array(z.string()).default([]),
	image: z
		.object({
			src: z.string(),
			alt: z.string(),
		})
		.optional(),
});

export type ArticleFrontmatter = z.infer<typeof articleSchema>;

const assuranceAuto = defineCollection({
	loader: glob({ base: './src/content/assurance-auto', pattern: '**/*.{md,mdx}' }),
	schema: articleSchema,
});

const assuranceHabitation = defineCollection({
	loader: glob({ base: './src/content/assurance-habitation', pattern: '**/*.{md,mdx}' }),
	schema: articleSchema,
});

const mutuelleSante = defineCollection({
	loader: glob({ base: './src/content/mutuelle-sante', pattern: '**/*.{md,mdx}' }),
	schema: articleSchema,
});

const assuranceEmprunteur = defineCollection({
	loader: glob({ base: './src/content/assurance-emprunteur', pattern: '**/*.{md,mdx}' }),
	schema: articleSchema,
});

const reglementation = defineCollection({
	loader: glob({ base: './src/content/reglementation', pattern: '**/*.{md,mdx}' }),
	schema: articleSchema,
});

export const collections = {
	'assurance-auto': assuranceAuto,
	'assurance-habitation': assuranceHabitation,
	'mutuelle-sante': mutuelleSante,
	'assurance-emprunteur': assuranceEmprunteur,
	reglementation,
};
