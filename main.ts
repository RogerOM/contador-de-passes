input.onGesture(Gesture.Shake, function () {
	
})
let passes = 0
basic.forever(function () {
    basic.showNumber(passes)
    if (input.acceleration(Dimension.X) > 1300) {
        passes += 1
    }
})
