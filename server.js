const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/logo", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/logo.png"));
});

app.get("/rightpane", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/rightpane.jpg"));
});

app.get("/eventspic", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/events.jpg"));
});

app.get("/photoshootspic", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/photoshoots.jpg"));
});

app.get("/productspic", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/products.jpg"));
});

app.get("/gokulpic", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/gokul.jpg"));
});

app.get("/pradeeppic", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/pradeep.jpg"));
});

app.get("/googleplay", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/googleplay.png"));
});

app.get("/bg", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/bg.jpg"));
});

app.listen(3000, function() {
  console.log("Server Started at " + Date());
});
