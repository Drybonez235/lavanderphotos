// src/i18n/ui.ts
//
// Central place for everything locale-related:
// - the list of supported locales
// - shared UI strings (nav, footer, 404, blog chrome)
// - helpers for building localized URLs and getStaticPaths

export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.menuToggle': 'Toggle menu',
    'nav.language': 'Language selector',

    'seo.defaultDescription':
      'Lavander Photos by Joy — a family focused photographer in Belmont Cragin, Chicago, capturing newborns, milestones, and everyday moments just as they are.',

    'footer.tagline': 'Family photography in Belmont Cragin, Chicago.',
    'footer.logoAlt':
      'Lavander Photos logo — a lavender sprig beside a minimalist line-art camera above the words Lavander Photography',

    'blog.featured': 'Featured Article',
    'blog.readArticle': 'Read Article',
    'blog.readMore': 'Read More',
    'blog.by': 'By',
    'blog.backToAll': 'Back to all Posts',
    'blog.coverAlt': 'Cover image for',
    'blog.indexTitle': 'Blog | Lavander Photos',
    'blog.indexDescription': 'Updates, stories, and behind-the-scenes notes from Lavander Photos.',
    'blog.indexHeading': 'Blog',
    'blog.indexSub': 'Stories from behind the camera.',

    'notfound.eyebrow': '404',
    'notfound.heading': 'Out of Frame',
    'notfound.body':
      "The page you're looking for slipped out of the shot. Let's get you back to safety.",
    'notfound.back': 'Back to home',
    'notfound.esPrompt': '¿Buscabas esta página en español?',
    'notfound.esLink': 'Visítanos en español',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.gallery': 'Galería',
    'nav.contact': 'Contacto',
    'nav.menuToggle': 'Abrir menú',
    'nav.language': 'Selector de idioma',

    'seo.defaultDescription':
      'Lavander Photos, de Joy — una fotógrafa enfocada en las familias en Belmont Cragin, Chicago, que captura recién nacidos, celebraciones y la vida cotidiana tal como son.',

    'footer.tagline': 'Fotografía familiar en Belmont Cragin, Chicago.',
    'footer.logoAlt':
      'Logotipo de Lavander Photos — una ramita de lavanda junto a una cámara minimalista dibujada a línea sobre las palabras Lavander Photography',

    'blog.featured': 'Artículo destacado',
    'blog.readArticle': 'Leer artículo',
    'blog.readMore': 'Leer más',
    'blog.by': 'Por',
    'blog.backToAll': 'Volver a todos los artículos',
    'blog.coverAlt': 'Imagen de portada de',
    'blog.indexTitle': 'Blog | Lavander Photos',
    'blog.indexDescription': 'Novedades, historias y notas desde atrás de la cámara de Lavander Photos.',
    'blog.indexHeading': 'Blog',
    'blog.indexSub': 'Historias desde atrás de la cámara.',

    'notfound.eyebrow': '404',
    'notfound.heading': 'Fuera de cuadro',
    'notfound.body':
      'La página que buscas se salió del encuadre. Te llevamos de vuelta a un lugar seguro.',
    'notfound.back': 'Volver al inicio',
    'notfound.esPrompt': '¿Buscabas esta página en español?',
    'notfound.esLink': 'Visítanos en español',
  },
} as const;

export type UiKey = keyof typeof ui.en;

/** Type-safe dictionary lookups: const t = getT(locale); t('nav.home') */
export function getT(locale: Locale) {
  const dict: Record<UiKey, string> = ui[locale];
  return (key: UiKey) => dict[key];
}

/**
 * Prefix a site path for a non-default locale.
 * English keeps root URLs; Spanish lives under /es/.
 *   localizedPath('en', '/about/') -> '/about/'
 *   localizedPath('es', '/about/') -> '/es/about/'
 */
export function localizedPath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === '/' ? '/es/' : `/es${path}`;
}

/** hreflang alternate links for a page, given its English URL. */
export function alternatesFor(
  enPath: string,
  esPath: string = localizedPath('es', enPath),
): Partial<Record<Locale, string>> {
  return { en: enPath, es: esPath };
}

/**
 * Shared getStaticPaths for pages under src/pages/[locale]/.
 * The default locale renders at the root (locale param omitted),
 * every other locale gets its prefix.
 */
export function localeStaticPaths<Props = Record<string, never>>(
  getProps: (locale: Locale) => Props = () => ({}) as Props,
) {
  return locales.map((locale) => ({
    params: { locale: locale === defaultLocale ? undefined : locale },
    props: { locale, ...getProps(locale) },
  }));
}

/** Blog entries live at src/content/blog/<locale>/<slug>.md -> id "en/first-post". */
export function splitBlogId(id: string): { locale: Locale; slug: string } {
  const [locale, slug] = id.split('/');
  return { locale: locale as Locale, slug };
}
