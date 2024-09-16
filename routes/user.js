const express = require('express');
const router = express.Router();
router.use(express.json())
const usercontroller = require('../controllers/usercontroller');

router.get('/users', (req, res) => {
    usercontroller.getUser(req,res);
})


router.get('/user/:id',(req,res)=>{
    usercontroller.getParticularUser(req,res)
})

module.exports = router;
