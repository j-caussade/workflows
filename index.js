const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Adishatz moùnde !");
});

app.listen("3001", () => {
  console.log("Server started on port 3001");
});
