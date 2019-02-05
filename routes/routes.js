const express = require('express')
const router = express.Router()

//  Middelware
const checkHeader = require('../middleware/checkHeader')

//  API services
const darkSky = require('../services/darkSky')
const news = require('../services/news')

//  SmartHome services
const rpio = require('../gpio/rpio_controller')
const pins = require('../gpio/pins')

router.get('/weather', checkHeader, async (req, res) => {
  const locationToronto = { lat: 43.6532, lon: -79.3832 }
  const { data } = await darkSky.get(
    `/${locationToronto.lat},${locationToronto.lon}`
  )
  res.json(data)
})

router.get('/calendar', checkHeader, async (req, res) => {
  res.send('calendar request recieved')
})

router.get('/news', checkHeader, async (req, res) => {
  const { data } = await news.get('/top-headlines', {
    params: { sources: 'the-globe-and-mail' }
  })
  res.send(data)
})

router.get('/smart-home/relays', checkHeader, async (req, res) => {
  let preppedPins = []
  for (let key in pins) {
    preppedPins.push(pins[key])
  }

  res.send(preppedPins)
})

router.post('/smart-home/relay/:relay', checkHeader, async (req, res) => {
  const relay = `switch_${req.params.relay}`
  const pin = pins[relay]
  res.send(pin)
})

module.exports = router
