// src/i18n/pages/contact.ts
// All visible copy for the contact page, per locale.

// Values submitted to the Google Form for the session type question.
// Must match the option values in the Google Form exactly, regardless of locale.
export const sessionTypeValues = ['Newborn', 'Milestone', 'Family', 'Something else'] as const;

export const contact = {
  en: {
    meta: {
      title: 'Contact | Lavander Photos',
      description:
        'Book a session with Lavander Photos — newborns, milestones, families, and everyday moments.',
    },
    eyebrow: 'Get in touch',
    heading: 'Contact',
    intro:
      'Tell me about the moment you want to remember — I usually reply within two days.',
    sessionTypes: ['Newborn', 'Milestone', 'Family', 'Something else'],
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      // placeholder intentionally stays you@example.com in every language
      sessionType: 'Session type',
      message: 'Message',
      messagePlaceholder: 'Tell me about your session...',
      securityCheck: 'Security check',
      securityCheckPlaceholder: 'Your answer',
      submit: 'Send inquiry',
    },
  },
  es: {
    meta: {
      title: 'Contacto | Lavander Photos',
      description:
        'Agenda una sesión con Lavander Photos — recién nacidos, hitos, familias y la vida cotidiana.',
    },
    eyebrow: 'Escríbeme',
    heading: 'Contacto',
    intro:
      'Cuéntame el momento que quieres recordar — suelo responder en un par de días.',
    sessionTypes: ['Recién nacido', 'Hito', 'Familia', 'Otra cosa'],
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo electrónico',
      sessionType: 'Tipo de sesión',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame de tu sesión...',
      securityCheck: 'Verificación de seguridad',
      securityCheckPlaceholder: 'Tu respuesta',
      submit: 'Enviar mensaje',
    },
  },
} as const;
