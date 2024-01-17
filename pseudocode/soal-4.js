// Buatlah tampilan terbilang dari variable x yang berupa 4 digit angka ( lebih besar dari 2000 ) :
// Contoh :
// 2234 = Dua Ribu Dua Ratus Tiga Puluh Empat
// 8500 = Delapan Ribu Lima Ratus
// 7001 = Tujuh Ribu Satu

// Answer:
let x = prompt("Masukan nilai x: ");

if (isNaN(x) || x <= 0) {
  console.log("Masukkan nilai x yang valid (bilangan bulat positif).");
} else {
  function terbilang4Digit(x) {
    if (x < 2000 || x > 9999) {
      console.log("Masukkan angka 4 digit yang lebih besar dari 2000.");
      return;
    }

    const ribuan = Math.floor(x / 1000);
    const ratusan = Math.floor((x % 1000) / 100);
    const puluhan = Math.floor((x % 100) / 10);
    const satuan = x % 10;

    let terbilang = "";

    // Ribuan
    if (ribuan > 1) {
      terbilang += `${terbilangSatuan(ribuan)} Ribu `;
    } else if (ribuan === 1) {
      terbilang += "Seribu ";
    }

    // Ratusan
    if (ratusan > 1) {
      terbilang += `${terbilangSatuan(ratusan)} Ratus `;
    } else if (ratusan === 1) {
      terbilang += "Seratus ";
    }

    // Puluhan
    if (puluhan > 1) {
      terbilang += `${terbilangSatuan(puluhan)} Puluh `;
    } else if (puluhan === 1) {
      if (satuan === 0) {
        terbilang += `Sepuluh `;
      } else if (satuan === 1) {
        terbilang += "Sebelas ";
      } else {
        terbilang += `${terbilangSatuan(satuan)} belas`;
      }
    }

    // Satuan
    if (puluhan !== 1 && satuan > 0) {
      terbilang += terbilangSatuan(satuan);
    }

    console.log(`${x} = ${terbilang}`);
  }

  function terbilangSatuan(angka) {
    const satuanTerbilang = [
      "",
      "Satu",
      "Dua",
      "Tiga",
      "Empat",
      "Lima",
      "Enam",
      "Tujuh",
      "Delapan",
      "Sembilan",
    ];
    return satuanTerbilang[angka];
  }
  terbilang4Digit(x);
}
