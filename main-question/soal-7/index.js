const CryptoJS = require("crypto-js");

function hashString(inputString) {
  // Menggunakan SHA-256 untuk hashing
  const hashedValue = CryptoJS.SHA256(inputString).toString(CryptoJS.enc.Hex);
  return hashedValue;
}

function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return day + month + year;
}

function getLowercaseFirstName(fullName) {
  const firstName = fullName.split(" ")[0];
  return firstName.toLowerCase();
}

const currentDate = getCurrentDate();
const lowercasedFirstName = getLowercaseFirstName("Riyadh Firdaus Ahmad");
const pria = "pria";
const ifabula = "ifabula";

const inputString = currentDate + lowercasedFirstName + pria + ifabula;

// Menggunakan fungsi hashing (gunakan fungsi sha256Hash seperti yang telah diberikan sebelumnya)
const hashedResult = hashString(inputString);

console.log("Sebelum Hashing:", inputString);
// Mencetak hasil hashing pada console log
console.log("Hasil Hashing:", hashedResult);
