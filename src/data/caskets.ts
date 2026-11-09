export type Casket = {
  name: string;
  description: string;
  price: string;
  image: string;
  additionalImages?: string[];
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
        name: 'Custom 1',
        description: 'Menampilkan balutan warna emas yang menawan dengan desain bersudut dan tutup kaca penuh yang dapat dibuka. Bagian samping dihiasi relief Perjamuan Terakhir serta motif geometris di sepanjang tepi peti. Interiornya dilapisi kain putih bertekstur lembut, sementara sisi dalam tutup menampilkan ilustrasi Yesus Sang Gembala Baik. Perpaduan detail artistik dan finishing emas mengilap menghadirkan tampilan yang megah, anggun, dan berkelas.',
        price: '',
        image: '/images/peti/optimized/casket-custom1.webp',
      },
      {
        name: 'custom 2',
        description: 'Menampilkan perpaduan warna merah maroon dan putih yang harmonis, menghadirkan kesan klasik dan elegan. Memiliki desain bersudut dengan tutup kaca penuh yang dapat dibuka, dipadukan dengan ornamen perjamuan emas pada bagian samping dan aksen salib dekoratif di bagian depan. Interior peti dilapisi kain putih dengan detail lipatan yang rapi, sementara sisi dalam tutup dihiasi ilustrasi Yesus Sang Gembala Baik. Kombinasi warna yang kontras, sentuhan ornamen emas, dan finishing mengilap memberikan tampilan yang anggun, artistik, dan berwibawa.',
        price: '',
        image: '/images/peti/optimized/casket-custom3.webp',
      },
      {
        name: 'Montana',
        description: 'Memiliki perpaduan warna putih dan emas dengan ornamen yang menonjol. Dilengkapi  dekoratif pada bagian sudut, pegangan berwarna emas, serta motif geometris di sepanjang tepi peti. Tampilan yang detail memberikan kesan megah dan berkarakter.',
        price: 'Rp 14.000.000',
        image: '/images/peti/optimized/casket-montana.webp',
      },
      {
        name: 'Vesto',
        description: 'Menampilkan desain bersudut dengan tutup bertingkat dan finishing putih mengilap. Bagian samping dihiasi relief Perjamuan Terakhir berwarna emas, dipadukan dengan garis ornamen emas pada tepi peti. Desainnya memberikan tampilan klasik yang tetap rapi dan elegan.',
        price: 'Rp 14.000.000',
        image: '/images/peti/optimized/casket-vesto.webp',
      },
      {
        name: 'Bryon',
        description: 'Menampilkan bentuk bersudut dengan tutup bertingkat yang menjadi ciri khas desainnya. Dilengkapi pegangan berwarna emas, salib pada bagian depan, dan gambar Perjamuan Terakhir di bagian samping. Kombinasi tersebut menghadirkan tampilan yang tegas dan elegan.',
        price: 'Rp 12.500.000',
        image: '/images/peti/optimized/casket-bryon.webp',
      },
      {
        name: 'Therion',
        description: 'Memiliki desain bersudut dengan kombinasi putih dan ornamen emas yang cukup dominan. Bagian samping dihiasi relief Perjamuan Terakhir, sementara bagian sudut dilengkapi dekorasi emas serta motif geometris di sepanjang tepi. Desainnya memberikan tampilan klasik dengan detail yang lebih kaya.',
        price: 'Rp 12.500.000',
        image: '/images/peti/optimized/casket-therion.webp',
      },
    ],
  },
  {
    name: 'Menengah',
    description: 'Pilihan seimbang antara kualitas dan harga.',
    items: [
      {
        name: 'Mavis',
        description: 'Menampilkan perpaduan putih mengilap dengan ornamen emas pada bagian sudut dan sisi peti. Dilengkapi pegangan kombinasi emas dan logam berwarna perak, motif geometris pada tepi, serta gambar Perjamuan Terakhir. Tampilan dekoratifnya memberikan kesan megah sekaligus tertata rapi.',
        price: 'Rp 12.000.000',
        image: '/images/peti/optimized/casket-mavis.webp',
      },
      {
        name: 'Vesper',
        description: 'Hadir dengan kombinasi warna putih dan emas yang menonjol. Dilengkapi ornamen emas pada sudut, pegangan dekoratif, motif geometris di sepanjang tepi, serta gambar Perjamuan Terakhir pada sisi peti. Detail tersebut memberikan kesan klasik dan megah.',
        price: 'Rp 11.500.000',
        image: '/images/peti/optimized/casket-vesper.webp',
      },
      {
        name: 'Gigant',
        description: 'Memiliki bentuk persegi panjang dengan bodi yang terlihat kokoh dan tutup bertingkat. Warna putih dipadukan dengan pegangan emas, salib pada bagian depan, serta panel gambar Perjamuan Terakhir di bagian samping. Detail garis vertikal menambah karakter pada desain peti.',
        price: 'Rp 11.000.000',
        image: '/images/peti/optimized/casket-gigant.webp',
      },
      {
        name: 'Avalon',
        description: 'Memiliki desain putih mengilap dengan tutup bertingkat dan bentuk sudut yang rapi. Dilengkapi pegangan emas, panel gambar Perjamuan Terakhir, serta detail garis dekoratif pada bagian depan. Cocok bagi keluarga yang menginginkan peti dengan tampilan klasik dan tidak berlebihan.',
        price: 'Rp 10.500.000',
        image: '/images/peti/optimized/casket-avalon.webp',
      },
      {
        name: 'Polaris',
        description: 'Menampilkan desain klasik dengan sentuhan putih mengilap dan ornamen emas yang menawan. Dilengkapi kaca 1/3 pada bagian tutup, pegangan dekoratif berwarna emas, serta aksen salib dan gambar Perjamuan Terakhir. Perpaduan detail ornamen dan finishing yang halus menciptakan tampilan elegan, berkarakter, dan berkelas.',
        price: 'Rp 7.500.000',
        image: '/images/peti/optimized/casket-polaris.webp',
        additionalImages: ['/images/peti/optimized/casket-polaris2.webp'],
      },
      {
        name: 'Vale',
        description: 'Hadir dengan desain minimalis berwarna putih yang anggun, dilengkapi tutup bertingkat dengan kaca 1/3 pada bagian atas. Aksen salib emas pada bagian depan berpadu harmonis dengan gambar Perjamuan Terakhir di sisi peti. Garis desain yang tegas dan finishing mengilap menghadirkan tampilan bersih, elegan, dan berkelas.',
        price: 'Rp 6.500.000',
        image: '/images/peti/optimized/casket-vale.webp',
      },
    ],
  },
  {
    name: 'Ekonomis',
    description: 'Pilihan terjangkau dengan kualitas tetap layak dan bermartabat.',
    items: [
      {
        name: 'Pluton',
        description: 'Hadir dengan desain putih yang simpel dan rapi. Memiliki tutup bertingkat dengan bentuk geometris, dilengkapi salib berwarna emas pada bagian atas dan depan, serta gambar Perjamuan Terakhir pada bagian samping. Cocok untuk keluarga yang menyukai tampilan sederhana dan elegan.',
        price: 'Rp 5.000.000',
        image: '/images/peti/optimized/casket-pluton.webp',
        additionalImages: ['/images/peti/optimized/casket-pluton2.webp'],
      },
      {
        name: 'Orion',
        description: 'Memiliki desain putih dengan tutup bertingkat yang membentuk sudut tegas. Dilengkapi simbol salib emas pada bagian depan serta gambar Perjamuan Terakhir di sisi peti. Perpaduan bentuk geometris dan dekorasi sederhana memberikan tampilan modern yang tetap anggun.',
        price: 'Rp 4.500.000',
        image: '/images/peti/optimized/casket-orion.webp',
      },
      {
        name: 'Legacy',
        description: 'Mengusung desain minimalis dengan bentuk persegi panjang dan permukaan tutup yang rata. Warna putih dipadukan dengan salib emas serta gambar Perjamuan Terakhir di bagian samping. Pilihan bagi keluarga yang mengutamakan kesederhanaan dan tampilan bersih.',
        price: 'Rp 4.000.000',
        image: '/images/peti/optimized/casket-legacy.webp',
      },
    ],
  },
];