function Pause_difficulty () {
    if (Moving == 0) {
        basic.pause(10)
    } else {
        if (Time_played < 30) {
            basic.pause(1000)
        } else if (Time_played >= 30 && Time_played <= 60) {
            basic.pause(800)
        } else if (Time_played > 60 && Time_played <= 90) {
            basic.pause(600)
        } else if (Time_played > 90 && Time_played <= 120) {
            basic.pause(500)
        } else if (Time_played > 120 && Time_played <= 150) {
            basic.pause(400)
        } else if (Time_played > 150 && Time_played <= 180) {
            basic.pause(350)
        } else if (Time_played > 180 && Time_played <= 210) {
            basic.pause(300)
        } else if (Time_played > 210) {
            basic.pause(250)
        }
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (Skib == 0) {
        if (Time_played >= 30 && Time_played <= 60) {
            Del_obs()
            basic.showNumber(1)
            basic.pause(500)
            basic.clearScreen()
            Time_played = 0
            Obs()
        } else if (Time_played > 60 && Time_played <= 90) {
            Time_played = 29
        } else if (Time_played > 90 && Time_played <= 120) {
            Time_played = 59
        } else if (Time_played > 120 && Time_played <= 150) {
            Time_played = 89
        } else if (Time_played > 150 && Time_played <= 180) {
            Time_played = 119
        } else if (Time_played > 180 && Time_played <= 210) {
            Time_played = 149
        } else if (Time_played > 210) {
            Level = 179
        }
    }
})
input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
function Obs () {
    Ob1 = game.createSprite(4, randint(0, 4))
    Ob2 = game.createSprite(4, randint(0, 4))
    Ob3 = game.createSprite(4, randint(0, 4))
    Ob4 = game.createSprite(4, randint(0, 4))
}
function Del_obs () {
    Ob1.delete()
    Ob2.delete()
    Ob3.delete()
    Ob4.delete()
}
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (Skib == 0) {
        Lol = 1
        Px = Bird.get(LedSpriteProperty.X)
        Py = Bird.get(LedSpriteProperty.Y)
        Ob1x = Ob1.get(LedSpriteProperty.X)
        Ob1y = Ob1.get(LedSpriteProperty.Y)
        Ob2x = Ob2.get(LedSpriteProperty.X)
        Ob2y = Ob2.get(LedSpriteProperty.Y)
        Ob3x = Ob3.get(LedSpriteProperty.X)
        Ob3y = Ob3.get(LedSpriteProperty.Y)
        Ob4x = Ob4.get(LedSpriteProperty.X)
        Ob4y = Ob4.get(LedSpriteProperty.Y)
        Bird.delete()
        Ob1.delete()
        Ob2.delete()
        Ob3.delete()
        Ob4.delete()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Skib == 0) {
        if (Time_played < 30) {
            Time_played = 29
        } else if (Time_played >= 30 && Time_played <= 60) {
            Time_played = 59
        } else if (Time_played > 60 && Time_played <= 90) {
            Time_played = 89
        } else if (Time_played > 90 && Time_played <= 120) {
            Time_played = 119
        } else if (Time_played > 120 && Time_played <= 150) {
            Time_played = 149
        } else if (Time_played > 150 && Time_played <= 180) {
            Time_played = 179
        } else if (Time_played > 180 && Time_played <= 210) {
            Time_played = 209
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    if (Skib == 0) {
        Lol = 0
        Bird = game.createSprite(Px, Py)
        Ob1 = game.createSprite(Ob1x, Ob1y)
        Ob2 = game.createSprite(Ob2x, Ob2y)
        Ob3 = game.createSprite(Ob3x, Ob3y)
        Ob4 = game.createSprite(Ob4x, Ob4y)
    }
})
function Moveobs () {
    Ob1.change(LedSpriteProperty.X, -1)
    Ob2.change(LedSpriteProperty.X, -1)
    Ob3.change(LedSpriteProperty.X, -1)
    Ob4.change(LedSpriteProperty.X, -1)
}
let Ob4y = 0
let Ob4x = 0
let Ob3y = 0
let Ob3x = 0
let Ob2y = 0
let Ob2x = 0
let Ob1y = 0
let Ob1x = 0
let Py = 0
let Px = 0
let Ob4: game.LedSprite = null
let Ob3: game.LedSprite = null
let Ob2: game.LedSprite = null
let Ob1: game.LedSprite = null
let Level = 0
let Skib = 0
let Moving = 0
let Lol = 0
let Bird: game.LedSprite = null
let Time_played = 0
basic.showNumber(1)
basic.pause(500)
basic.clearScreen()
Time_played = 0
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
Lol = 0
game.setScore(0)
game.setLife(3)
Obs()
basic.forever(function () {
    basic.pause(1000)
    Time_played += 1
})
basic.forever(function () {
    if (Lol == 0) {
        if (Time_played == 30) {
            Skib = 1
            game.pause()
            Del_obs()
            basic.showNumber(2)
            basic.pause(500)
            basic.clearScreen()
            Obs()
            game.resume()
            Skib = 0
        }
        if (Time_played == 60) {
            Skib = 1
            game.pause()
            Del_obs()
            basic.showNumber(3)
            basic.pause(500)
            basic.clearScreen()
            Obs()
            game.resume()
            Skib = 0
        }
        if (Time_played == 90) {
            Skib = 1
            game.pause()
            Del_obs()
            basic.showNumber(4)
            basic.pause(500)
            basic.clearScreen()
            Obs()
            game.resume()
            Skib = 0
        }
        if (Time_played == 120) {
            Skib = 1
            game.pause()
            Del_obs()
            basic.showNumber(5)
            basic.pause(500)
            basic.clearScreen()
            Obs()
            game.resume()
            Skib = 0
        }
        if (Time_played == 150) {
            Skib = 1
            game.pause()
            Del_obs()
            basic.showNumber(6)
            basic.pause(500)
            basic.clearScreen()
            Obs()
            game.resume()
            Skib = 0
        }
        if (Time_played == 180) {
            Skib = 1
            game.pause()
            Del_obs()
            basic.showNumber(7)
            basic.pause(500)
            basic.clearScreen()
            Obs()
            game.resume()
            Skib = 0
        }
        if (Time_played == 210) {
            Skib = 1
            game.pause()
            Del_obs()
            for (let index = 0; index < 4; index++) {
                basic.showIcon(IconNames.Skull)
                basic.pause(125)
                basic.clearScreen()
                basic.pause(125)
            }
            basic.clearScreen()
            Obs()
            game.resume()
            Skib = 0
        }
        for (let index = 0; index < 99; index++) {
            if (Ob1.isTouching(Ob2) || Ob1.isTouching(Ob3) || Ob1.isTouching(Ob4)) {
                Ob1.delete()
                Ob1 = game.createSprite(4, randint(0, 4))
                Moving = 0
            }
            if (Ob2.isTouching(Ob1) || Ob2.isTouching(Ob3) || Ob2.isTouching(Ob4)) {
                Ob2.delete()
                Ob2 = game.createSprite(4, randint(0, 4))
                Moving = 0
            }
            if (Ob3.isTouching(Ob1) || Ob3.isTouching(Ob2) || Ob3.isTouching(Ob4)) {
                Ob3.delete()
                Ob3 = game.createSprite(4, randint(0, 4))
                Moving = 0
            }
            if (Ob4.isTouching(Ob1) || Ob4.isTouching(Ob2) || Ob4.isTouching(Ob3)) {
                Ob4.delete()
                Ob4 = game.createSprite(4, randint(0, 4))
                Moving = 0
            }
        }
        if (Ob1.isTouching(Bird)) {
            game.removeLife(1)
            Del_obs()
            Obs()
        }
        if (Ob2.isTouching(Bird)) {
            game.removeLife(1)
            Del_obs()
            Obs()
        }
        if (Ob3.isTouching(Bird)) {
            game.removeLife(1)
            Del_obs()
            Obs()
        }
        if (Ob4.isTouching(Bird)) {
            game.removeLife(1)
            Del_obs()
            Obs()
        }
        if (Ob1.get(LedSpriteProperty.X) == 0) {
            game.addScore(1)
            Del_obs()
            Obs()
        }
        if (Ob2.get(LedSpriteProperty.X) == 0) {
            game.addScore(1)
            Del_obs()
            Obs()
        }
        if (Ob3.get(LedSpriteProperty.X) == 0) {
            game.addScore(1)
            Del_obs()
            Obs()
        }
        if (Ob4.get(LedSpriteProperty.X) == 0) {
            game.addScore(1)
            Del_obs()
            Obs()
        }
        if (Ob1.isTouching(Ob2) || Ob1.isTouching(Ob3) || Ob1.isTouching(Ob4)) {
            Ob1.delete()
            Ob1 = game.createSprite(4, randint(0, 4))
            Moving = 0
        } else if (Ob2.isTouching(Ob1) || Ob2.isTouching(Ob3) || Ob2.isTouching(Ob4)) {
            Ob2.delete()
            Ob2 = game.createSprite(4, randint(0, 4))
            Moving = 0
        } else if (Ob3.isTouching(Ob1) || Ob3.isTouching(Ob2) || Ob3.isTouching(Ob4)) {
            Ob3.delete()
            Ob3 = game.createSprite(4, randint(0, 4))
            Moving = 0
        } else if (Ob4.isTouching(Ob1) || Ob4.isTouching(Ob2) || Ob4.isTouching(Ob3)) {
            Ob4.delete()
            Ob4 = game.createSprite(4, randint(0, 4))
            Moving = 0
        } else {
            Moveobs()
            Moving = 1
        }
        Pause_difficulty()
    }
})
