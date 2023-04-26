input.onGesture(Gesture.Shake, function () {
    if (停止 == 0) {
        停止 = 1
        basic.showNumber(秒数)
    }
    if (停止 == 1) {
        停止 = 0
        basic.showNumber(秒数)
    }
})
input.onButtonPressed(Button.AB, function () {
    秒数 = 0
    停止 = 1
    basic.showString("Ready!!")
    basic.showNumber(秒数)
})
let 秒数 = 0
let 停止 = 0
停止 = 1
秒数 = 0
basic.showNumber(秒数)
basic.forever(function () {
    if (停止 == 0) {
        basic.pause(1000)
        秒数 += 1
        basic.showNumber(秒数)
    }
    basic.showNumber(秒数)
})
