// Tambahkan header pada saat request ke API di soal no 10 :
// a. User-id : ifabula
// b. Scope: user
// Validasilah proses request ke API anda dan jika header diatas tidak cocok, balikan
// response :
// {
// responseCode: 401,
// responseMessage:

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const validateHeader = (req, res, next) => {
  const userIdHeader = req.get("User-id");
  const scopeHeader = req.get("Scope");

  if (userIdHeader === "ifabula" && scopeHeader === "user") {
    next();
  } else {
    res.status(401).json({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
  }
};

app.use("/api/post-data", validateHeader);

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
