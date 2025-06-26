const { default: mongoose } = require("mongoose");

const CowSchema = new mongoose.Schema({
    tagid: String,
    breed: String,
    age: Number,
    healthStatus: String,
    averageMilk: Number,
    addedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

module.exports = mongoose.model('Cow', CowSchema);