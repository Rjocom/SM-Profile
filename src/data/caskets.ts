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
        image: '/images/peti/casket-terra.jpg',
      },
      {
        name: 'Ivory',
        description: '-.',
        price: 'Rp 21.000.000',
        image: '/images/peti/casket-ivory.jpg',
      },
      {
        name: 'Montana',
        description: '-',
        price: 'Rp 14.000.000',
        image: '/images/peti/casket-montana.jpg',
      },
      {
        name: 'Vesto',
        description: '-',
        price: 'Rp 14.000.000',
        image: '/images/peti/casket-vesto.jpg',
      },
      {
        name: 'Bryon',
        description: '-.',
        price: 'Rp 12.500.000',
        image: '/images/peti/casket-bryon.jpg',
      },
      {
        name: 'Therion',
        description: '-.',
        price: 'Rp 12.500.000',
        image: '/images/peti/casket-therion.jpg',
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
        image: '/images/peti/casket-mavis.jpg',
      },
      {
        name: 'Vesper',
        description: '-.',
        price: 'Rp 11.500.000',
        image: '/images/peti/casket-vesper.jpg',
      },
      {
        name: 'Gigant',
        description: '-.',
        price: 'Rp 11.000.000',
        image: '/images/peti/casket-gigant.jpg',
      },
      {
        name: 'Avalon',
        description: '-.',
        price: 'Rp 10.500.000',
        image: '/images/peti/casket-avalon.jpg',
      },
      {
        name: 'Polaris',
        description: '-.',
        price: 'Rp 7.500.000',
        image: '/images/peti/casket-polaris.jpg',
      },
      {
        name: 'Vale',
        description: '-.',
        price: 'Rp 6.500.000',
        image: '/images/peti/casket-vale.jpg',
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
        image: '/images/peti/casket-pluton.jpg',
      },
      {
        name: 'Orion',
        description: '-.',
        price: 'Rp 4.500.000',
        image: '/images/peti/casket-orion.jpg',
      },
      {
        name: 'Legacy',
        description: '-.',
        price: 'Rp 4.000.000',
        image: '/images/peti/casket-legacy.jpg',
      },
    ],
  },
];