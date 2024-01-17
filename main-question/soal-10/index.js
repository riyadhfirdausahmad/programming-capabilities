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
