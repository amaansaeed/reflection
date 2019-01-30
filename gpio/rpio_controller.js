const rpio = require("rpio")
const pins = require("./pins")

const options = process.env.ENVIRONMENT === "development" ? { mock: "raspi-3" } : null

/*
 * Explicitly request mock mode to avoid warnings when running on known
 * unsupported hardware, or to test scripts in a different hardware
 * environment (e.g. to check pin settings).
 */
rpio.init(options)

for (let key in pins) {
  //   console.log(pins[key])
  rpio.open(pins[key].gpioNumber, rpio.OUTPUT, rpio.LOW)
  console.log(`Pin ${pins[key].gpioNumber} initialized as Switch ${pins[key].switchNumber}`)
}

module.exports = rpio
