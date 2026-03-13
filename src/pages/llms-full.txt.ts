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
    '# Covelia.fr — Contenu complet',
    '',
    '> Covelia.fr est un site éditorial indépendant dédié à l\'assurance en France. Ce fichier contient le contenu intégral de tous nos articles.',
    '',
  ];

  for (const col of collections) {
    const entries = await getCollection(col.name);
    if (entries.length === 0) continue;

    lines.push(`---`);
    lines.push(`## ${col.label}`);
    lines.push('');

    for (const entry of entries) {
      const url = `${SITE_URL}/${col.name}/${entry.id}/`;
      lines.push(`### ${entry.data.title}`);
      lines.push('');
      lines.push(`URL: ${url}`);
      lines.push(`Description: ${entry.data.description}`);
      if (entry.data.datePublished) {
        lines.push(`Date de publication: ${new Date(entry.data.datePublished).toISOString().split('T')[0]}`);
      }
      if (entry.data.author) {
        lines.push(`Auteur: ${entry.data.author.name}`);
      }
      lines.push('');
      lines.push(entry.body || '');
      lines.push('');
      lines.push('---');
      lines.push('');
    }
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
