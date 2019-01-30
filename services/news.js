const axios = require("axios")

const news = axios.create({
  headers: {
    "X-Api-Key": process.env.NEWS_API_KEY
  },
  baseURL: process.env.NEWS_API_BASEURL
})

module.exports = news
