const { default: mongoose } = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    type: {type: String, enum:["income", "expense"]},
    amount: Number,
    description: String,
    date: Date,
    category: String,
    addedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

module.exports = mongoose.model('Expense', ExpenseSchema);