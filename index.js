const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Express!"));
app.get("/about", (req, res) => res.send("Express is Express"));

app.listen(3000, () =>
  console.log("Hello World app berjalan di http://localhost:3000")
);