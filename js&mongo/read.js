const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using mongoose.");
});

const Member = require("../models/Member");

var FindOneQuery = Member.findOne({ name: "Straship Enterprise" })
FindOneQuery.exec((error, data) => {
    if (data) {
        console.log("Find One: " + JSON.stringify(data));
    }
});

Member.find({ name: "Starship Enterprise" }).exec((error, data) => {
    if (data) {
        console.log("Find One: " + JSON.stringify(data));
    }
});

Member.where('credit').gt(0).exec((error, data) => {
    if (data) {
        console.log("Find One: " + JSON.stringify(data));
    }
});