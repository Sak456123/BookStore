const express = require("express");
const mongoose = require("mongoose");
const router=require("./routes/book-routes");
const app = express();

app.use(express.json());
app.use("/books", router);
app.use(express.urlencoded({ extended: true }));
// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://sakshidrathod14:RbdSHpJNhaOXJfDk@cluster0.lcabd.mongodb.net/bookstore?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

// Middleware


// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
