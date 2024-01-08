const express = require('express');
const cors = require('cors');
const {TodoModel} = require('./db/database');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/todo',async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const isCompleted = req.body.isCompleted;

    const data = await TodoModel.create({
        title,
        description,
        isCompleted
    })
    if(data){
        res.json({
            savedData : data
        })
    }else{
        res.json({
            message : `some error has occred`
        })
    }

})




app.get('/todo', async (req, res) => {
    const data = await TodoModel.find();
    // console.log(data);
    res.json({
        todos : data
    })
})

app.get('/todo/:_id', async (req, res) => {
    const todoId = req.params._id;

    const resp = await TodoModel.findOne({_id : todoId});
    if(resp){
        res.status(200).json({
            oneTodo : resp
        })
    }else{
        res.status(204).json({
            message : `todo with the request id not found!`
        })
    }
})

app.put('/todo', async (req, res) => {

    const updatedTodo = await TodoModel.updateOne({_id : req.body._id},
         {$set : {
            isCompleted : req.body.isCompleted
         }});
    if(updatedTodo.acknowledged){
        res.status(202).json({
            message : `One todo updated`
        })
    }else{
        res.status(304).json({
            message : `Update Unsuccessful`
        })
    }
})


app.listen(3000, () => {
    console.log(`app is running on port 3000`);
})