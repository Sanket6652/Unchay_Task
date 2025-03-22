const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const dataRoutes = require('./routes/dataRoute');
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://sanketnannaware96:pXS5zKmerIeSWAvR@cluster0.kbr6p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));



app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/', dataRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
