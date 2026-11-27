import * as readlineSync from "readline-sync";

// =========================================================================
// [BLOK 1: ARSYAD] - STRUKTUR DATA & SEED DATA (5 DATA AWAL)
// =========================================================================

// Interface untuk mendefinisikan struktur objek data tagihan listrik pelanggan
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

// Array of object untuk menyimpan data tagihan di memori (minimal 5 seed data)
let daftarTagihan: TagihanListrik[] = [
    {
        id: "PLG-001",
        namaPelanggan: "Budi Santoso",
        golonganDaya: "R1 (900 VA)",
        pemakaianKWh: 85,
        kategoriPemakaian: "Hemat",
        isTerlambat: false,
        hariTerlambat: 0,
        biayaDasar: 114920,
        denda: 0,
        potongan: 11492,
        totalBayar: 103428
    },
    {
        id: "PLG-002",
        namaPelanggan: "Siti Aminah",
        golonganDaya: "R2 (1300 VA)",
        pemakaianKWh: 210,
        kategoriPemakaian: "Normal",
        isTerlambat: true,
        hariTerlambat: 5,
        biayaDasar: 303240,
        denda: 10000,
        potongan: 0,
        totalBayar: 313240
    },
    {
        id: "PLG-003",
        namaPelanggan: "Andi Wijaya",
        golonganDaya: "B1 (2200 VA)",
        pemakaianKWh: 450,
        kategoriPemakaian: "Tinggi",
        isTerlambat: false,
        hariTerlambat: 0,
        biayaDasar: 720000,
        denda: 0,
        potongan: 5000,
        totalBayar: 715000
    },
    {
        id: "PLG-004",
        namaPelanggan: "Dewi Lestari",
        golonganDaya: "R1 (900 VA)",
        pemakaianKWh: 150,
        kategoriPemakaian: "Normal",
        isTerlambat: true,
        hariTerlambat: 12,
        biayaDasar: 202800,
        denda: 25000,
        potongan: 0,
        totalBayar: 227800
    },
    {
        id: "PLG-005",
        namaPelanggan: "Rizky Pratama",
        golonganDaya: "B1 (2200 VA)",
        pemakaianKWh: 95,
        kategoriPemakaian: "Hemat",
        isTerlambat: false,
        hariTerlambat: 0,
        biayaDasar: 152000,
        denda: 0,
        potongan: 20200,
        totalBayar: 131800
    }
];

// =========================================================================
// [BLOK 2: MEISA] - FUNGSI KALKULASI TAGIHAN (FONDASI UTS) & KERANGKA READ/UPDATE
// =========================================================================

// Fungsi dengan parameter & return type bertipe untuk menghitung rincian tagihan listrik
function hitungRincianTagihan(
    golongan: number,
    kwh: number,
    terlambat: boolean,
    hari: number
): { namaGolongan: string; kategori: string; biayaDasar: number; denda: number; potongan: number; totalBayar: number } {
    // Deklarasi variabel bertipe string dan number menggunakan let karena nilainya berubah
    let tarif: number = 1352;
    let namaGolongan: string = "R1 (900 VA)";
    let kategori: string = "Normal";
    let denda: number = 0;
    let potongan: number = 0;

    // Seleksi kondisi switch untuk menentukan tarif per kWh berdasarkan golongan daya
    switch (golongan) {
        case 1:
            namaGolongan = "R1 (900 VA)";
            tarif = 1352;
            break;
        case 2:
            namaGolongan = "R2 (1300 VA)";
            tarif = 1444;
            break;
        case 3:
            namaGolongan = "B1 (2200 VA)";
            tarif = 1600;
            break;
        default:
            namaGolongan = "R1 (900 VA)";
            tarif = 1352;
            break;
    }

    // Operator aritmatika perkalian (*) untuk menghitung biaya dasar
    const biayaDasar: number = kwh * tarif;

    // Seleksi kondisi if majemuk dengan operator perbandingan (>, <=) dan logika (&&)
    if (kwh > 100 && kwh <= 300) {
        kategori = "Normal";
    } else if (kwh <= 100) {
        kategori = "Hemat";
    } else {
        kategori = "Tinggi";
    }

    // Seleksi kondisi bersarang (nested) untuk menghitung denda keterlambatan atau diskon/cashback
    if (terlambat) {
        if (hari >= 1 && hari <= 7) {
            denda = 10000;
        } else if (hari >= 8 && hari <= 30) {
            denda = 25000;
        } else if (hari > 30) {
            denda = 50000;
        }
    } else {
        if (kwh <= 100) {
            // Diskon 10% untuk pemakaian hemat energi
            potongan += biayaDasar * 0.10;
        }
        // Cashback Rp 5.000 untuk golongan B1 (3) atau pemakaian di atas 500 kWh
        if (golongan === 3 || kwh > 500) {
            potongan += 5000;
        }
    }

    // Operator compound (+= dan -=) untuk menghitung total pembayaran akhir
    let totalBayar: number = biayaDasar;
    totalBayar += denda;
    totalBayar -= potongan;

    return { namaGolongan, kategori, biayaDasar, denda, potongan, totalBayar };
}

// Kerangka fungsi Read (akan dilengkapi pada Progress 4)
function tampilkanSemuaData(): void {
    console.log(`[Info] Menampilkan ${daftarTagihan.length} data tagihan pelanggan (Implementasi lengkap di Progress 4).`);
}

// Kerangka fungsi Update (akan dilengkapi pada Progress 5)
function ubahData(): void {
    console.log("[Info] Fitur Ubah Data Tagihan siap dikerjakan pada Progress 5.");
}

// =========================================================================
// [BLOK 3: RIFQI & ARSYAD] - KERANGKA CREATE, DELETE, SEARCH & MENU UTAMA
// =========================================================================

// Kerangka fungsi Create (akan dilengkapi Arsyad pada Progress 3)
function tambahData(): void {
    console.log("[Info] Fitur Tambah Data Tagihan siap dikerjakan pada Progress 3.");
}

// Kerangka fungsi Delete (akan dilengkapi Rifqi pada Progress 5)
function hapusData(): void {
    console.log("[Info] Fitur Hapus Data Tagihan siap dikerjakan pada Progress 5.");
}

// Kerangka fungsi Search (akan dilengkapi Rifqi pada Progress 6)
function cariData(): void {
    console.log("[Info] Fitur Pencarian & Filter Tagihan siap dikerjakan pada Progress 6.");
}

// Fungsi utama tanpa parameter dan tanpa return (void) untuk menjalankan menu utama berulang
function mainMenu(): void {
    // Variabel boolean untuk mengontrol perulangan menu utama
    let berjalan: boolean = true;

    // Perulangan while terus berjalan sampai pengguna memilih angka 0 (Keluar)
    while (berjalan) {
        console.log("\n==================================================");
        console.log("   SISTEM MANAJEMEN & TAGIHAN LISTRIK PELANGGAN   ");
        console.log("==================================================");
        console.log("1. Tambah Data Tagihan (Create)");
        console.log("2. Lihat Semua & Detail Tagihan (Read)");
        console.log("3. Ubah Data Tagihan (Update)");
        console.log("4. Hapus Data Tagihan (Delete)");
        console.log("5. Cari & Filter Tagihan (Search)");
        console.log("0. Keluar Program");
        console.log("==================================================");

        // Membaca pilihan menu pengguna dari terminal
        const pilihan: string = readlineSync.question("Pilih menu (0-5): ");

        // Seleksi kondisi switch untuk mengarahkan alur ke setiap fitur
        switch (pilihan) {
            case "1":
                tambahData();
                break;
            case "2":
                tampilkanSemuaData();
                break;
            case "3":
                ubahData();
                break;
            case "4":
                hapusData();
                break;
            case "5":
                cariData();
                break;
            case "0":
                console.log("Terima kasih! Program sistem tagihan listrik selesai.");
                berjalan = false;
                break;
            default:
                // Penanganan jika pengguna memasukkan pilihan menu yang tidak valid
                console.log("[Error] Pilihan tidak valid! Masukkan angka 0 sampai 5.");
                break;
        }
    }
}

// Memanggil fungsi utama agar aplikasi langsung berjalan saat dieksekusi
mainMenu();