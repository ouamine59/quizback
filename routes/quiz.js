const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken')
const db = require( '../config/db.js' )
require('../middleware/auth.js')
const secret = process. env.SECRET_KEY || 'ma-super-clef'
let idQuestion ; 

    
    // router.post('/create', async (req, res)=>{
    //     const {titre,question,responses,correctAnswers }= req.body ;
    //     const sql = "INSERT INTO quiz(titre) VALUE (?)";
    //     db.query(sql, [titre], (err, result)=>{
    //         if(err){
    //             return res.status(500).send(err);
    //         }
    //         const idQuiz = result.insertId;
    //         const sql = "INSERT INTO question( question ) VALUE (?)";
    //         db.query(sql, [question], (err, result)=>{
    //             if(err){
    //                 return res.status(500).send(err);
    //             }
    //             const idQuestion  = result.insertId;
    //             const sql = "INSERT INTO avoir(idQuiz, idQuestion ) VALUE (?,?)";
    //         db.query(sql, [idQuiz, idQuestion], (err, result)=>{
    //             for(i=0;i<responses.length;i++){
    //               for(y=0;y<correctAnswers.length;y++){
    //                   const good = (i==correctAnswers[y])?true:false ;
    //                   const urlReponse = "INSERT INTO response( response, isGood , idQuestion) VALUE (?, ?,?)";
    //                   db.query(urlReponse, [responses[i], good, idQuestion], (err, result) =>{
    //                   if(err){
    //                       return res.status(500).send(err);
    //                   }
    //                })
    //               }
    //            }
    //                 res.status(201).send({message : 'quiz question créee'})
    //             })
    //         })
    //     })
    // })


    router.post('/create', async (req, res)=>{
        const {tab}= req.body ;
        console.log(tab)
        const sql = "INSERT INTO quiz(titre,nombre) VALUE (?,?)";

 
         db.query(sql, [tab.title,2], (err, result)=>{
             if(err){
                 return res.status(500).send(err);
             }
             for(let i = O ; i<tab.question.length ; i++){
                const idQuiz = result.insertId;

                const sql = "INSERT INTO question( question ,responses, goodResponse) VALUE (?,?,?)";
                db.query(sql, [tab[i].question, tab[i].responses, tab[i].correctAnswers], (err, result)=>{
                    if(err){
                        return res.status(500).send(err);
                    }
                    idQuestion  = result.insertId;
                    const sql1 = "INSERT INTO avoir(idQuiz, idQuestion ) VALUE (?,?)";
                    db.query(sql1, [idQuiz, idQuestion], (err, result)=>{
                        if(err){
                            return res.status(500).send(err);
                        }
                        res.status(201).send({message : 'quiz question créee'})
                    })
                })
            }
        })
        
    })
module.exports = router ;

// table quizz :
//  id
//  title
//  description

// table question
//  id 
//  idQuiz
//  question : string 
//  reponses : Array
//  bonne reponse : array

// obj = {
//     title : "combien font 2 + 2 ?"
//     réponses : [
//         "2", "3", "4"
//     ],
//     BONNREPONSE : ["2", "4"]
// }

