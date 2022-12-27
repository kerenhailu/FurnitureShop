const router=require("express").Router();
const cartActions = require('../Controllers/cart');

router.get('/', cartActions.getAllCart);
router.get('/:id', cartActions.getCartById);
router.post('/register', cartActions.postCart);
router.put('/register', cartActions.putCart);
router.delete('/register', cartActions.deleteCart);

module.exports=router