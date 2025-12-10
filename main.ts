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
