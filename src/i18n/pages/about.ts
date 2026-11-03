// src/i18n/pages/about.ts
// All visible copy for the about page, per locale.

export const about = {
  en: {
    meta: {
      title: 'About | Lavander Photos',
      description:
        'Meet Joy, the photographer behind Lavander Photos — freezing little pieces of time for families, milestones, and everyday moments.',
    },
    eyebrow: 'About',
    heading: "Hi, I'm Joy! 🤍",
    intro: 'Welcome to Lavander.photos.',

    freeze: {
      heading: 'Freezing little pieces of time',
      p1Pre:
        'One of the things I love most about photography is being able to freeze a little piece of time. Life gets busy, the world can feel chaotic, and we’re always rushing toward the next thing. But sometimes, all it takes is',
      p1Bold: 'one smile, one genuine laugh, or one special moment',
      p1Post: 'to remind us of what really matters.',
      p2Pre:
        "Knowing that I can capture those moments and give someone a memory they can look back on for years makes me genuinely happy. Whether it's your growing family, a special celebration, a big milestone, or simply a moment you want to remember,",
      p2Bold: "I'd love to help tell your story through my lens.",
      highlightPre:
        "I'm a beginner photographer with a big passion for learning, creating, and capturing life's beautiful, imperfect moments —",
      highlightEm: 'just as they are.',
    },

    values: {
      heading: 'What a session with me looks like',
      items: [
        {
          hand: 'no stiff posing',
          body: "We'll play, snuggle, run around, and chase real moments instead of forced smiles. The best photos are the ones you didn't know were being taken.",
        },
        {
          hand: 'your pace, your people',
          body: 'Sessions are relaxed and unrushed — with snack breaks, outfit changes, and plenty of grace for toddlers who have opinions of their own.',
        },
        {
          hand: 'memories that last',
          body: "You'll get a gallery of images you'll want to print, frame, and look back on for years — the kind worth freezing in time.",
        },
      ],
    },

    cta: {
      heading: 'Ready to freeze a moment of your own?',
      sub: "Family sessions, milestones, and everything in between — I'd love to hear from you.",
      bookBtn: 'Book a session',
    },
  },
  es: {
    meta: {
      title: 'Sobre mí | Lavander Photos',
      description:
        'Conoce a Joy, la fotógrafa detrás de Lavander Photos — congelando pedacitos de tiempo para familias, celebraciones y la vida cotidiana.',
    },
    eyebrow: 'Sobre mí',
    heading: '¡Hola, soy Joy! 🤍',
    intro: 'Te doy la bienvenida a Lavander.photos.',

    freeze: {
      heading: 'Congelando pedacitos de tiempo',
      p1Pre:
        'Una de las cosas que más me gustan de la fotografía es poder congelar un pedacito de tiempo. La vida anda corrida, el mundo puede sentirse caótico y siempre vamos con prisa hacia lo siguiente. Pero a veces, todo lo que hace falta es',
      p1Bold: 'una sonrisa, una carcajada de verdad o un momento especial',
      p1Post: 'para recordarnos lo que de verdad importa.',
      p2Pre:
        'Saber que puedo capturar esos momentos y regalarle a alguien un recuerdo al que podrá volver durante años me hace genuinamente feliz. Ya sea tu familia que está creciendo, una celebración especial, un gran hito o simplemente un momento que quieres recordar,',
      p2Bold: 'me encantaría ayudar a contar tu historia a través de mi lente.',
      highlightPre:
        'Soy una fotógrafa principiante con mucha pasión por aprender, crear y capturar los momentos hermosos e imperfectos de la vida —',
      highlightEm: 'tal como son.',
    },

    values: {
      heading: 'Cómo es una sesión conmigo',
      items: [
        {
          hand: 'nada de poses rígidas',
          body: 'Vamos a jugar, acurrucarnos, correr y perseguir momentos reales en vez de sonrisas forzadas. Las mejores fotos son esas que no sabías que te estaban tomando.',
        },
        {
          hand: 'tu ritmo, tu gente',
          body: 'Las sesiones son relajadas y sin prisas — con pausas para snack, cambios de ropa y mucha paciencia para los peques que tienen opiniones propias.',
        },
        {
          hand: 'recuerdos que perduran',
          body: 'Recibirás una galería de imágenes que querrás imprimir, enmarcar y volver a mirar durante años — de esas que valen la pena congelar en el tiempo.',
        },
      ],
    },

    cta: {
      heading: '¿Quieres congelar un momento de tu historia?',
      sub: 'Sesiones familiares, hitos y todo lo que está en medio — me encantaría saber de ti.',
      bookBtn: 'Agenda tu sesión',
    },
  },
} as const;
