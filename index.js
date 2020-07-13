const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const dotenv = require("dotenv");

//models
const TodoTask = require("./models/TodoTask");

dotenv.config();

app.use("/static", express.static("public"));

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");




app.get("/", (req, res) => {
    res.render("todo.ejs");
});

app.post('/', (req, res) => {
    console.log(req.body);
});

mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, {useNewUrlPassword: true}, () => {
    console.log("Connected to DB");
    app.listen(3000,() => console.log("Server is running!"));
});


