function mainMenu(): void {
    let berjalan: boolean = true;

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

        const pilihan: string = readlineSync.question("Pilih menu (0-5): ");

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
                console.log("[Error] Pilihan tidak valid! Masukkan angka 0 sampai 5.");
                break;
        }
    }
}

mainMenu();