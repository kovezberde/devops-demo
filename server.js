const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;
const VERSION = process.env.VERSION || "1.0";

app.get('/', (req, res) => {
  res.json({
    message: "DevOps Demo App",
    version: VERSION,
    hostname: os.hostname(),
    time: new Date()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});