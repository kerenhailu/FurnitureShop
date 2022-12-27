const Furniture =require("../Models/Furniture");

const getAllFurniture = async (req, res) => {
  await Furniture.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const getFurnitureById = async (req, res) => {
  await Furniture.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const postFurniture = async (req, res) => {
  await Furniture.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const putFurniture = async (req, res) => {
    Furniture.findByIdAndUpdate(req.params.id, req.body,{new:true}) 
.then(result=>{
res.status(200).json(result)
})
.catch(err=>{
  res.status(500).json({massage:"update is failed"})
})
};

const deleteFurniture = async (req, res) => {
  await Furniture.remove(req.body);
  await Furniture.find()
 .then(result=>{res.status(200).json(result)})
 .catch(err=>{res.status(500).json({massage:"delete is failed"})})
};

module.exports = {
  getAllFurniture,
  getFurnitureById,
  postFurniture,
  putFurniture,
  deleteFurniture,
};