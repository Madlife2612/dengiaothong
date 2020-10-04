function RED () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    for (let Red2 = 0; Red2 <= 13; Red2++) {
        basic.showNumber(13 - Red2)
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
    for (let Green2 = 0; Green2 <= 10; Green2++) {
        let Green = 0
        basic.showNumber(10 - Green)
        basic.pause(1000)
    }
}
function RED2 () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    for (let Red2 = 0; Red2 <= 13; Red2++) {
        basic.showNumber(13 - Red2)
        basic.pause(1000)
    }
}
function YELLOW2 () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    for (let Yellow2 = 0; Yellow2 <= 3; Yellow2++) {
        let Yellow = 0
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
    GREEN()
    YELLOW()
    RED()
    GREEN2()
    YELLOW2()
    RED2()
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
})
basic.forever(function () {
    if (0 == 0) {
    	
    } else {
    	
    }
})
