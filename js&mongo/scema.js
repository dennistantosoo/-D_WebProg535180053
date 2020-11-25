const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe", 
    {useNewUrlParser: true}
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using mongoose.");
});

const memberSchema = mongoose.Schema({
    name: String, 
    email: String, 
    credit: Number
});

const Member = mongoose.model("Member", memberSchema);

// Type 1
var member1 = new Member({
    name: "Space The Final Fontier", 
    email: "these-are@the-voyages.com"
});
member1.save((error, savedDocuments) => {
    if (error) {
        throw error;
    }
    console.log(savedDocuments);
});

// Type 2
var member2 = new Member({
    name: "Starship Enterprise", 
    email: "to-boldly-go@no1hasgonebefore.com", 
    credit: 1701000
});
member2.save((error, savedDocuments) => {
    if (error) {
        throw error;
    }
    console.log(savedDocuments);
});