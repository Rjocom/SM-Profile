export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: 'Penjualan Peti Jenazah',
    description: 'Berbagai pilihan peti jenazah dengan kualitas premium.',
    icon: '<path d="M15 4h10l6 9-5 23H14L9 13z"/><path d="M20 12v14M15 17h10"/>',
  },
  {
    title: 'Mobil Jenazah',
    description: 'Layanan transportasi jenazah yang aman dan profesional.',
    icon: '<path d="M3 28V14a2 2 0 0 1 2-2h18l8 7h6v9z"/><circle cx="12" cy="29" r="3.5" fill="var(--bg)"/><circle cx="29" cy="29" r="3.5" fill="var(--bg)"/><path d="M23 12v7"/>',
  },
  {
    title: 'Pendampingan Keluarga Duka',
    description: 'Kami mendampingi setiap keluarga dengan empati dan kepedulian.',
    icon: '<path d="M20 30s-9-5.6-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.400-9 12-9 12z"/><path d="M4 28l6 2 5 5h10l5-5 6-2"/>',
  },
  {
    title: 'Konsultasi Kedukaan',
    description: 'Bantuan dan konsultasi untuk kemudahan pengurusan kedukaan.',
    icon: '<path d="M6 8h28v18H17l-7 6v-6H6z"/><path d="M12 15h16M12 20h10"/>',
  },
  {
    title: 'Perlengkapan Kedukaan',
    description: 'Menyediakan perlengkapan pendukung untuk kebutuhan kedukaan.',
    icon: '<rect x="5" y="13" width="30" height="20" rx="2"/><path d="M15 13V8h10v5M5 22h30"/><path d="M20 20v4"/>',
  },
  {
    title: 'Layanan Kargo Jenazah',
    description: 'Menyediakan layanan kargo pengiriman jenazah yang aman dan profesional.',
    icon: '<path d="M20 3l2.5 12 10.5 5v3l-10.5-2v5l4 2v2l-6.5-1-6.5 1v-2l4-2v-5L7 23v-3l10.5-5L20 3z"/><rect x="13" y="31" width="14" height="6" rx="1"/><path d="M20 31v6m-7-3h14"/>',
  },
  {
    title: 'Layanan 24 Jam',
    description: 'Kami siap melayani Anda kapan saja dan di mana saja.',
    icon: '<circle cx="20" cy="20" r="14"/><path d="M20 11v9l6 4"/>',
  },
];