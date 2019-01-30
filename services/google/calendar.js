const { google } = require("googleapis")
const oauth2Client = require("./oauth2Client")
const getToken = require("./getToken")

const query = {
  calendarId: "primary",
  timeMin: new Date().toISOString(),
  maxResults: 10,
  singleEvents: true,
  orderBy: "startTime"
}

async function main() {
  const tokens = await getToken()
  oauth2Client.setCredentials(tokens)

  const calendar = google.calendar({ version: "v3", oauth2Client })

  calendar.events.list(query, (err, response) => {
    if (err) return console.log("The API returned an error: " + err)
    const events = response.data.items
    if (events.length) {
      console.log("Upcoming 10 events:")
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date
        console.log(`${start} - ${event.summary}`)
      })
    } else {
      console.log("No upcoming events found.")
    }
  })
}

main()
