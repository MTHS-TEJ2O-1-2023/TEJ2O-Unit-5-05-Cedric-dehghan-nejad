/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Cedriuc
 * Created on: Sep 2020
 * This program uses the RobotBit's Neopixels
*/

// variables
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

input.onButtonPressed(Button.A, function() {
    
    //Red
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    pause(1000)
    neopixelStrip.setPixelColor(0, NeoPixelColors.Black)
    neopixelStrip.show()

    // yellow
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    pause(1000)
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

    // green
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    pause(1000)
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
})
