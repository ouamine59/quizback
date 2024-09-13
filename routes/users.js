const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken')
const db = require( '../config/db.js' )


const secret = process.env.SECRET_KEY || 'ma-super-clef'
/** 
 * @swagger
 * /users:
 *  get:
 *      summary : recupere tous les user
 *      response:
 *          200:
 *              description: Lise des utilisateurs
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items: 
 *                              type: object
 *                              properties :
 *                                  id:
 *                                      type: integer
 *                                      example : 24
 *                                  username :
 *                                      type: string
 *                                      example : 'tot'
 */
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
    if (err){
        return res.status(500).send(err);
    }
    res.status(200).json(results);

    });
});

router.post('/register', async (req, res)=>{
    const {username, password} = req.body ;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users(username, password, role) VALUE (?, ?, ?)";
    db.query(sql, [username, hashedPassword, 'user'], (err, result)=>{
        if(err){
            return res.status(500).send(err);
        }
        res.status(201).send({message : 'utilisateur crée'})
    })
})

router.post('/login', async(req,res)=>{
    const {username, password} = req.body ;
    const sql = "SELECT * FROM users WHERE username=?";
    db.query(sql, [username], async (err, results)=>{
        if(err){
            return res.status(500).send({message : 'erreur', 'type': err});
        }
        if(results.length===0 || !(await bcrypt.compare(password , results[0].password))){
            return res.status(401).send({message:'nom utilisateur ou mot de passe incorrect'})
        }
        const user = {
            id: results[0].id,
            username:  results[0].username,
            role:  results[0].role
        };
        const token = jwt.sign(
            {
                id: user.id,
                username:  user.username,
                role:  user.role,
                name:  user.name,
                lastname: user.lastname 
            },
            secret,
            { expiresIn:'1d'}
        )
        res.status(201).send({token})      
    })
})

router.get('/token',async(req, res)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, "1983");
        res.status(201).json({message: true})
    }catch{
        res.status(201).json({message: false})
    }
} )

router.post('/delete', async (req, res)=>{
    const {id} = req.body ;
    const sql = "DELETE FROM users WHERE id =?";
    db.query(sql, [id], (err, result)=>{
        if(err){
            return res.status(500).send(err);
        }
        res.status(201).send({message : 'utilisateur supprimer'})
    })
})
module.exports = router ;