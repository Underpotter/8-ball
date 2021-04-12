let Number2 = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Number2 = randint(1, 5)
    if (Number2 == 5) {
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
        basic.clearScreen()
    } else if (Number2 == 4) {
        basic.showIcon(IconNames.No)
        basic.pause(5000)
        basic.clearScreen()
    } else if (Number2 == 3) {
        basic.showString("Ask later. I'm tired.")
        basic.showIcon(IconNames.Asleep)
        basic.pause(5000)
        basic.clearScreen()
    } else if (Number2 == 2) {
        basic.showString("I don't know!")
        basic.showIcon(IconNames.Angry)
        basic.pause(5000)
        basic.clearScreen()
    } else {
        basic.showString("Good question!...I don't know.")
        basic.showIcon(IconNames.Silly)
        basic.pause(5000)
        basic.clearScreen()
    }
})
