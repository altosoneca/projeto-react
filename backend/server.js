const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./app/models"); 

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ alter: true }).then(() => {
  console.log("All models were synchronized successfully.");
}).catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});