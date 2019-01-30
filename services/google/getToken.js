const readline = require("readline")
const fs = require("fs")
const oAuth2Client = require("./oauth2Client")

const TOKEN_PATH = __dirname + "/" + "token.json"

//  Sets up the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = ["https://www.googleapis.com/auth/calendar"]

const url = oAuth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: "offline",

  // If you only need one scope you can pass it as a string
  scope: scopes
})

const getToken = () => {
  return new Promise(async resolve => {
    fs.readFile(TOKEN_PATH, async (err, data) => {
      if (err) {
        console.log("Authorize this app by visiting this url:", url)

        rl.question("Enter the code from that page here: ", code => {
          rl.close()
          oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error("Error retrieving access token", err)

            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
              if (err) console.error(err)
              console.log("Token stored to", TOKEN_PATH)
            })

            resolve(token)
          })
        })
      } else {
        console.log("Found token on file")
        resolve(data)
      }
    })
  })
}

module.exports = getToken
