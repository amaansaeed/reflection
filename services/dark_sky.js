const axios = require("axios")

const darkSky = axios.create({
  headers: { "Access-Control-Allow-Origin": "*" },
  baseURL: `${process.env.DARKSKY_API_BASEURL}/${process.env.DARKSKY_API_KEY}`,
  params: { units: "ca" }
})

module.exports = darkSky
