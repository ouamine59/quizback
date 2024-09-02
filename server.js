const express   = require('express');
const bodyParser= require('body-parser');

const cors = require('cors'); 
const app = express();
app.use(cors());
app.use(cors({
    origin:'http://localhost:8080'
}));
app.use(bodyParser.json())
const db = require( './config/db.js' )
db.connect((err) => {
    if (err){
        console.log(err);
    }
    else{
        console.log('bravo !!');
    }
})
const userRoutes= require('./routes/users.js');
app.use('/api/users', userRoutes);

//creation route quiz
const questionsRoutes= require('./routes/questions.js');
app.use('/api/quiz', questionsRoutes);

const port = process.env.PORT || 5050;
app.listen(port, () =>{
    console.log('SERVER  DEMMARE')
})