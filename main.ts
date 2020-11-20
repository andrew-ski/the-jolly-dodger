namespace SpriteKind {
    export const Cannon = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    CannonBall = sprites.createProjectileFromSprite(img`
        b 
        `, Cannon, -100, -90)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    Cannon.destroy()
    if (Degrees > 0) {
        Degrees += -30
    }
    if (Degrees == 0) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ............cccc.............
            ...........cbccbc............
            ..........cbcddcbc...........
            bbbbbbbbbcbcdccdcbc..........
            ccccccccccbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 15) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ............cccc.............
            ...........cbccbc............
            bbbbb.....cbcddcbc...........
            ccccbbbbbcbcdccdcbc..........
            ....ccccccbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 30) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            bb..........cccc.............
            ccbbb......cbccbc............
            ..cccbb...cbcddcbc...........
            ....cccbbcbcdccdcbc..........
            .......cccbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 45) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .bb..........................
            .ccbb........................
            ...ccbb......................
            .....cbbb...cccc.............
            ......ccbb.cbccbc............
            ........cccbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 60) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ...bb........................
            ...cbbb......................
            ....ccbb.....................
            ......cbbb...................
            .......ccbbbcccc.............
            .........cccbccbc............
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 75) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .......b.....................
            .......cb....................
            ........cb...................
            .........cb..................
            ..........cb.................
            ...........cb................
            ............cb...............
            ............cccc.............
            ...........cbccbc............
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 90) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            ............cccc.............
            ...........cbccbc............
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 105) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ....................bc.......
            ...................bc........
            ..................bc.........
            .................bc..........
            ................bc...........
            ...............bc............
            ..............bc.............
            ............cccc.............
            ...........cbccbc............
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 120) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ........................b....
            ......................bbc....
            ....................bbcc.....
            ..................bbcc.......
            ............ccccbbcc.........
            ...........cbccbcc...........
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 120) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ....................bb.......
            ...................bcc.......
            ..................bc.........
            .................bc..........
            ............ccccbc...........
            ...........cbccbc............
            ..........cbcddcbcc..........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 135) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .......................bb....
            .....................bbcc....
            ...................bbcc......
            ............cccc.bbcc........
            ...........cbccbccc..........
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 150) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .........................bb..
            ......................bbbcc..
            ............cccc....bbccc....
            ...........cbccbc.bbcc.......
            ..........cbcddcbccc.........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 165) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ............cccc........bbb..
            ...........cbccbc...bbbbccc..
            ..........cbcddcbcbbcccc.....
            .........cbcdccdcbcc.........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 180) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ............cccc.............
            ...........cbccbc............
            ..........cbcddcbc...........
            .........cbcdccdcbcbbbbbbbb..
            .........cbcdccdcbccccccccc..
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    Cannon.destroy()
    if (Degrees < 180) {
        Degrees += 30
    }
    if (Degrees == 0) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ............cccc.............
            ...........cbccbc............
            ..........cbcddcbc...........
            bbbbbbbbbcbcdccdcbc..........
            ccccccccccbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 15) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ............cccc.............
            ...........cbccbc............
            bbbbb.....cbcddcbc...........
            ccccbbbbbcbcdccdcbc..........
            ....ccccccbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 30) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            bb..........cccc.............
            ccbbb......cbccbc............
            ..cccbb...cbcddcbc...........
            ....cccbbcbcdccdcbc..........
            .......cccbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 45) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .bb..........................
            .ccbb........................
            ...ccbb......................
            .....cbbb...cccc.............
            ......ccbb.cbccbc............
            ........cccbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 60) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ...bb........................
            ...cbbb......................
            ....ccbb.....................
            ......cbbb...................
            .......ccbbbcccc.............
            .........cccbccbc............
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 75) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .......b.....................
            .......cb....................
            ........cb...................
            .........cb..................
            ..........cb.................
            ...........cb................
            ............cb...............
            ............cccc.............
            ...........cbccbc............
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 90) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            .............bc..............
            ............cccc.............
            ...........cbccbc............
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 105) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ....................bc.......
            ...................bc........
            ..................bc.........
            .................bc..........
            ................bc...........
            ...............bc............
            ..............bc.............
            ............cccc.............
            ...........cbccbc............
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 120) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ........................b....
            ......................bbc....
            ....................bbcc.....
            ..................bbcc.......
            ............ccccbbcc.........
            ...........cbccbcc...........
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 120) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ....................bb.......
            ...................bcc.......
            ..................bc.........
            .................bc..........
            ............ccccbc...........
            ...........cbccbc............
            ..........cbcddcbcc..........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 135) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .......................bb....
            .....................bbcc....
            ...................bbcc......
            ............cccc.bbcc........
            ...........cbccbccc..........
            ..........cbcddcbc...........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 150) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .........................bb..
            ......................bbbcc..
            ............cccc....bbccc....
            ...........cbccbc.bbcc.......
            ..........cbcddcbccc.........
            .........cbcdccdcbc..........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 165) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ............cccc........bbb..
            ...........cbccbc...bbbbccc..
            ..........cbcddcbcbbcccc.....
            .........cbcdccdcbcc.........
            .........cbcdccdcbc..........
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    } else if (Degrees == 180) {
        Cannon = sprites.create(img`
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            .............................
            ............cccc.............
            ...........cbccbc............
            ..........cbcddcbc...........
            .........cbcdccdcbcbbbbbbbb..
            .........cbcdccdcbccccccccc..
            .........cbbcddcbbc..........
            .........ccbbccbbcc..........
            `, SpriteKind.Cannon)
    }
})
let CannonBall: Sprite = null
let Cannon: Sprite = null
let Degrees = 0
scene.setBackgroundColor(9)
let Ship = sprites.create(img`
    ..........cccc.............
    .........cbccbc............
    ........cbcddcbc...........
    .......cbcdccdcbc..........
    .......cbcdccdcbc..........
    .......cbbcddcbbc..........
    .......ccbbccbbcc..........
    cccccccbccccccccbcccccccccc
    cbbbbbbcbbbbbbbbcbbbbbbbbbc
    cbbbbbbbbbbbbbbbbbbbbbbbbcc
    cbcccccccccccccccccccccbcc.
    cbbbbbbbbbbbbbbbbbbbbbbcc..
    cbbcccccccccccccccccbbcc...
    ccbbbbbbbbbbbbbbbbbbbcc....
    .ccccccccccccccccccccc.....
    `, SpriteKind.Player)
controller.player1.moveSprite(Ship)
Degrees = 0
Cannon = sprites.create(img`
    .............................
    .............................
    .............................
    .............................
    .............................
    .............................
    .............................
    .............................
    .............................
    .............................
    .............................
    .............................
    .............................
    ............cccc.............
    ...........cbccbc............
    ..........cbcddcbc...........
    bbbbbbbbbcbcdccdcbc..........
    ccccccccccbcdccdcbc..........
    .........cbbcddcbbc..........
    .........ccbbccbbcc..........
    `, SpriteKind.Cannon)
game.onUpdate(function () {
    Cannon.setPosition(Ship.x - 1, Ship.top + -3)
})
