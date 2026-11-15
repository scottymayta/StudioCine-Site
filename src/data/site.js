// Edit this file to change contact info, packages, and prices across the whole site.

export const site = {
  name: 'StudioCine',
  tagline: 'Cinematic content, made in Santa Barbara',
  email: 'info@studiocinecreative.com',
  location: 'Santa Barbara, California',
  serviceArea: ['Santa Barbara', 'Goleta', 'Montecito', 'Carpinteria', 'Ventura', 'Santa Ynez Valley'],
  social: {
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
    vimeo: 'https://vimeo.com/',
  },
  // Paste a YouTube or Vimeo embed URL here to show your reel on the home and Work pages.
  reelEmbed: '',
};

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/studio/', label: 'Studio' },
  { href: '/work/', label: 'Work' },
  { href: '/community/', label: 'Community' },
  { href: '/about/', label: 'About' },
];

export const clients = ['Mercedes-Benz', 'Arch Motorcycle', 'Tigo', 'Water Wells for Africa'];

export const packages = [
  {
    id: 'partner',
    name: 'Content Partner',
    kind: 'Monthly retainer',
    price: '$750',
    unit: '/ month',
    featured: true,
    summary: 'A steady stream of polished video for your brand, shot every month in the studio.',
    includes: [
      'One 2-hour studio shoot each month',
      'One main video (60–90 sec)',
      'Four vertical clips for Reels, TikTok, and Shorts',
      'Editing, color, and sound',
      'Social-ready delivery',
    ],
    note: '3-month minimum',
  },
  {
    id: 'podcast',
    name: 'Podcast Session',
    kind: 'Studio recording',
    price: '$450',
    unit: '/ episode',
    summary: 'Walk in with your guest, walk out with a finished video podcast.',
    includes: [
      'Studio, two cameras, and lighting',
      'Broadcast-quality audio',
      '60–90 minute recording',
      'Edited full episode',
      'Three to five social clips',
    ],
    note: '4 episodes a month: $1,500',
  },
  {
    id: 'promo',
    name: 'Brand Film',
    kind: 'Promotional video',
    price: '$2,000',
    unit: 'starting',
    summary: 'The story of your business, told with cinematic craft.',
    includes: [
      'Creative concept and script',
      '2–3 hour shoot, interview and B-roll',
      '60–90 second hero video',
      'Five vertical cut-downs',
    ],
  },
  {
    id: 'photo',
    name: 'Headshots & Branding',
    kind: 'Photography',
    price: '$250',
    unit: 'per person',
    summary: 'Studio-lit portraits and brand imagery that look like you, only sharper.',
    includes: ['1–2 hour studio session', 'Professional lighting and direction', '10–20 retouched images'],
    note: 'Team rates from $900',
  },
  {
    id: 'event',
    name: 'Event Coverage',
    kind: 'Film + photo',
    price: '$1,800',
    unit: 'half day',
    summary: 'Galas, launches, and performances, captured and cut fast.',
    includes: ['Filming and photography', 'Highlight video', 'Social clips within 72 hours'],
  },
  {
    id: 'live',
    name: 'Livestream',
    kind: 'Live production',
    price: '$1,500',
    unit: 'starting',
    summary: 'Multi-camera live broadcasts for concerts, panels, and ceremonies.',
    includes: ['Multi-camera switching', 'Graphics and lower thirds', 'Stream to YouTube, Facebook, or private link'],
  },
];

export const addons = [
  'Extra vertical clips',
  'Motion graphics',
  'Advanced color grade',
  'Rush delivery',
  'Additional shoot hours',
  'Drone',
  'Teleprompter',
  'Line production & crew',
];

export const process = [
  { step: '01', title: 'Discover', text: 'A short call to understand your goals, audience, and budget.' },
  { step: '02', title: 'Plan', text: 'We write the concept, shot list, and schedule, and book the studio.' },
  { step: '03', title: 'Shoot', text: 'A professional crew, lighting, and sound, in studio or on location.' },
  { step: '04', title: 'Deliver', text: 'Edited, color-graded, and formatted for every platform you use.' },
];
