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
        name: 'Ivory',
        description: 'Putih berornamen emas dengan panel lukisan di sisi dan bagian dalam tutup.',
        price: 'Rp 25.000.000',
        image: '/images/casket-ivory.jpg',
      },
      {
        name: 'Vesto',
        description: 'Putih dengan relief emas di sisi peti dan salib di tutupnya.',
        price: 'Rp 22.000.000',
        image: '/images/casket-vesto.jpg',
      },
      {
        name: 'Bryon',
        description: 'Kayu merah tua mengilap dengan panel lukisan dan list emas.',
        price: 'Rp 20.000.000',
        image: '/images/casket-bryon.jpg',
      },
    ],
  },
  {
    name: 'Menengah',
    description: 'Pilihan seimbang antara kualitas dan harga.',
    items: [
      {
        name: 'Orion',
        description: 'Putih bersih dengan panel lukisan dan salib emas di sisi.',
        price: 'Rp 12.000.000',
        image: '/images/casket-orion.jpg',
      },
      {
        name: 'Polaris',
        description: 'Putih dengan gagang dan ornamen emas, salib di tutup dan sisi.',
        price: 'Rp 9.500.000',
        image: '/images/casket-polaris.jpg',
      },
      {
        name: 'Avalon',
        description: 'Kayu cokelat hangat dengan gagang kuningan dan panel ukir.',
        price: 'Rp 7.000.000',
        image: '/images/casket-avalon.jpg',
      },
    ],
  },
  {
    name: 'Ekonomis',
    description: 'Pilihan terjangkau dengan kualitas tetap layak dan bermartabat.',
    items: [
          {
        name: 'Legacy',
        description: 'Kayu cokelat hangat dengan gagang kuningan dan panel ukir.',
        price: 'Rp 4.000.000',
        image: '/images/casket-legacy.jpg',
      },
    ],
  },
];