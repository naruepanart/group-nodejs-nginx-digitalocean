const express = require("express");

const app = express();

let c = 0;

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    c: c++,
    message: "Port 3000",
  });
});

app.listen(3000, () => console.log("Server running port 3000"));
