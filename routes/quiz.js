const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db.js');
require('../middleware/auth.js');
const secret = process.env.SECRET_KEY || 'ma-super-clef';

router.post('/create', (req, res) => {
    const { titre,  questions } = req.body;
    const insertQuestionnaire = 'INSERT INTO quiz (titre, nombre) VALUES (?, ?)';
    db.query(insertQuestionnaire, [titre, 2], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        const quizId = result.insertId;
        for(let i = 0; i<questions.length; i++){
            db.query('INSERT INTO question (  question,  responses, goodResponses, idQuiz ) VALUES (?, ?, ?, ? )', 
                [ questions[i].question,
                JSON.stringify(questions[i].reponse),
                JSON.stringify(questions[i].checkbox),
                quizId
            ], (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
           });
        }
        res.status(200).json({ message: 'Questionnaire et questions insérés avec succès !' });
    });
})
router.get('/listing',async(req, res)=>{
    const sql = 'SELECT * FROM quiz';
    db.query(sql, (err, results) => {
    if (err){
        return res.status(500).send(err);
    }
    res.status(200).json(results);
    });
} )

module.exports = router;







// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('../config/db.js');
// require('../middleware/auth.js');
// const secret = process.env.SECRET_KEY || 'ma-super-clef';

// router.post('/create', async (req, res) => {
//     const { titre, questions } = req.body;

//     // Insérer le quiz dans la table `quiz`
//     const sqlQuiz = "INSERT INTO quiz(titre, nombre) VALUES (?, ?)";
//     db.query(sqlQuiz, [titre, questions.length], (err, result) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         const idQuiz = result.insertId;
//         console.log(questions)
//         // Insérer chaque question dans la table `question`
//         questions.forEach((q) => {
//             const sqlQuestion = "INSERT INTO question( question, responses, goodResponses) VALUES ( ?, ?, ?)";
//             db.query(sqlQuestion, [ q.question, JSON.stringify(q.reponse), JSON.stringify(q.checkbox)], (err, result) => {
//                 if (err) {
//                     return res.status(500).send(err);
//                 }
//                 // Si besoin, insérer les relations entre quiz et questions dans la table 'avoir'
//                     const questionIds = result.insertId; // Ceci ne fonctionne pas pour plusieurs insertions
//                     const sql3 = "INSERT INTO avoir(idQuiz, idQuestion) VALUES (?, ?)";
//                     db.query(sql3, [idQuiz, questionIds], (err) => {
//                         if (err) {
//                             return res.status(500).send(err);
//                         }
//                     });
                
//             });
//         });

//         res.status(201).send({ message: 'Quiz et questions créés avec succès' });
//     });
// });

// module.exports = router;
