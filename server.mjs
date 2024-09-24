console.log("Server side javascript")

import express from 'express'
const app = express() 

app.get('/', (req, res) => {
    console.log('This is Hello World!', new Date())
    res.send('Hello World!' + new Date())
})

app.get('/profile', (req, res) => {
    console.log('This is Profile Page!', new Date())
    res.send('Profile Page\n' + new Date())

})




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})