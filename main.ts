input.onGesture(Gesture.TiltRight, function () {
	
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
input.onButtonEvent(Button.AB, input.buttonEventValue(ButtonEvent.Up), function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
function links () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 51)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 51)
}
function rechts () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 51)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 51)
}
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Hold), function () {
    radio.sendNumber(0)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Hold), function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.ScreenUp, function () {
	
})
input.onButtonEvent(Button.AB, input.buttonEventValue(ButtonEvent.Hold), function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
