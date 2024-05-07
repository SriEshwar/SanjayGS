const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/myDatabase");

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const UserModel = mongoose.model("users", UserSchema);

UserModel.insertMany([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
]).then(() => {
    console.log("Sample data inserted successfully");
}).catch(err => {
    console.error("Error inserting sample data:", err);
});

app.get("/getUsers", (request, response) => {
    UserModel.find({}).then(function (users) {
        response.json(users);
    }).catch(function (err) {
        console.log(err);
        response.status(500).send("Internal Server Error");
    });
});

app.listen(3000, () => {
    console.log("Server is running");
});
