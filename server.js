const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

// tells mongoose which databse we want to connect to. If URI exists then we'll use it, if not it will connect to /social_network
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/social_network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Log mongo queries being exectued
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
