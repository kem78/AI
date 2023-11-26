serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
basic.forever(function () {
    serial.writeString("")
    if (serial.readString() == "1") {
        basic.showIcon(IconNames.Scissors)
    }
    if (serial.readString() == "2") {
        basic.showIcon(IconNames.Ghost)
    }
    if (serial.readString() == "3") {
        basic.showIcon(IconNames.Pitchfork)
    }
})
