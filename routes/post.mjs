import express from 'express';
let router = express.Router()













// Get:/api/v1/post/:userId/:postId

router.get('/api/v1/post/:userId/:postId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})

// Get:/api/v1/post/:userId/:postId

router.get('/api/v1/posts/:userId/:postId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})


// Post:/api/v1/post

router.post('/api/v1/post', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})

// Put: /api/v1/post/:userId/:postId
router.put('/api/v1/post/:userId/:postId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})
//Delete: /api/v1/post/:userId/:postId
router.delete('/api/v1/post/:userId/:postId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})





export default  router