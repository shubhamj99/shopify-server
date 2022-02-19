const express = require("express");
const app = express();
const arr = ["darkstore1234.myshopify.com", "internBoys.myshopify.com"];
app.get("/", function (req, res) {
  return res.json({
    shops: arr,
  });
});
app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
});