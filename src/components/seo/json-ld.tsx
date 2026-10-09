import type { Thing, WithContext } from 'schema-dts';

interface JsonLdProps<T extends Thing> {
  data: WithContext<T>;
}

/**
 * Renders JSON-LD structured data as a script tag.
 * Server Component — no client JS shipped.
 *
 * @example
 * <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', name: 'YUTOMAX' }} />
 */
export function JsonLd<T extends Thing>({ data }: JsonLdProps<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
