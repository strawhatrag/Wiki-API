//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {
  useNewUrlParser: true,
});

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

//chaining for same route
// app.route()
app
  .route("/articles")
  .get(async (req, res) => {
    const articles = await Article.find({});
    res.send(articles);
  })
  .post(async (req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    await newArticle.save();

    res.sendStatus(200);
  })
  .delete(async (req, res) => {
    await Article.deleteOne({
      title: "goooooo",
    });
    res.sendStatus(200);
  });

/// another example using params

app
  .route("/articles/:articleTitle")
  .get(async (req, res) => {
    const articles = await Article.findOne({ title: req.params.articleTitle });
    res.send(articles);
  })
  .put(async (req, res) => {
    const articles = await Article.updateOne(
      { title: req.params.articleTitle },
      { title: "chuck", content: "he's a goddamn hero san" }
    );

    res.sendStatus(200);
  })
  .patch(async (req, res) => {
    const articles = await Article.updateOne(
      { title: req.params.articleTitle },
      { title: "packer" }
    );

    res.sendStatus(200);
  })
  .delete(async (req, res) => {
    await Article.deleteOne({
      title: req.params.articleTitle,
    });
    res.sendStatus(200);
  });

app.listen(3000, function () {
  console.log("Server on http://localhost:3000");
});
