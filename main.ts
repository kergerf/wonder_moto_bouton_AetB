input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(30, 30)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(-30, -30)
})
