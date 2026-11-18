export interface CatalogModel {
  id: string;
  name: string;
  price: number;
  shape:
    | 'arch'
    | 'wavy-vertical'
    | 'circle'
    | 'wavy-horizontal-frame'
    | 'prism-mirror'
    | 'flora-shelf'
    | 'wide-rustic';
  easel: 'black-tripod' | 'wood-easel' | 'a-frame-wood';
  defaultBoardColor: string;
  defaultFrameColor?: string;
  defaultFlowerTheme: string;
  defaultRibbonColor: string;
  hasRibbon: boolean;
  ribbonPos?: 'top-center' | 'top-left' | 'top-right';
  tulleColor?: string;
  isMirror?: boolean;
  locked?: boolean;
  description: string;
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
}

export interface InvoiceRecord {
  invoiceNumber: string;
  createdAt: string;
  modelId: string;
  modelName: string;
  basePrice: number;
  boardColor: string;
  flowerTheme: string;
  ribbonColor: string;
  headerText: string;
  recipientText: string;
  senderText: string;
  fontStyle: 'romantis' | 'modern' | 'klasik';
  stickers: string[];
  addOns: string[];
  addOnsTotal: number;
  totalPrice: number;
  customerName: string;
  customerPhone: string;
  eventDateTime: string;
  deliveryAddress: string;
  source: 'customizer' | 'admin';
}

export const CATALOG_MODELS: CatalogModel[] = [
  {
    id: 'black-arch',
    name: 'Black Arch',
    price: 99000,
    shape: 'arch',
    easel: 'black-tripod',
    defaultBoardColor: '#1A1A1D',
    defaultFlowerTheme: 'merah-putih',
    defaultRibbonColor: '#FFFFFF',
    hasRibbon: false,
    tulleColor: '#FFFFFF',
    description: 'Papan lengkung arch hitam elegan, bunga merah-putih & kain tile putih'
  },
  {
    id: 'white-arch',
    name: 'White Arch',
    price: 99000,
    shape: 'arch',
    easel: 'black-tripod',
    defaultBoardColor: '#FCECF2',
    defaultFlowerTheme: 'lily-pink',
    defaultRibbonColor: '#FF85A6',
    hasRibbon: false,
    tulleColor: '#FF85A6',
    description: 'Papan lengkung arch putih-pink lembut, bunga lily pink-putih & tile pink'
  },
  {
    id: 'glass-square',
    name: 'Glass Square',
    price: 99000,
    shape: 'wavy-vertical',
    easel: 'black-tripod',
    defaultBoardColor: '#F3F7FA',
    defaultFrameColor: '#CBE3EE',
    defaultFlowerTheme: 'hitam-oranye',
    defaultRibbonColor: '#FFFFFF',
    hasRibbon: false,
    tulleColor: '#FFFFFF',
    description: 'Papan gelombang putih bingkai akrilik bening, bunga hitam-putih-oranye'
  },
  {
    id: 'blue-moon',
    name: 'Blue Moon',
    price: 99000,
    shape: 'circle',
    easel: 'black-tripod',
    defaultBoardColor: '#FFFFFF',
    defaultFlowerTheme: 'biru-putih',
    defaultRibbonColor: '#5AA9E6',
    hasRibbon: false,
    tulleColor: '#5AA9E6',
    description: 'Papan bulat putih dengan rangkaian bunga biru-putih bulan sabit & tile biru'
  },
  {
    id: 'orchid-grid',
    name: 'Orchid Grid',
    price: 110000,
    shape: 'wavy-vertical',
    easel: 'black-tripod',
    defaultBoardColor: '#F8F7FA',
    defaultFrameColor: '#F48FB1',
    defaultFlowerTheme: 'anggrek-pink',
    defaultRibbonColor: '#F48FB1',
    hasRibbon: true,
    ribbonPos: 'top-center',
    description: 'Papan gelombang putih list pink, pita pink di atas & anggrek pink'
  },
  {
    id: 'mocha-tone',
    name: 'Mocha Tone',
    price: 125000,
    shape: 'wavy-horizontal-frame',
    easel: 'black-tripod',
    defaultBoardColor: '#5C3018',
    defaultFrameColor: '#FFFFFF',
    defaultFlowerTheme: 'mocha-lily',
    defaultRibbonColor: '#7B1E2B',
    hasRibbon: true,
    ribbonPos: 'top-left',
    description: 'Bingkai gelombang putih & panel mocha hangat, pita maroon & mawar dusty pink'
  },
  {
    id: 'tulip-bloom',
    name: 'Tulip Bloom',
    price: 125000,
    shape: 'wavy-horizontal-frame',
    easel: 'black-tripod',
    defaultBoardColor: '#EC739E',
    defaultFrameColor: '#FFFFFF',
    defaultFlowerTheme: 'tulip-pink',
    defaultRibbonColor: '#FF2E7E',
    hasRibbon: true,
    ribbonPos: 'top-left',
    description: 'Bingkai gelombang putih & panel pink ceria, deretan tulip & mawar pink-putih'
  },
  {
    id: 'sun-mirror',
    name: 'Sun Mirror',
    price: 135000,
    shape: 'wavy-horizontal-frame',
    easel: 'black-tripod',
    defaultBoardColor: '#DCE8F0',
    defaultFrameColor: '#5D3A22',
    defaultFlowerTheme: 'matahari',
    defaultRibbonColor: '#EBD5B3',
    hasRibbon: true,
    ribbonPos: 'top-left',
    isMirror: true,
    description: 'Papan cermin horizontal bingkai cokelat tua & list krem, bunga matahari cerah'
  },
  {
    id: 'prism-mirror',
    name: 'Prism Mirror',
    price: 135000,
    shape: 'prism-mirror',
    easel: 'wood-easel',
    defaultBoardColor: '#E2EDF3',
    defaultFrameColor: '#FFFFFF',
    defaultFlowerTheme: 'merah-kuning',
    defaultRibbonColor: '#B71C1C',
    hasRibbon: true,
    ribbonPos: 'top-right',
    isMirror: true,
    description: 'Cermin gelombang asimetris vertikal, boks bunga mawar merah-kuning & easel kayu'
  },
  {
    id: 'flora-shelf',
    name: 'Flora Shelf',
    price: 135000,
    shape: 'flora-shelf',
    easel: 'a-frame-wood',
    defaultBoardColor: '#63412C',
    defaultFrameColor: '#4E3220',
    defaultFlowerTheme: 'pink-putih',
    defaultRibbonColor: '#FF85A6',
    hasRibbon: false,
    description: 'Rak kayu cokelat A-frame berdiri dengan planter box bunga pink-putih'
  },
  {
    id: 'red-rustic',
    name: 'Red Rustic',
    price: 150000,
    shape: 'wide-rustic',
    easel: 'wood-easel',
    defaultBoardColor: '#7D1926',
    defaultFrameColor: '#FFFFFF',
    defaultFlowerTheme: 'merah-pink',
    defaultRibbonColor: '#FFFFFF',
    hasRibbon: false,
    description: 'Papan lebar merah maroon mewah, bunga merah-pink di kedua sudut & easel kayu'
  },
  {
    id: 'coming-soon',
    name: 'Coming Soon (???)',
    price: 0,
    shape: 'wide-rustic',
    easel: 'black-tripod',
    defaultBoardColor: '#FFD166',
    defaultFlowerTheme: 'matahari',
    defaultRibbonColor: '#FF6B8B',
    hasRibbon: false,
    locked: true,
    description: 'Model papan spesial terbaru FLORDE.ZAR akan segera hadir!'
  }
];

export const ADDON_OPTIONS: AddOnOption[] = [
  { id: 'lampu-sorot', name: 'Lampu Sorot Mini', price: 25000 },
  { id: 'express-order', name: 'Express Order < H-1', price: 30000 }
];

export function formatRupiah(amount: number): string {
  const safe = Number.isFinite(amount) ? Math.max(0, Math.round(amount)) : 0;
  return 'Rp ' + safe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function getContrastingTextColor(hexColor: string, isMirror = false): string {
  if (isMirror) {
    return '#2D1A22';
  }
  const clean = hexColor.replace('#', '').trim();
  if (clean.length !== 6) return '#2D1A22';
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  // Relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.55 ? '#FFF8F3' : '#3B1D2A';
}

export function calculateOrderTotal(basePrice: number, selectedAddOnIds: string[]): {
  basePrice: number;
  addOnsTotal: number;
  totalPrice: number;
} {
  const addOnsTotal = selectedAddOnIds.reduce((sum, id) => {
    const found = ADDON_OPTIONS.find((item) => item.id === id);
    return sum + (found ? found.price : 0);
  }, 0);
  return {
    basePrice,
    addOnsTotal,
    totalPrice: basePrice + addOnsTotal
  };
}

export function generateInvoiceNumber(existingInvoices: InvoiceRecord[], year = 2026): string {
  let maxNum = 0;
  const prefix = `INV-FDZ-${year}-`;
  for (const inv of existingInvoices) {
    if (typeof inv.invoiceNumber === 'string' && inv.invoiceNumber.startsWith(prefix)) {
      const tail = parseInt(inv.invoiceNumber.slice(prefix.length), 10);
      if (!Number.isNaN(tail) && tail > maxNum) {
        maxNum = tail;
      }
    }
  }
  const next = (maxNum + 1).toString().padStart(3, '0');
  return `${prefix}${next}`;
}

export function validateCheckoutForm(fields: {
  customerName: string;
  customerPhone: string;
  eventDateTime: string;
  deliveryAddress: string;
}): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!fields.customerName.trim()) {
    errors.customerName = 'Nama pemesan wajib diisi.';
  }
  const digits = fields.customerPhone.replace(/\D/g, '');
  if (!digits || digits.length < 9) {
    errors.customerPhone = 'Nomor WhatsApp tidak valid (min. 9 digit).';
  }
  if (!fields.eventDateTime.trim()) {
    errors.eventDateTime = 'Tanggal & jam acara wajib diisi.';
  }
  if (!fields.deliveryAddress.trim() || fields.deliveryAddress.trim().length < 6) {
    errors.deliveryAddress = 'Alamat lengkap area Padang wajib diisi.';
  }
  return errors;
}

export function buildWhatsAppMessage(record: InvoiceRecord): string {
  const addOnNames = record.addOns
    .map((id) => ADDON_OPTIONS.find((a) => a.id === id)?.name || id)
    .join(', ');
  const stickerText = record.stickers.length > 0 ? record.stickers.join(', ') : 'Tanpa stiker tambahan';
  const lines = [
    'Halo Admin FLORDE.ZAR! 🌸',
    'Saya ingin konfirmasi pemesanan papan bunga:',
    '',
    `*No. Invoice:* ${record.invoiceNumber}`,
    `*Pemesan:* ${record.customerName}`,
    `*No. WA:* ${record.customerPhone}`,
    `*Acara:* ${record.eventDateTime}`,
    `*Alamat Padang:* ${record.deliveryAddress}`,
    '',
    `*Model Katalog:* ${record.modelName} (${formatRupiah(record.basePrice)})`,
    `*Warna / Bunga / Pita:* ${record.boardColor} / ${record.flowerTheme} / ${record.ribbonColor}`,
    `*Ucapan Header:* ${record.headerText || '-'}`,
    `*Nama Penerima:* ${record.recipientText || '-'}`,
    `*Nama Pengirim:* ${record.senderText || '-'}`,
    `*Gaya Font:* ${record.fontStyle}`,
    `*Stiker Gratis:* ${stickerText}`,
    `*Add-Ons:* ${addOnNames || 'Tidak ada'}`,
    '',
    `*Estimasi Total Sewa:* ${formatRupiah(record.totalPrice)}`,
    '_(Belum termasuk ongkos kirim, mohon info ongkir ke lokasi di atas ya Kak)_'
  ];
  return lines.join('\n');
}

export function buildWhatsAppUrl(record: InvoiceRecord, adminNumber = '6281234567890'): string {
  const cleanAdmin = adminNumber.replace(/\D/g, '');
  const message = buildWhatsAppMessage(record);
  return `https://wa.me/${cleanAdmin}?text=${encodeURIComponent(message)}`;
}
