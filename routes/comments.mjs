


import express from 'express';
let router = express.Router()















//FOR COMMENTS API'S

router.get('api/v1/comment/:postId/:commentId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})


router.get('api/v1/comments/:postId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})


router.put('api/v1/comment/:postId/:commentId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})


router.delete('api/v1/comment/:postId/:commentId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})


//feed
router.get('api/v1/feed/:userId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})

export default  router