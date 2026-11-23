import * as readlineSync from "readline-sync";

const nama = readlineSync.question("Nama: ");
const umur = readlineSync.questionInt("Umur: ");

console.log(`Halo ${nama}, umur kamu ${umur} tahun.`);