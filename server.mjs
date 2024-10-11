import express from 'express'
import cors from 'cors'
import path from 'path'
const app = express();
const __dirname = path.resolve();
// app.use(cors())
 
import apiv1Router from './apiv1/index.mjs'
import apiv2Router from './apiv2/index.mjs'


app.use(express.json())



app.use('/api/v1',apiv1Router)
app.use('/api/v2',apiv2Router)




app.use('/static', express.static(path.join(__dirname, 'static')))


app.use('/', express.static(path.join(__dirname, 'public')))



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})





 
 

