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

// In this execution environment, a listening socket may not keep Node alive.
// A long-lived timer ensures the process stays up like a normal server host.
setInterval(() => {}, 60 * 60 * 1000);
