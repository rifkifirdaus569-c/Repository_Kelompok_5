import * as readlineSync from "readline-sync";

const nama = readlineSync.question("Siapa namamu? ");
console.log(`Halo, ${nama}!`);