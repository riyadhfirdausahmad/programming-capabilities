# Cara Menjalankan

# Cara Menjalankan

1. Install dependencies `npm install` melalui npm
2. Jalankan server menggunakan perintah `node index.js`
3. Buka Postman.

## Pilih metode "GET".

- Masukkan URL http://localhost:3000/api/get-data.
- Klik tombol "Send" untuk mengirimkan permintaan.

## Pilih metode "POST".

- Masukkan URL http://localhost:3000/api/post-data.
- Pilih tab "Headers"
- Masukan Key & Value:
  User-id: ifabula
  Scope: user
- Pilih tab "Body".
- Pilih format "raw" dan pastikan "JSON (application/json)" dipilih dari dropdown.
- Masukkan data JSON:
  {
  "username": "Riyadh",
  "password": "12345"
  }

- Klik tombol "Send" untuk mengirimkan permintaan.
