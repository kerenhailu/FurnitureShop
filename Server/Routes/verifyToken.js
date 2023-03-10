const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.verifyToken;
  if (authHeader) {
    jwt.verify(token, process.env.JWT.SEC, (err, user) => {
      if (err) return res.status(401).json("token is not valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};
const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("you are not alowed to do that!");
        }
    })
}
module.exports = { verifyToken,verifyTokenAndAuthorization };
