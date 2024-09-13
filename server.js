const express   = require('express');
const bodyParser= require('body-parser');

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const cors = require('cors'); 
const app = express();

app.use(cors());
app.use(cors({
    origin:'http://localhost:8080'
}));
app.use(bodyParser.json())

const swaggerOptions = {
    swaggerDefinition : {
        openapi: '3.1.0',
        info : {
            title: 'API QUIZZ',
            version : '0.0.1',
            description : 'Je suis une super API',
            contact : {
                name :'tino'
            },
            servers : [{ url: 'http://localhost:8889'}]
        }
    },
    apis : ['./routes/*.js']
}

const swaggerDocs  = swaggerJsDoc(swaggerOptions)
//initialisation du swagger
app.use('/api-doc', swaggerUi.serve , swaggerUi.setup(swaggerDocs))


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
app.use('/api/questions', questionsRoutes);

//creation route quiz
const quizRoutes= require('./routes/quiz.js');
app.use('/api/quiz', quizRoutes);

const port = process.env.PORT || 5050;
app.listen(port, () =>{
    console.log('SERVER  DEMMARE')
})