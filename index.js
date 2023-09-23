const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require("./routes/user");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/api", userRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
