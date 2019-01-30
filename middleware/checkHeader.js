module.exports = checkHeader = (req, res, next) => {
  if (req.headers["x-requested-by"] !== "reflection") {
    res.status(403).send("Sorry please use the reflections client app...")
  } else {
    next()
  }
}
