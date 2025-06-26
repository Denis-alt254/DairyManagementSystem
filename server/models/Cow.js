const { default: mongoose } = require("mongoose");

const CowSchema = new mongoose.Schema({
    tagid: String,
    breed: String,
    age: Number,
    healthStatus: String,
    averageMilk: Number,
    addedBy: ObjectId (User)
});

module.exports = mongoose.model('Cow', CowSchema);