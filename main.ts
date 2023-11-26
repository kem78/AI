let 신호 = ""
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate19200
)
basic.forever(function () {
    신호 = serial.readString()
    if (신호 == "1") {
        basic.showIcon(IconNames.Scissors)
    }
    if (신호 == "2") {
        basic.showIcon(IconNames.Ghost)
    }
    if (신호 == "3") {
        basic.showIcon(IconNames.Pitchfork)
    }
})
