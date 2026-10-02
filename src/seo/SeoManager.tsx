import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resolveSeoPage, seoSite } from './metadata';

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
}

function replaceJsonLd(values: Record<string, unknown>[]) {
  document.head
    .querySelectorAll('script[data-runtime-seo="jsonld"]')
    .forEach((node) => node.remove());

  for (const value of values) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.runtimeSeo = 'jsonld';
    script.textContent = JSON.stringify(value).replace(/</g, '\\u003c');
    document.head.appendChild(script);
  }
}

export function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const page = resolveSeoPage(location.pathname);
    const origin = window.location.origin;
    const absolute = (path: string) => new URL(path, origin).toString();
    const canonical = absolute(page.canonicalPath);
    const image = seoSite.ogImageUrl;

    document.documentElement.lang = seoSite.language;
    document.title = page.title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: page.description
    });

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: page.robots
    });

    upsertMeta('meta[name="author"]', {
      name: 'author',
      content: seoSite.author
    });

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: page.title
    });

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: page.description
    });

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: page.ogType
    });

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonical
    });

    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: seoSite.name
    });

    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: seoSite.locale
    });

    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: image
    });

    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: 'Material de Aulas por Val Lima'
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: page.title
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: page.description
    });

    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: image
    });

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonical
    });

    upsertLink('link[data-runtime-seo="llms"]', {
      rel: 'alternate',
      type: 'text/plain',
      href: absolute('/llms.txt'),
      title: 'Índice para agentes e modelos de linguagem',
      'data-runtime-seo': 'llms'
    });

    replaceJsonLd(page.jsonLd);
  }, [location.pathname]);

  return null;
}
