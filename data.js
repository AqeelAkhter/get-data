
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/data");

// const app = express();
// const PORT = 5000;

// app.use(express.json());
// app.use(cors());

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   timeSlot: { type: Date, require:true }  
// });

// const User = mongoose.model("pro", userSchema);

// app.post("/signup", async (req, res) => {
//   const { username, password } = req.body;
  
//   try {
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const newUser = new User({ username, password, timeSlot: new Date() });
//     await newUser.save();  
    
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred" });
//   }
// });

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user || user.password !== password) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     user.timeSlot = new Date();  
//     await user.save();

//     res.json({ message: "Login successful", user: user });
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred" });
//   }
// });

// const Start = async () => {
//   app.listen(PORT, () => {
//     console.log(`app is running`);
//   });
// };

// Start();






//second schma+audio video

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");
// const { type } = require("os");

// mongoose.connect("mongodb://localhost:27017/data");

// const app = express();
// const PORT = 4000;

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const audioDir = path.join(__dirname, 'audio');
//     cb(null, audioDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// const schema = new mongoose.Schema({
//   rollNo: { type: Number, required: true },
//   name: { type: String, required: true },
//   class: { type: String, required: true },
//   audioFilePath: { type: String, required: true },
// });

// const datamodal = mongoose.model("pros", schema);

// app.get("/get", (req, res) => {
//   datamodal
//     .find()
//     // .select("rollNo name class")
//     .then((resu) => {
//       res.json(resu);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.post("/voice", upload.single('audio'), (req, res) => {
//   console.log(req.file); 
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }

//   const { rollNo, name, class: className } = req.body;
//   const audioFilePath = req.file.path;

//   const newEntry = new datamodal({
//     rollNo,
//     name,
//     class: className,
//     audioFilePath,
//   });

//   newEntry
//     .save()
//     .then(() => res.json({ message: "Data saved successfully" }))
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ message: "An error occurred" });
//     });
// });

// const Start = async () => {
//   app.listen(PORT, () => {
//     console.log("app is running");
//   });
// };

// Start();

//first get data code

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
