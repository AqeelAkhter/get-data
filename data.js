
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/user");

const app = express();
const PORT = 4000;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
});

const datamodal = mongoose.model("data", userSchema);

app.use(express.json());
app.use(cors());

app.get("/get", (req, res) => {
  datamodal.find().then((resu) => {
    res.json(resu);
  }).catch((err) => {
    console.log(err);
    res.status(500).send("Internal Server Error");
  });
});

app.post("/voice", (req, res) => {
});

const Start = async () => {
  app.listen(PORT, () => {
    console.log("App is running on port",);
  });
};

Start();
