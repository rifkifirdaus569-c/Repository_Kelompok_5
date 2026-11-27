import * as readlineSync from 'readline-sync';

// 1. DEFINISI STRUKTUR DATA (Sesuai BAB I Sub-bab 1.1 Laporan)
interface TagihanListrik {
  id: string;
  namaPelanggan: string;
  golonganDaya: string;
  pemakaianKWh: number;
  kategoriPemakaian: string;
  isTerlambat: boolean;
  hariTerlambat: number;
  biayaDasar: number;
  denda: number;
  potongan: number;
  totalBayar: number;
}

// 2. DATA AWAL (Seed Data minimal 5 data pelanggan)
let daftarTagihan: TagihanListrik[] = [
  {
    id: 'PLG-001',
    namaPelanggan: 'Budi Santoso',
    golonganDaya: 'R1 (900 VA)',
    pemakaianKWh: 120,
    kategoriPemakaian: 'Hemat',
    isTerlambat: false,
    hariTerlambat: 0,
    biayaDasar: 162240,
    denda: 0,
    potongan: 16224,
    totalBayar: 146016
  },
  {
    id: 'PLG-002',
    namaPelanggan: 'Siti Aminah',
    golonganDaya: 'R2 (1300 VA)',
    pemakaianKWh: 250,
    kategoriPemakaian: 'Normal',
    isTerlambat: true,
    hariTerlambat: 3,
    biayaDasar: 361175,
    denda: 15000,
    potongan: 0,
    totalBayar: 376175
  },
  {
    id: 'PLG-003',
    namaPelanggan: 'Andi Wijaya',
    golonganDaya: 'B1 (2200 VA)',
    pemakaianKWh: 450,
    kategoriPemakaian: 'Tinggi',
    isTerlambat: false,
    hariTerlambat: 0,
    biayaDasar: 650115,
    denda: 0,
    potongan: 25000,
    totalBayar: 625115
  },
  {
    id: 'PLG-004',
    namaPelanggan: 'Dewi Lestari',
    golonganDaya: 'R1 (900 VA)',
    pemakaianKWh: 95,
    kategoriPemakaian: 'Hemat',
    isTerlambat: false,
    hariTerlambat: 0,
    biayaDasar: 128440,
    denda: 0,
    potongan: 12844,
    totalBayar: 115596
  },
  {
    id: 'PLG-005',
    namaPelanggan: 'Rizky Pratama',
    golonganDaya: 'R2 (1300 VA)',
    pemakaianKWh: 310,
    kategoriPemakaian: 'Normal',
    isTerlambat: true,
    hariTerlambat: 7,
    biayaDasar: 447857,
    denda: 35000,
    potongan: 0,
    totalBayar: 482857
  }
];

// 3. KERANGKA FUNGSI BERTIPE (Bagian Arsyad: Create & Helper Hitung)
function hitungBiayaDasar(kwh: number, tarif: number): number {
  // Contoh penerapan operator aritmatika untuk syarat Progress 2
  return kwh * tarif;
}

function tambahTagihan(): void {
  console.log('\n[INFO] Fitur Tambah Tagihan (Create) akan diimplementasikan pada Progress 3.');
}
// KERANGKA FUNGSI BERTIPE (Bagian Meisa: Read & Update)
function tampilkanSemuaTagihan(): void {
  console.log('\n[INFO] Fitur Tampilkan Semua Data (Read All) akan diimplementasikan pada Progress 4.');
}

function tampilkanDetailTagihan(): void {
  console.log('\n[INFO] Fitur Struk Detail per ID (Read Detail) akan diimplementasikan pada Progress 4.');
}

function ubahTagihan(): void {
  console.log('\n[INFO] Fitur Ubah Data Tagihan (Update) akan diimplementasikan pada Progress 5.');
}

// 4. FUNGSI MENU UTAMA & NAVIGASI (Looping + Seleksi Kondisi)
function tampilkanMenu(): void {
  let isBerjalan: boolean = true;

  // Perulangan menu sampai pengguna memilih keluar (0)
  while (isBerjalan) {
    console.log('\n======================================================');
    console.log('   SISTEM MANAJEMEN & PERHITUNGAN TAGIHAN LISTRIK');
    console.log('======================================================');
    console.log('1. Tambah Data Tagihan Baru (Create)');
    console.log('2. Tampilkan Semua Data Tagihan (Read All)');
    console.log('3. Tampilkan Struk Detail per ID (Read Detail)');
    console.log('4. Ubah Data Tagihan (Update)');
    console.log('5. Hapus Data Tagihan (Delete)');
    console.log('6. Cari & Filter Tagihan (Search)');
    console.log('0. Keluar Program');
    console.log('======================================================');

    // Menggunakan readlineSync.question() untuk membaca input dari terminal
    const pilihanInput: string = readlineSync.question('Pilih menu (0-6): ').trim();
    const pilihanMenu: number = Number(pilihanInput);

    // Validasi awal jika input kosong atau bukan angka (NaN)
    if (pilihanInput === '' || isNaN(pilihanMenu)) {
      console.log('[ERROR] Input tidak valid! Harap masukkan angka antara 0 sampai 6.');
      continue;
    }

    // Seleksi kondisi percabangan menu utama
    switch (pilihanMenu) {
      case 1:
        tambahTagihan();
        break;
      case 2:
        tampilkanSemuaTagihan();
        break;
      case 3:
        tampilkanDetailTagihan();
        break;
      case 4:
        ubahTagihan();
        break;
      case 5:
        console.log('\n[INFO] Fitur Hapus Data akan ditambahkan Rifki.');
        break;
      case 6:
        console.log('\n[INFO] Fitur Cari & Filter Data akan ditambahkan Rifki.');
        break;
      case 0:
        console.log('\nTerima kasih! Program manajemen tagihan listrik ditutup.');
        isBerjalan = false;
        break;
      default:
        // Menangani angka di luar 0-6 (misal: 9 atau -1)
        console.log('[ERROR] Pilihan menu tidak tersedia! Silakan pilih angka 0 sampai 6.');
        break;
    }
  }
}

// Menjalankan aplikasi utama
tampilkanMenu()