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
        data
    })
})


app.listen(3000, () => {
    console.log(`app is running on port 3000`);
})