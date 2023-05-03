const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const chefData = require("./data/chefdata.json");
const blogData = require("./data/blogData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("bistro is running");
});

app.get("/blog", (req, res) => {
  res.send(blogData);
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  if (id) {
    const chef = chefData.find((c) => c.id == id);
    res.send(chef);
  }
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;

  res.send(specificNews);
});

app.listen(port, () => {
  console.log(`app is running from port: ${port}`);
});
