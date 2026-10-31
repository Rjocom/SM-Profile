export type Casket = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export type CasketTier = {
  name: 'Premium' | 'Menengah' | 'Ekonomis';
  description: string;
  items: Casket[];
};

const WA_NUMBER = '6289688770888';

export const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const casketTiers: CasketTier[] = [
  {
    name: 'Premium',
    description: 'Koleksi peti kelas Premium',
    items: [
      {
        name: 'Terra',
        description: '-.',
        price: 'Rp 29.000.000',
        image: '/images/peti/casket-terra.webp',
      },
      {
        name: 'Ivory',
        description: '-.',
        price: 'Rp 21.000.000',
        image: '/images/peti/casket-ivory.webp',
      },
      {
        name: 'Montana',
        description: '-',
        price: 'Rp 14.000.000',
        image: '/images/peti/casket-montana.webp',
      },
      {
        name: 'Vesto',
        description: '-',
        price: 'Rp 14.000.000',
        image: '/images/peti/casket-vesto.webp',
      },
      {
        name: 'Bryon',
        description: '-.',
        price: 'Rp 12.500.000',
        image: '/images/peti/casket-bryon.webp',
      },
      {
        name: 'Therion',
        description: '-.',
        price: 'Rp 12.500.000',
        image: '/images/peti/casket-therion.webp',
      },
    ],
  },
  {
    name: 'Menengah',
    description: 'Pilihan seimbang antara kualitas dan harga.',
    items: [
      {
        name: 'Mavis',
        description: '-.',
        price: 'Rp 12.000.000',
        image: '/images/peti/casket-mavis.webp',
      },
      {
        name: 'Vesper',
        description: '-.',
        price: 'Rp 11.500.000',
        image: '/images/peti/casket-vesper.webp',
      },
      {
        name: 'Gigant',
        description: '-.',
        price: 'Rp 11.000.000',
        image: '/images/peti/casket-gigant.webp',
      },
      {
        name: 'Avalon',
        description: '-.',
        price: 'Rp 10.500.000',
        image: '/images/peti/casket-avalon.webp',
      },
      {
        name: 'Polaris',
        description: '-.',
        price: 'Rp 7.500.000',
        image: '/images/peti/casket-polaris.webp',
      },
      {
        name: 'Vale',
        description: '-.',
        price: 'Rp 6.500.000',
        image: '/images/peti/casket-vale.webp',
      },
    ],
  },
  {
    name: 'Ekonomis',
    description: 'Pilihan terjangkau dengan kualitas tetap layak dan bermartabat.',
    items: [
      {
        name: 'Pluton',
        description: '-.',
        price: 'Rp 5.000.000',
        image: '/images/peti/casket-pluton.webp',
      },
      {
        name: 'Orion',
        description: '-.',
        price: 'Rp 4.500.000',
        image: '/images/peti/casket-orion.webp',
      },
      {
        name: 'Legacy',
        description: '-.',
        price: 'Rp 4.000.000',
        image: '/images/peti/casket-legacy.webp',
      },
    ],
  },
];