const router=require("express").Router();
const usersActions = require('../Controllers/user');
const {verifyToken,verifyTokenAndAuthorization}=require("./verifyToken")

router.get('/', usersActions.getAllUsers);
router.post('/login', usersActions.login);
router.post('/register', usersActions.register);
router.put('/:id',verifyToken,(req,res)=>{
    if(req.body.password){
req.body.password=""
    }
} );

module.exports=router