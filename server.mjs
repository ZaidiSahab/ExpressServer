import express from 'express'
import cors from 'cors'
import path from 'path'
const app = express();
const __dirname = path.resolve();
// app.use(cors())

import postRouter from './routes/post.mjs'
import commentRouter from './routes/comments.mjs'
import feedRouter from './routes/feed.mjs'
import authRouter from './routes/auth.mjs'


app.use(express.json())



app.use(authRouter)



app.use((req, res, next) => {
    if (token === 'valid') {
        next();

    }
    else {
        res.send({ message: "token invalid" })
    }

})


app.use(postRouter)
app.use(commentRouter)
app.use(feedRouter)







app.post("/api/v1/weather", (req, res, next) => {
    console.log('req.body', req.body)

    res.send({

        maxTemp: 54,
        minTemp: 29,
        humidity: 21
    })

})





app.use('/static', express.static(path.join(__dirname, 'static')))


app.use('/', express.static(path.join(__dirname, 'public')))



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})