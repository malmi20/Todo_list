require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoRoutes = require('./routes/TodoRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/todoRoutes", todoRoutes)
//console.log("MONGO_URI", process.env.MONGO_URI)
//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen fpr requests
    app.listen(process.env.PORT, () => {
      console.log("DB connected and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
