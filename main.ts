/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack
 * Created on: Nov 2025
 * This program turns the microbit into a working radio
*/

// variables
let distanceToObject: number = 0

// setup
radio.setGroup(12)
basic.showIcon(IconNames.Happy)

// recieving
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})

// getting distance
while (true) {
    distanceToObject = sonar.ping(
        DigitalPin.P12,
        DigitalPin.P13,
        PingUnit.Centimeters
    )

    // if distance is less than 5
    if (distanceToObject < 5) {
        basic.clearScreen()
        basic.showNumber(distanceToObject)
        radio.sendString("Too close")
        basic.pause(1000)
    } else {
        basic.clearScreen()
        basic.showNumber(distanceToObject)
        radio.sendString("")
        basic.pause(1000)
    }
}
