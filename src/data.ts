export const site = {
  name: 'ASD Harmonie Pilates & Wellness',
  shortName: 'Harmonie',
  professional: {
    name: 'Chiara Manno',
    role: 'Istruttrice di Pilates e Spa/Beauty Manager',
  },
  description:
    'Studio di Pilates e benessere ad Agira: movimento consapevole, equilibrio e uno spazio accogliente dedicato ai soci dell’associazione.',
  url: 'https://harmoniewellness.it',
  locale: 'it_IT',
  claim: 'Peaceful mind, grateful heart',
  address: {
    street: 'Via Vittorio Emanuele 379',
    locality: 'Agira',
    province: 'Enna',
    region: 'Sicilia',
    postalCode: '94011',
    country: 'IT',
    note: 'A pochi passi da Piazza Garibaldi',
  },
  contact: {
    phoneDisplay: '+39 345 127 8532',
    phoneHref: 'tel:+393451278532',
    email: 'studioasdharmonie@gmail.com',
    whatsapp:
      'https://wa.me/393451278532?text=Buongiorno%2C%20vorrei%20informazioni%20sulle%20lezioni%20di%20Pilates%20presso%20ASD%20Harmonie%20Pilates%20%26%20Wellness.',
    maps:
      'https://www.google.com/maps/search/?api=1&query=Via%20Vittorio%20Emanuele%20379%2C%2094011%20Agira%20EN',
  },
  schedule: [
    { day: 'Lunedì', slots: ['09:30–12:30', '16:00–20:30'] },
    { day: 'Mercoledì', slots: ['09:30–12:30', '16:00–20:30'] },
  ],
  lesson: {
    duration: '55 minuti',
    booking: 'La prenotazione anticipata è necessaria per partecipare.',
    membership: 'Le attività sono riservate esclusivamente ai soci dell’associazione.',
    clothing: 'Indossa abiti comodi e porta calzini da usare soltanto in sala.',
  },
  navigation: [
    { label: 'Harmonie', href: '#harmonie' },
    { label: 'Il metodo', href: '#metodo' },
    { label: 'Le lezioni', href: '#lezioni' },
    { label: 'Orari', href: '#orari' },
    { label: 'Contatti', href: '#contatti' },
  ],
} as const;

export type SiteData = typeof site;
