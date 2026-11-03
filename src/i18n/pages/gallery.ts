// src/i18n/pages/gallery.ts
// All visible copy for the gallery page, per locale.
// `photos` is ordered to match the photo list hard-coded in the gallery
// page markup (same sources) — keep both languages in the same order.

export const gallery = {
  en: {
    meta: {
      title: 'Gallery | Lavander Photos',
      description:
        'A look at recent sessions with Lavander Photos — newborns, milestones, and family moments.',
    },
    eyebrow: 'Portfolio',
    heading: 'Gallery',
    subtitle: 'Little pieces of time, captured just as they are.',
    cta: {
      heading: 'Want your moment here next?',
      bookBtn: 'Book a session',
    },
    photos: [
      { alt: 'Baby on a couch for a first birthday with a balloon', caption: 'first birthday!' },
      { alt: 'Baby wearing a red headband', caption: 'sweet girl' },
      { alt: 'Toddler dressed in a butterfly costume', caption: 'fly away, little one' },
      { alt: 'Baby lying on a bed next to a vinyl record', caption: 'spin the record' },
      { alt: 'Child holding a baby on a playground', caption: 'big brother duties' },
      { alt: 'Child in a blue dress', caption: 'twirl moment' },
      { alt: 'Girl climbing over a fence', caption: 'fence climber' },
      { alt: 'Children playing on the floor', caption: 'family time' },
      { alt: 'Man and boy jet skiing on a lake', caption: 'lake day' },
      { alt: 'Person standing by a black car', caption: 'arriving in style' },
    ],
  },
  es: {
    meta: {
      title: 'Galería | Lavander Photos',
      description:
        'Un vistazo a sesiones recientes con Lavander Photos — recién nacidos, hitos y momentos en familia.',
    },
    eyebrow: 'Portafolio',
    heading: 'Galería',
    subtitle: 'Pedacitos de tiempo, capturados tal como son.',
    cta: {
      heading: '¿Te toca tu momento aquí?',
      bookBtn: 'Agenda tu sesión',
    },
    photos: [
      { alt: 'Bebé en un sillón celebrando su primer cumpleaños con un globo', caption: '¡primer cumpleaños!' },
      { alt: 'Bebé con una vincha roja', caption: 'niña dulce' },
      { alt: 'Peque con disfraz de mariposa', caption: 'vuela lejos, chiquitín' },
      { alt: 'Bebé recostado en una cama junto a un disco de vinilo', caption: 'pon el disco' },
      { alt: 'Niño cargando a un bebé en el parque', caption: 'deberes de hermano mayor' },
      { alt: 'Niña con vestido azul', caption: 'momento de girar' },
      { alt: 'Niña trepando una cerca', caption: 'trepa cercas' },
      { alt: 'Niños jugando en el piso', caption: 'tiempo en familia' },
      { alt: 'Hombre y niño en moto acuática en un lago', caption: 'día de lago' },
      { alt: 'Persona junto a un auto negro', caption: 'llegando con estilo' },
    ],
  },
} as const;
