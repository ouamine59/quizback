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
        const {tab }= req.body ;
        const sql = "INSERT INTO quiz(titre,nombre) VALUE (?,?)";
        console.log(tab._rawValue)
         db.query(sql, [tab._rawValue[0].title,tab._rawValue[1].nombre ], (err, result)=>{
             if(err){
                 return res.status(500).send(err);
             }
             for(i=2;i<tab._rawValue.length;i++){
                const idQuiz = result.insertId;
                const sql = "INSERT INTO question( question ) VALUE (?)";
                db.query(sql, [tab._rawValue[i].question], (err, result)=>{
                    if(err){
                        return res.status(500).send(err);
                    }
                    const idQuestion  = result.insertId;
                    const sql = "INSERT INTO avoir(idQuiz, idQuestion ) VALUE (?,?)";
                    db.query(sql, [idQuiz, idQuestion], (err, result)=>{
                        // for(j=0;j<tab._rawValue[i].responses.length;j++){
                        //     for(y=0;y<tab._rawValue[i].correctAnswers.length;y++){
                        //         const good = (i==tab._rawValue[i].correctAnswers[y])?true:false ;
                        //         const urlReponse = "INSERT INTO response( response, isGood , idQuestion) VALUE (?, ?,?)";
                        //         db.query(urlReponse, [tab._rawValue[i].responses[j], good, idQuestion], (err, result) =>{
                        //             if(err){
                        //                 return res.status(500).send(err);
                        //             }
                        //             res.status(201).send({message : 'quiz question créee'})
                        //         })
                        //     }
                        // }
                        
                    })
                })
             }
        
        
        //     
        //         

              
                
             
        })
    })
module.exports = router ;