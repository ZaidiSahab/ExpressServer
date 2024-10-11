

import express from 'express';
let  router = express.Router()





//feed
router.get('/feed/:userId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})

export default  router