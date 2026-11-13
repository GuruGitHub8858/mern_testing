import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true
    }
});

const todoCollection = mongoose.model("seos", todoSchema);

export default todoCollection;