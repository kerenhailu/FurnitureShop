const router=require("express").Router();
const productActions = require('../Controllers/furniture');

router.get('/', productActions.getAllFurniture);
router.get('/:id', productActions.getFurnitureById);
router.post('/', productActions.postFurniture);
router.put('/:id', productActions.putFurniture);
router.delete('/:id', productActions.deleteFurniture);

module.exports=router