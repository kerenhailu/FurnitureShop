const router=require("express").Router();
const productActions = require('../Controllers/product');

router.get('/', productActions.getAllClothing);
router.get('/:id', productActions.getClothingById);
router.post('/', productActions.postClothing);
router.put('/:id', productActions.putClothing);
router.delete('/:id', productActions.deleteClothing);

module.exports=router