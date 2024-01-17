// Buatlah project nodejs menggunakan express. Buat 2 API dengan 2 method yang
// berbeda yaitu “GET” dan “POST”. Data request maupun response boleh ditentukan
// anda.

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/api/get-data", (req, res) => {
  const responseData = {
    message: "Ini adalah contoh API dengan metode GET",
    timestamp: new Date().toISOString(),
  };
  res.json(responseData);
});

app.post("/api/post-data", (req, res) => {
  const requestData = req.body;

  const responseData = {
    message: "Ini adalah contoh API dengan metode POST",
    dataReceived: requestData,
    timestamp: new Date().toISOString(),
  };

  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
