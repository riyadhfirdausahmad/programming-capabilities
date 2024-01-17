// Buatlah tampilan berikut sesuai variable x :
// •	Jika variable x=1 maka tampil :
//     *
// •	Jika variable x=2 maka tampil :
//     *
//     * *
// •	Jika variable x=3 maka tampil :
//     *
//     * *
//     * * *
// •	… dan seterusnya

// Answer:
let x = prompt("Masukkan nilai x:");

x = parseInt(x);

if (isNaN(x) || x <= 0) {
  console.log("Masukkan nilai x yang valid (bilangan bulat positif).");
} else {
  function tampilkanPola(x) {
    for (let i = 1; i <= x; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  tampilkanPola(x);
}
