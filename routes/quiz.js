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


module.exports = router ;