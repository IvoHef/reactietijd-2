let spel_gestart = false
basic.forever(function () {
    spel_gestart = false
    basic.pause(randint(2000, 6000))
    spel_gestart = true
    basic.showIcon(IconNames.Heart)
    while (spel_gestart) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            spel_gestart = false
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            spel_gestart = false
        }
    }
    basic.pause(3000)
    basic.clearScreen()
})
