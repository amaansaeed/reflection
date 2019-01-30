const { google } = require("googleapis")

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_API_CLIENT_ID ||
    "62439886064-lb446ambcm99ldl3dad57fvesnrau6h4.apps.googleusercontent.com",
  process.env.GOOGLE_API_CLIENT_SECRET || "xqslsS--vLAvGf4DWqIry9B-",
  process.env.GOOGLE_API_REDIRECT_URL || "http://localhost:8080"
)

module.exports = oauth2Client
