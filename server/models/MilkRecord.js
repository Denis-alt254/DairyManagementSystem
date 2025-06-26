const { default: mongoose } = require("mongoose");

const MilkSchema = new mongoose.Schema({
    cow: ObjectId (Cow),
    date: Date,
    amountLitres: Number
});

module.exports = mongoose.model('Milk', MilkSchema);