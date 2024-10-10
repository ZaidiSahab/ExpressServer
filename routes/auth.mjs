import express from 'express';
let  router = express.Router()





router.get('/api/v1/login', (req, res) => {
    console.log('This is login Page!', new Date())
    res.send('login Page\n' + new Date())

})

router.get('/signUp', (req, res) => {
    console.log('This is signUp Page!', new Date())
    res.send('signUp Page\n' + new Date())

})

export default  router