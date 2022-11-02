const express = require("express");

const app = express();

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get("/api", (req, res) => {
  res.json({
    products: [
      { id: 1, name: "Product-1" },
      { id: 2, name: "Product-2" },
      { id: 3, name: "Product-3" },
      { id: 4, name: "Product-4" },
    ],
  });
});

app.listen(4000, () => {
  console.log("server started....port: 4000");
});
