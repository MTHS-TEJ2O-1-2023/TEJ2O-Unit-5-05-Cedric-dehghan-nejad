/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

  input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Happy)

// Red
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.show()
  pause(1000)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  pause(1000)

// Yellow
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
  neopixelStrip.show()
  pause(1000)
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()

// Green
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.show()
  pause(1000)
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  pause(1000)

  basic.showIcon(IconNames.Happy)
})
