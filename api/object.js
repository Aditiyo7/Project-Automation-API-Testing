const supertest = require('supertest');
const {baseURL} = require('../globalVariable')
const globalVariable = require('../globalVariable.json')

const addUSer = (body) => supertest(baseURL)
    .post('/users')
    .send(body)

const getUserProfile = () => supertest(baseURL)
     .get('/users/me')
     .set('Authorization','Bearer '+ globalVariable.token)

const addContact = (body) => supertest(baseURL)
     .post('/contacts')
     .send(body)
     .set('Authorization','Bearer '+ globalVariable.token)

const getContact = () => supertest(baseURL)
     .get('/contacts')
     .set('Authorization','Bearer '+ globalVariable.token)

const updateContact = (body) => supertest(baseURL)
     .patch('/contacts/'+ globalVariable._id)
     .send(body)
     .set('Authorization','Bearer '+ globalVariable.token)
     


module.exports = {
    addUSer,
    getUserProfile,
    addContact,
    getContact,
    updateContact
}