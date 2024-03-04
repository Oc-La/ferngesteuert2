input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(1)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        links()
    } else if (receivedNumber == 1) {
        rechts()
    } else if (receivedNumber == 2) {
        geradeaus()
    } else if (receivedNumber == 3) {
        anhalten()
    }
})
function geradeaus () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
}
function anhalten () {
    maqueen.motorStop(maqueen.Motors.All)
}
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(2)
})
function links () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
}
function rechts () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
}
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(3)
})
radio.setGroup(1)
maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
