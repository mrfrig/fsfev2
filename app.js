const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/demo", (req, res) => {
  res.status(418);
  res.set("X-Franklin", "Test Franklin");
  res.send("I'm a teapot demo");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
