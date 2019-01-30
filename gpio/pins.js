const pinsRaw = require("./active_gpio_pins.json")

const pins = {}

pinsRaw.map((pin, i) => {
  pins[`switch_${i + 1}`] = {
    ...pin,
    isOn: false,
    switchNumber: i + 1
  }
})

module.exports = pins
