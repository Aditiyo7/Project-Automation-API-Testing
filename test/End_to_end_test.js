const { expect } = require('chai');
const { addUSer, getUserProfile, addContact, getContact, updateContact } = require('../api/object')
const testData  = require('../test-data/patch_object.json')
const globalVariable = require('../globalVariable.json')


describe ('End to End Test', () => {
    
    it('Add User', async () => {
        const response = await addUSer(testData.registerUser)
        console.log(response.body)
        expect(response.status).equal(201)
        expect(response.body)
        globalVariable.token = response.body.token
    })

    it('Get User Profile', async () => {
        const response = await getUserProfile()
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })
    
    it('Add Contact', async () => {
        const response = await addContact(testData.addContactUser)
        console.log(response.body)
        expect(response.status).equal(201)
        expect(response.body)
        globalVariable._id = response.body._id
    })

    it('Get Contact', async () => {
        const response = await getContact()
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })

    it('Update Contact', async () => {
        const response = await updateContact(testData.updateContactUser)
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })

    it('Get Contact', async () => {
        const response = await getContact()
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })

})