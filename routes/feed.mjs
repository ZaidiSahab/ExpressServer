

import express from 'express';
let  router = express.Router()









//feed
router.get('api/v1/feed/:userId', (req, res, next) => {

    console.log("Signup");
    res.send("Post Created");

})

export default  router