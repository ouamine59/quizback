//import {describe, expect, test} from '@jest/globals';

//const { describe, expect, test } = require('@jest/globals');
const request = require('supertest');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = require('../../routes/users.js'); 
const db = require('../../config/db.js');
const bcrypt = require('bcrypt');
jest.mock('../../config/db.js'); // Moquer la base de données

const app = express();
app.use(express.json());
app.use('/users', router);



describe('test routes to users', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
 /* beforeAll(() => {
  })

  afterAll(async()=> {
    await db.close()
  })
  afterEach(() => {
    jest.clearAllTimers();
  });*/
 

 /* OK*/
 it('should create an user (POST /register)', async () => {
   const hashedPassword = await bcrypt.hash('password123', 10);
   const user = { username: 'user3', password: hashedPassword, role: 'user' };
   db.query.mockImplementation((sql, values, callback) => {
    callback(null, { id: 10 });
   });
   return request(app)
     .post('/users/register')
     .send(user)
    
    .then((response) => {
      expect(response.status).toBe(201);
       expect(response.body).toEqual({ message: 'utilisateur crée' });
   })
   .catch((err) => done(err));
 });
/*OK*/
it('should get all users ( /)', async () => {
  const mockUsers = [
    { id: 1, username: 'admin',password:'1234', role: 'admin' },
    { id: 2, username: 'user2', role: 'user' }
];
  db.query.mockImplementation((sql, callback) => {
    callback(null, mockUsers);
  });
  const response = await request(app).get('/users');
  expect(response.status).toBe(200);
    
});

/**OK */
it('should login a user (POST /users/login)', async () => {
  const hashedPassword = await bcrypt.hash('1234', 10);
  
  // Simuler un utilisateur avec tous les champs nécessaires pour créer le JWT
  const user = { 
    id: 4, 
    username: 'admin', 
    password: hashedPassword, 
    role: 'admin', 
    name: 'John', 
    lastname: 'Doe' 
  };
  
  const secret = '1983';
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, secret, { expiresIn: '1d' });

  // Simuler la base de données
  db.query.mockImplementation((sql, values, callback) => {
      callback(null, [user]);
  });

  // Envoyer la requête avec le mot de passe brut
  const response = await request(app)
    .post('/users/login')
    .send({ username: 'admin', password: '1234' });  // Mot de passe brut envoyé par l'utilisateur

  // Vérifier le statut de la réponse
  expect(response.status).toBe(201);

  // Vérifier que le token est bien renvoyé dans le body
  expect(response.body).toHaveProperty('token');
});




it('should delete an user (POST /users/delete)', async () => {
  const hashedPassword = await bcrypt.hash('1234', 10);
  // Simuler un utilisateur avec tous les champs nécessaires pour créer le JWT
  const user = { 
    id: 4 
  };
  // Simuler la base de données
  db.query.mockImplementation((sql, values, callback) => {
      callback(null, [user]);
  });
  // Envoyer la requête avec le mot de passe brut
  const response = await request(app)
    .post('/users/delete')
    .send({ id: 4});  // Mot de passe brut envoyé par l'utilisateur
  // Vérifier le statut de la réponse
  expect(response.status).toBe(201);
  // Vérifier que le token est bien renvoyé dans le body
  expect(response.body).toEqual({message : 'utilisateur supprimer'});
});
  });