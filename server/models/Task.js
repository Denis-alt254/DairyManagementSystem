const { default: mongoose } = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    assignedTo: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    dueDate: Date,
    status: {type: String, enum: ["pending", "done"], default: "pending"}
});

module.exports = mongoose.model('Task', TaskSchema);