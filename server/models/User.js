const { default: mongoose } = require("mongoose");

const UserShema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    role: {type: String, enum: ["admin", "worker", "vet"], default: "worker"}
});

module.exports = mongoose.model('User', UserShema);