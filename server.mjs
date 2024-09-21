console.log("Server side javascript")

import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('This is Hello World!', new Date())
    res.send('Hello World!' + new Date())
})

app.get('/profile', (req, res) => {
    console.log('This is Profile Page!', new Date())
    res.send('Profile Page\n' + new Date())

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})