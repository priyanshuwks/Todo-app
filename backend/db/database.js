const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ramanmongodb:8JKaDmQEIzSSOGpV@cluster0.3oudvbc.mongodb.net/Todo_App');

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    isCompleted : Boolean
});

const TodoModel = mongoose.model("TodoModel", todoSchema);

module.exports = {
    TodoModel
}