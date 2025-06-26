const { default: mongoose } = require("mongoose");

const MilkSchema = new mongoose.Schema({
    cow: {type: mongoose.Schema.Types.ObjectId, ref: "Cow"},
    date: Date,
    amountLitres: Number
});

module.exports = mongoose.model('MilkRecord', MilkSchema);