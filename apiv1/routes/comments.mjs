


import express from 'express';
let router = express.Router()









//FOR COMMENTS API'S

router.get('/comment/:postId/:commentId', (req, res, next) => {

    console.log("Signup");
    res.send("This is your comment");

})


router.get('/comments/:postId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})


router.put('/comment/:postId/:commentId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})


router.delete('/comment/:postId/:commentId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})



export default  router