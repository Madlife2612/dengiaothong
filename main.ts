basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let Green = 0; Green <= 10; Green++) {
        basic.showNumber(10 - Green)
        basic.pause(1000)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    for (let Yellow = 0; Yellow <= 3; Yellow++) {
        basic.showNumber(3 - Yellow)
        basic.pause(1000)
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    for (let Red = 0; Red <= 13; Red++) {
        basic.showNumber(13 - Red)
        basic.pause(1000)
    }
})
