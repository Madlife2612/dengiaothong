function RED () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    for (let Red = 0; Red <= 13; Red++) {
        basic.showNumber(13 - Red)
        basic.pause(1000)
    }
}
function GREEN () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let Green = 0; Green <= 10; Green++) {
        basic.showNumber(10 - Green)
        basic.pause(1000)
    }
}
function GREEN2 () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    for (let Green = 0; Green <= 10; Green++) {
        basic.showNumber(10 - Green)
        basic.pause(1000)
    }
}
function RED2 () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    for (let Red = 0; Red <= 13; Red++) {
        basic.showNumber(13 - Red)
        basic.pause(1000)
    }
}
function YELLOW2 () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    for (let Yellow = 0; Yellow <= 3; Yellow++) {
        basic.showNumber(3 - Yellow)
        basic.pause(1000)
    }
}
function YELLOW () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    for (let Yellow = 0; Yellow <= 3; Yellow++) {
        basic.showNumber(3 - Yellow)
        basic.pause(1000)
    }
}
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
    GREEN()
    YELLOW()
    RED()
    GREEN2()
    YELLOW2()
    RED2()
})
