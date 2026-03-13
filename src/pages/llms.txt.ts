import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE_URL = 'https://covelia.fr';

const collections = [
  { name: 'assurance-auto' as const, label: 'Assurance Auto' },
  { name: 'assurance-habitation' as const, label: 'Assurance Habitation' },
  { name: 'mutuelle-sante' as const, label: 'Mutuelle Santé' },
  { name: 'assurance-emprunteur' as const, label: 'Assurance Emprunteur' },
  { name: 'reglementation' as const, label: 'Réglementation' },
];

export const GET: APIRoute = async () => {
  const lines: string[] = [
    '# Covelia.fr',
    '',
    '> Covelia.fr est un site éditorial indépendant dédié à l\'assurance en France. Nous aidons les particuliers à comprendre, comparer et choisir leurs contrats d\'assurance (auto, habitation, mutuelle santé, assurance emprunteur) grâce à des guides pratiques, des comparatifs et des analyses réglementaires.',
    '',
    '## Articles',
    '',
  ];

  for (const col of collections) {
    const entries = await getCollection(col.name);
    if (entries.length === 0) continue;

    lines.push(`### ${col.label}`);
    lines.push('');

    for (const entry of entries) {
      const url = `${SITE_URL}/${col.name}/${entry.id}/`;
      lines.push(`- [${entry.data.title}](${url}): ${entry.data.description}`);
    }

    lines.push('');
  }

  lines.push(`## Liens utiles`);
  lines.push('');
  lines.push(`- [Accueil](${SITE_URL}/)`);
  lines.push(`- [Assurance Auto](${SITE_URL}/assurance-auto/)`);
  lines.push(`- [Assurance Habitation](${SITE_URL}/assurance-habitation/)`);
  lines.push(`- [Mutuelle Santé](${SITE_URL}/mutuelle-sante/)`);
  lines.push(`- [Assurance Emprunteur](${SITE_URL}/assurance-emprunteur/)`);
  lines.push(`- [Réglementation](${SITE_URL}/reglementation/)`);
  lines.push(`- [llms-full.txt](${SITE_URL}/llms-full.txt)`);

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
