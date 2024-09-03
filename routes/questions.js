const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken')
const db = require( '../config/db.js' )
require('../middleware/auth.js')
const secret = process. env.SECRET_KEY || 'ma-super-clef'
router.post('/list-quiz', async (req, res)=>{
    const {question} = req.body ;
    const sql = "SELECT * FROM question WHERE question LIKE ?";
    db.query(sql, ["%"+question+"%"], (err, result)=>{
        if(err){
            return res.status(500).send(err);
        }
        res.status(201).send({message : result})
    })
})
router.post('/create-question', async (req, res)=>{
    const {question, responses, correctAnswers} = req.body ;
    const sql = "INSERT INTO question( question ) VALUE (?)";
    db.query(sql, [question], (err, result)=>{
        if(err){
            return res.status(500).send(err);
        }
        //recuperation dernier ID
        const id = result.insertId;
          for(i=0;i<responses.length;i++){
            for(y=0;y<correctAnswers.length;y++){
                const good = (i==correctAnswers[y])?true:false ;
                const urlReponse = "INSERT INTO response( response, isGood , idQuestion) VALUE (?, ?,?)";
                db.query(urlReponse, [responses[i], good, id], (err, result) =>{
                if(err){
                    return res.status(500).send(err);
                }
             })
            }
         }
        res.status(201).send({message : 'quiz question créee'})
    })

})

module.exports = router ;