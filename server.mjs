import express from 'express'
import cors from 'cors'
import path from 'path'
const app = express()
const __dirname = path.resolve();
// app.use(cors())

app.use(express.json())


app.get('/profile', (req, res) => {
    console.log('This is Profile Page!', new Date())
    res.send('Profile Page\n' + new Date())

})


app.get('/getHtmlFile', (req, res) => {
    // Use path.join to get the absolute path to the HTML file
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});


app.use('/static', express.static(path.join(__dirname, 'static')))


app.use('/', express.static(path.join(__dirname, 'public')))



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})