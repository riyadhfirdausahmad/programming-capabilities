// Tampilkan deret angka berkelipatan 5 mulai dari 50 sampai dengan 100
// - Jika angka <=60 maka tampilkan tulisan “KURANG” di sebelah angka tsb.
// - Jika >60 dan <=70 maka tampilkan tulisan “CUKUP” di sebelah angka tsb.
// - Jika >70 dan <=80 maka tampilkan tulisan “BAIK” di sebelah angka tsb.
// - Jika >80 maka tampilkan tulisan “LUAR BIASA” di sebelah angka tsb.

// Answer:

for (i = 50; i <= 100; i++) {
  if (i % 5 === 0) {
    if (i <= 60) {
      console.log(`${i} = KURANG`);
    } else if (i > 60 && i <= 70) {
      console.log(`${i} = CUKUP`);
    } else if (i > 70 && i <= 80) {
      console.log(`${i} = BAIK`);
    } else if (i > 80) {
      console.log(`${i} = LUAR BIASA`);
    }
  }
}
