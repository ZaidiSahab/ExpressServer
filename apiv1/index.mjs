import express from 'express';
let  router = express.Router()

import postRouter from './routes/post.mjs'
import commentRouter from './routes/comments.mjs'
import feedRouter from './routes/feed.mjs'
import authRouter from './routes/auth.mjs'






router.use(authRouter)



router.use((req, res, next) => {

    const token ='valid';
    if (token === 'valid') {
        next();

    }
    else {
        res.send({ message: "token invalid" })
    }

})

router.use(postRouter)
router.use(commentRouter)
router.use(feedRouter)



 

 




router.post("/weather", (req, res, next) => {
    console.log('req.body', req.body)

    res.send({
apiVersion:"v1 api",
        maxTemp: 54,
        minTemp: 29,
        humidity: 21
    })

})


export default router