
const jwt = require("jsonwebtoken");

module.exports=  function authenticateToken(req, res, next) {
    // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[2]
  if (token == null) return res.sendStatus(401) // if there isn't any token
     console.log(`%%%%${token}`)
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.status(403).json(err)
      req.user = user
      next() // pass the execution off to whatever request the client intended
    })
  }
