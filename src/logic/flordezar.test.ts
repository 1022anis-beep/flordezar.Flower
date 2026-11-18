import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CATALOG_MODELS,
  formatRupiah,
  getContrastingTextColor,
  calculateOrderTotal,
  generateInvoiceNumber,
  validateCheckoutForm,
  buildWhatsAppUrl,
  type InvoiceRecord
} from './flordezar';

test('catalog includes all 11 official models plus 1 locked coming soon card', () => {
  const unlocked = CATALOG_MODELS.filter((m) => !m.locked);
  const locked = CATALOG_MODELS.filter((m) => m.locked);
  assert.equal(unlocked.length, 11);
  assert.equal(locked.length, 1);
  assert.equal(CATALOG_MODELS.find((m) => m.id === 'black-arch')?.price, 99000);
  assert.equal(CATALOG_MODELS.find((m) => m.id === 'orchid-grid')?.price, 110000);
  assert.equal(CATALOG_MODELS.find((m) => m.id === 'mocha-tone')?.price, 125000);
  assert.equal(CATALOG_MODELS.find((m) => m.id === 'sun-mirror')?.price, 135000);
  assert.equal(CATALOG_MODELS.find((m) => m.id === 'red-rustic')?.price, 150000);
});

test('formatRupiah formats Indonesian currency cleanly', () => {
  assert.equal(formatRupiah(99000), 'Rp 99.000');
  assert.equal(formatRupiah(150000), 'Rp 150.000');
  assert.equal(formatRupiah(205000), 'Rp 205.000');
});

test('getContrastingTextColor adapts text to dark vs light and mirror boards', () => {
  assert.equal(getContrastingTextColor('#1A1A1D', false), '#FFF8F3');
  assert.equal(getContrastingTextColor('#7D1926', false), '#FFF8F3');
  assert.equal(getContrastingTextColor('#FCECF2', false), '#3B1D2A');
  assert.equal(getContrastingTextColor('#FFFFFF', false), '#3B1D2A');
  assert.equal(getContrastingTextColor('#111111', true), '#2D1A22');
});

test('calculateOrderTotal sums base price and selected add-ons accurately', () => {
  const res = calculateOrderTotal(135000, ['lampu-sorot', 'express-order']);
  assert.equal(res.addOnsTotal, 55000);
  assert.equal(res.totalPrice, 190000);
});

test('generateInvoiceNumber increments sequentially from existing invoices', () => {
  const existing = [
    { invoiceNumber: 'INV-FDZ-2026-001' },
    { invoiceNumber: 'INV-FDZ-2026-004' }
  ] as InvoiceRecord[];
  assert.equal(generateInvoiceNumber([], 2026), 'INV-FDZ-2026-001');
  assert.equal(generateInvoiceNumber(existing, 2026), 'INV-FDZ-2026-005');
});

test('validateCheckoutForm enforces required customer fields without silent fallbacks', () => {
  const invalid = validateCheckoutForm({
    customerName: '',
    customerPhone: '123',
    eventDateTime: '',
    deliveryAddress: 'Padang'
  });
  assert.ok(invalid.customerName);
  assert.ok(invalid.customerPhone);
  assert.ok(invalid.eventDateTime);
  assert.equal(invalid.deliveryAddress, undefined);

  const valid = validateCheckoutForm({
    customerName: 'Nadia Putri',
    customerPhone: '081234567890',
    eventDateTime: '2026-11-20 09:00',
    deliveryAddress: 'Jl. Khatib Sulaiman No. 12, Padang'
  });
  assert.deepEqual(valid, {});
});

test('buildWhatsAppUrl creates properly encoded wa.me invoice link', () => {
  const sample: InvoiceRecord = {
    invoiceNumber: 'INV-FDZ-2026-001',
    createdAt: '2026-11-18T08:00:00.000Z',
    modelId: 'sun-mirror',
    modelName: 'Sun Mirror',
    basePrice: 135000,
    boardColor: '#DCE8F0',
    flowerTheme: 'matahari',
    ribbonColor: '#EBD5B3',
    headerText: 'Happy Wedding',
    recipientText: 'Raka & Nisa',
    senderText: 'Keluarga Padang',
    fontStyle: 'romantis',
    stickers: ['Kupu-kupu kecil'],
    addOns: ['lampu-sorot'],
    addOnsTotal: 25000,
    totalPrice: 160000,
    customerName: 'Nadia',
    customerPhone: '081234567890',
    eventDateTime: '2026-11-20 09:00',
    deliveryAddress: 'Jl. Khatib Sulaiman, Padang',
    source: 'customizer'
  };
  const url = buildWhatsAppUrl(sample, '6281234567890');
  assert.ok(url.startsWith('https://wa.me/6281234567890?text='));
  assert.ok(decodeURIComponent(url).includes('INV-FDZ-2026-001'));
  assert.ok(decodeURIComponent(url).includes('Sun Mirror'));
  assert.ok(decodeURIComponent(url).includes('Rp 160.000'));
});
