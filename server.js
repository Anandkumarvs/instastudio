const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

var admin = require("firebase-admin");

var serviceAccount = require(path.join(
  __dirname,
  "insta-studio-vellore-firebase-adminsdk-ul7ko-4f9e15d4da.json"
));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://insta-studio-vellore.firebaseio.com"
});

//Database Reference
var db = admin.database();

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

app.get("/log", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/logothumbnail.ico"));
});

app.get("/gokulpic", function(req, res) {
  res.sendFile(path.join(__dirname, "/res/gokul.jpg"));
});

app.get("/toasts", function(req, res) {
  console.log("dd");
  res.sendFile(path.join(__dirname, "/res/bulma-toast.min.js"));
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

app.post("/request", function(req, res) {
  var check = db.ref("requests/" + req.body.phone);
  check.once("value", function(data) {
    if (data.val() == null) {
      var ref = db.ref("requests");
      var a = ref.child(req.body.phone);
      a.set(req.body);
      res.send("Hi " + req.body.name + " your request is being processed");
    } else {
      res.send(
        "Hi " + data.val().name + " you have already requested a quote."
      );
    }
  });
});

app.listen(3000, function() {
  console.log("Server Started at " + Date());
});
