const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("The Result of your calculations are: " + result);
});

app.listen(8000, () => console.log("Server is running on port 8000."));
