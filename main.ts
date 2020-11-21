namespace SpriteKind {
    export const Cannon = SpriteKind.create()
}
function fiveCannons () {
    Ship = sprites.create(img`
        ...........ee...........
        ..........eeee..........
        .........ee44ee.........
        ....bb..eee44eee..bb....
        ....bbbeee4ee4eeebbb....
        .....bbbe4eeee4ebbb.....
        .....ebbbf4ee4fbbbe.....
        ....eeebffeeeeffbeee....
        ...eee4ffeeeeeeff4eee...
        ..eee4e4eeeeeeee4e4eee..
        ..ee4eeeeeeeeeeeeee4ee..
        ..e4ee44eeeeeeeeeeee4e..
        ..e4e4e44eeeee44444e4e..
        ..e4e44e4eeeeee444d44e..
        ..e4ee44eeeeeeee4ddd4e..
        ..e4eeeeeeeeeeee4ded4e..
        ..e4eeeeeeffffee4edede..
        2121212121feef1212121212
        fffffffffffeefffffffffff
        ..e4eeeeeeffffee4ded4d..
        ..e4eeeeeeeeeee44ede4d..
        ..e4eeeeeeeeeeee4dedde..
        ..e4eeeeeeeeeeeeedde4e..
        ..e4e4eeeeeeeeeeee4e4e..
        ..e4ffeeeeeeeeeeeeff4e..
        bbbbfeeeeeeeeeeeeeefbbbb
        bbbbfeeeeeeeeeeeeeefbbbb
        ..e4ffeeeeeeeeeeeeff4e..
        ..e4e4eee4feef4eee4e4e..
        ..e4eeeeeeffffeeeeee4e..
        ..ee4444444bb4444444ee..
        ...eeeeeeeebbeeeeeeee...
        ...........bb...........
        ...........bb...........
        `, SpriteKind.Player)
    animation.runImageAnimation(
    Ship,
    [img`
        ............1..1............
        ...........1....1...........
        ............................
        .........1........1.........
        ........1....ee....1........
        .......1....eeee....1.......
        ...........ee44ee...........
        ......bb..eee44eee..bb......
        ....1.bbbeee4ee4eeebbb.1....
        ...1...bbbe4eeee4ebbb...1...
        ..1....ebbbf4ee4fbbbe....1..
        ......eeebffeeeeffbeee......
        .....eee4ffeeeeeeff4eee.....
        ....eee4e4eeeeeeee4e4eee....
        ..1.ee4eeeeeeeeeeeeee4ee.1..
        ..1.e4ee44eeeeeeeeeeee4e.1..
        ..1.e4e4e44eeeee44444e4e.1..
        ....e4e44e4eeeeee444d44e....
        ....e4ee44eeeeeeee4ddd4e....
        ..1.e4eeeeeeeeeeee4ded4e.1..
        ..1.e4eeeeeeffffee4edede.1..
        ..2121212121feef1212121212..
        ..fffffffffffeefffffffffff..
        ....e4eeeeeeffffee4ded4d....
        ....e4eeeeeeeeeee44ede4d....
        ....e4eeeeeeeeeeee4dedde....
        ..1.e4eeeeeeeeeeeeedde4e.1..
        ..1.e4e4eeeeeeeeeeee4e4e.1..
        ..1.e4ffeeeeeeeeeeeeff4e.1..
        ..bbbbfeeeeeeeeeeeeeefbbbb..
        ..bbbbfeeeeeeeeeeeeeefbbbb..
        ....e4ffeeeeeeeeeeeeff4e....
        ..1.e4e4eee4feef4eee4e4e.1..
        ..1.e4eeeeeeffffeeeeee4e.1..
        ..1.ee4444444bb4444444ee.1..
        .....eeeeeeeebbeeeeeeee.....
        .............bb.............
        .............bb.............
        ..1......................1..
        ..1......................1..
        `,img`
        .............11.............
        ............................
        ...........1....1...........
        ............................
        .........1...ee....1........
        ............eeee............
        ......1....ee44ee....1......
        .....1bb..eee44eee..bb1.....
        ......bbbeee4ee4eeebbb......
        ...1...bbbe4eeee4ebbb...1...
        .......ebbbf4ee4fbbbe.......
        ..1...eeebffeeeeffbeee...1..
        ..1..eee4ffeeeeeeff4eee..1..
        ..1.eee4e4eeeeeeee4e4eee.1..
        ....ee4eeeeeeeeeeeeee4ee....
        ....e4ee44eeeeeeeeeeee4e....
        ....e4e4e44eeeee44444e4e....
        ..1.e4e44e4eeeeee444d44e.1..
        ..1.e4ee44eeeeeeee4ddd4e.1..
        ..1.e4eeeeeeeeeeee4ded4e.1..
        ....e4eeeeeeffffee4edede....
        ..2121212121feef1212121212..
        ..fffffffffffeefffffffffff..
        ..1.e4eeeeeeffffee4ded4d.1..
        ..1.e4eeeeeeeeeee44ede4d.1..
        ..1.e4eeeeeeeeeeee4dedde.1..
        ....e4eeeeeeeeeeeeedde4e....
        ....e4e4eeeeeeeeeeee4e4e....
        ....e4ffeeeeeeeeeeeeff4e....
        ..bbbbfeeeeeeeeeeeeeefbbbb..
        ..bbbbfeeeeeeeeeeeeeefbbbb..
        ..1.e4ffeeeeeeeeeeeeff4e.1..
        ....e4e4eee4feef4eee4e4e....
        ....e4eeeeeeffffeeeeee4e....
        ....ee4444444bb4444444ee....
        ..1..eeeeeeeebbeeeeeeee..1..
        ..1..........bb..........1..
        ..1..........bb..........1..
        ............................
        ............................
        `,img`
        ............1..1............
        ............................
        ..........1......1..........
        ............................
        ........1....ee....1........
        .......1....eeee....1.......
        ...........ee44ee...........
        ......bb..eee44eee..bb......
        ....1.bbbeee4ee4eeebbb.1....
        ...1...bbbe4eeee4ebbb...1...
        ..1....ebbbf4ee4fbbbe....1..
        ......eeebffeeeeffbeee......
        .....eee4ffeeeeeeff4eee.....
        ....eee4e4eeeeeeee4e4eee....
        ..1.ee4eeeeeeeeeeeeee4ee.1..
        ..1.e4ee44eeeeeeeeeeee4e.1..
        ..1.e4e4e44eeeee44444e4e.1..
        ....e4e44e4eeeeee444d44e....
        ....e4ee44eeeeeeee4ddd4e....
        ....e4eeeeeeeeeeee4ded4e....
        ..1.e4eeeeeeffffee4edede.1..
        ..2121212121feef1212121212..
        ..fffffffffffeefffffffffff..
        ....e4eeeeeeffffee4ded4d....
        ..1.e4eeeeeeeeeee44ede4d.1..
        ....e4eeeeeeeeeeee4dedde....
        ..1.e4eeeeeeeeeeeeedde4e.1..
        ..1.e4e4eeeeeeeeeeee4e4e.1..
        ..1.e4ffeeeeeeeeeeeeff4e.1..
        ..bbbbfeeeeeeeeeeeeeefbbbb..
        ..bbbbfeeeeeeeeeeeeeefbbbb..
        ....e4ffeeeeeeeeeeeeff4e....
        ..1.e4e4eee4feef4eee4e4e.1..
        ..1.e4eeeeeeffffeeeeee4e.1..
        ..1.ee4444444bb4444444ee.1..
        .....eeeeeeeebbeeeeeeee.....
        ..1..........bb..........1..
        .............bb.............
        ..1......................1..
        ..1......................1..
        `,img`
        ............................
        ...........1....1...........
        ............................
        .........1........1.........
        ........1....ee....1........
        ............eeee............
        ......1....ee44ee....1......
        .....1bb..eee44eee..bb1.....
        ......bbbeee4ee4eeebbb......
        .......bbbe4eeee4ebbb.......
        .......ebbbf4ee4fbbbe.......
        ..1...eeebffeeeeffbeee...1..
        ..1..eee4ffeeeeeeff4eee..1..
        ..1.eee4e4eeeeeeee4e4eee.1..
        ....ee4eeeeeeeeeeeeee4ee....
        ....e4ee44eeeeeeeeeeee4e....
        ....e4e4e44eeeee44444e4e....
        ..1.e4e44e4eeeeee444d44e.1..
        ..1.e4ee44eeeeeeee4ddd4e.1..
        ..1.e4eeeeeeeeeeee4ded4e.1..
        ....e4eeeeeeffffee4edede....
        ..2121212121feef1212121212..
        ..fffffffffffeefffffffffff..
        ..1.e4eeeeeeffffee4ded4d.1..
        ..1.e4eeeeeeeeeee44ede4d.1..
        ..1.e4eeeeeeeeeeee4dedde.1..
        ....e4eeeeeeeeeeeeedde4e....
        ....e4e4eeeeeeeeeeee4e4e....
        ....e4ffeeeeeeeeeeeeff4e....
        ..bbbbfeeeeeeeeeeeeeefbbbb..
        ..bbbbfeeeeeeeeeeeeeefbbbb..
        ..1.e4ffeeeeeeeeeeeeff4e.1..
        ....e4e4eee4feef4eee4e4e....
        ....e4eeeeeeffffeeeeee4e....
        ....ee4444444bb4444444ee....
        ..1..eeeeeeeebbeeeeeeee..1..
        ..1..........bb..........1..
        ..1..........bb..........1..
        ............................
        ............................
        `],
    200,
    true
    )
}
function fourCannons () {
    Ship = sprites.create(img`
        ...........ee...........
        ..........eeee..........
        .........ee44ee.........
        ....bb..eee44eee..bb....
        ....bbbeee4ee4eeebbb....
        .....bbbe4eeee4ebbb.....
        .....ebbbf4ee4fbbbe.....
        ....eeebffeeeeffbeee....
        ...eee4ffeeeeeeff4eee...
        ..eee4e4eeeeeeee4e4eee..
        ..ee4eeeeeeeeeeeeee4ee..
        ..e4ee44eeeeeeeeeeee4e..
        ..e4e4e44eeeee44444e4e..
        ..e4e44e4eeeeee444d44e..
        ..e4ee44eeeeeeee4ddd4e..
        ..e4eeeeeeeeeeee4ded4e..
        ..e4eeeeeeffffee4edede..
        2121212121feef1212121212
        fffffffffffeefffffffffff
        ..e4eeeeeeffffee4ded4d..
        ..e4eeeeeeeeeee44ede4d..
        ..e4eeeeeeeeeeee4dedde..
        ..e4eeeeeeeeeeeeedde4e..
        ..e4e4eeeeeeeeeeee4e4e..
        ..e4ffeeeeeeeeeeeeff4e..
        bbbbfeeeeeeeeeeeeeefbbbb
        bbbbfeeeeeeeeeeeeeefbbbb
        ..e4ffeeeeeeeeeeeeff4e..
        ..e4e4eee4eeee4eee4e4e..
        ..e4eeeeeeeeeeeeeeee4e..
        ..ee4444444444444444ee..
        ...eeeeeeeeeeeeeeeeee...
        ........................
        ........................
        `, SpriteKind.Player)
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    CannonBall = sprites.createProjectileFromSprite(img`
        f f 
        f f 
        `, cannon1, -60, -100)
    CannonBall = sprites.createProjectileFromSprite(img`
        f f 
        f f 
        `, cannon2, 60, -100)
})
function rowBoat () {
    RowBoat = sprites.create(img`
        . . . . . . b b . . . . . . 
        . . . . . . b b . . . . . . 
        . . . . . f b b f . . . . . 
        . . . . . f f f f . . . . . 
        . . . . f 4 f f 4 f . . . . 
        . . . . f e e e e f . . . . 
        . . . . f e e e e f . . . . 
        . . . . f d e e d f . . . . 
        e e e e e e e e e e e e e e 
        . . . . f d e e d f . . . . 
        . . . . f e e e e f . . . . 
        . . . . f d e e d f . . . . 
        . . . . f f f f f f . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    RowBoat,
    [img`
        . . . . . 1 b b 1 . . . . . 
        . . . . 1 . b b . . . . . . 
        . . . . . f b b f . 1 . . . 
        . . 1 . . f f f f . . 1 . . 
        e . 1 . f 4 f f 4 f . . . e 
        . e . . f e e e e f . 1 e . 
        . . e . f e e e e f . e . . 
        . . 1 e f d e e d f e 1 . . 
        . . 1 . e e e e e e . 1 . . 
        . . . . f d e e d f . . . . 
        . . 1 . f e e e e f . 1 . . 
        . . . . f d e e d f . 1 . . 
        . . 1 . f f f f f f . . . . 
        `,img`
        . . . . . 1 b b 1 . . . . . 
        . . . . . . b b . . . . . . 
        . . . 1 . f b b f . 1 . . . 
        . . . . . f f f f . . . . . 
        . . 1 . f 4 f f 4 f . 1 . . 
        . . . . f e e e e f . . . . 
        e e 1 . f e e e e f . 1 e e 
        . . e e f d e e d f e e . . 
        . . 1 . e e e e e e . 1 . . 
        . . . . f d e e d f . . . . 
        . . 1 . f e e e e f . 1 . . 
        . . . . f d e e d f . . . . 
        . . 1 . f f f f f f . 1 . . 
        `,img`
        . . . . . . b b . . . . . . 
        . . . . 1 . b b . 1 . . . . 
        . . . . . f b b f . . . . . 
        . . 1 . . f f f f . . 1 . . 
        . . . . f 4 f f 4 f . . . . 
        . . 1 . f e e e e f . 1 . . 
        . . . . f e e e e f . . . . 
        . . 1 . f d e e d f . 1 . . 
        e e e e e e e e e e e e e e 
        . . 1 . f d e e d f . 1 . . 
        . . . . f e e e e f . . . . 
        . . 1 . f d e e d f . 1 . . 
        . . . . f f f f f f . . . . 
        `,img`
        . . . . . 1 b b 1 . . . . . 
        . . . . . . b b . . . . . . 
        . . . 1 . f b b f . 1 . . . 
        . . . . . f f f f . . . . . 
        . . 1 . f 4 f f 4 f . 1 . . 
        . . . . f e e e e f . . . . 
        . . 1 . f e e e e f . 1 . . 
        . . . . f d e e d f . . . . 
        . . 1 . e e e e e e . 1 . . 
        . . e e f d e e d f e e . . 
        e e 1 . f e e e e f . 1 e e 
        . . . . f d e e d f . . . . 
        . . 1 . f f f f f f . 1 . . 
        `,img`
        . . . . . . b b . . . . . . 
        . . . . 1 . b b . 1 . . . . 
        . . . . . f b b f . . . . . 
        . . 1 . . f f f f . . 1 . . 
        . . . . f 4 f f 4 f . . . . 
        . . 1 . f e e e e f . 1 . . 
        . . . . f e e e e f . . . . 
        . . 1 . f d e e d f . 1 . . 
        . . . . e e e e e e . . . . 
        . . 1 e f d e e d f e 1 . . 
        . . e . f e e e e f . e . . 
        . e 1 . f d e e d f . 1 e . 
        e . . . f f f f f f . . . e 
        `,img`
        . . . . . 1 b b 1 . . . . . 
        . . . . . . b b . . . . . . 
        . . . 1 . f b b f . 1 . . . 
        . . . . . f f f f . . . . . 
        . . 1 . f 4 f f 4 f . 1 . . 
        . . . . f e e e e f . . . . 
        . . 1 . f e e e e f . 1 . . 
        . . . . f d e e d f . . . . 
        . . 1 . e e e e e e . 1 . . 
        . . . e f d e e d f e . . . 
        . . e . f e e e e f . e . . 
        . e . . f d e e d f . . e . 
        e . 1 . f f f f f f . 1 . e 
        `,img`
        . . . . . . b b . . . . . . 
        . . . . 1 . b b . 1 . . . . 
        . . . . . f b b f . . . . . 
        . . 1 . . f f f f . . 1 . . 
        . . . . f 4 f f 4 f . . . . 
        . . 1 . f e e e e f . 1 . . 
        . . . . f e e e e f . . . . 
        . . 1 . f d e e d f . 1 . . 
        . . . . e e e e e e . . . . 
        . . 1 e f d e e d f e 1 . . 
        . . e . f e e e e f . e . . 
        . e 1 . f d e e d f . 1 e . 
        e . . . f f f f f f . . . e 
        `],
    150,
    true
    )
}
function twoCannons () {
    cannon1 = sprites.create(img`
        b b . . e e 
        b b b e e e 
        . b b b e 4 
        . e b b b f 
        e e e b f f 
        e e 4 f f e 
        `, SpriteKind.Cannon)
    cannon2 = sprites.create(img`
        e e . . b b 
        e e e b b b 
        4 e b b b . 
        f b b b e . 
        f f b e e e 
        e f f 4 e e 
        `, SpriteKind.Cannon)
    cannon1.z = 6
    cannon2.z = 6
}
let RowBoat: Sprite = null
let cannon2: Sprite = null
let cannon1: Sprite = null
let CannonBall: Sprite = null
let Ship: Sprite = null
Ship = sprites.create(img`
    ...........ee...........
    ..........eeee..........
    .........ee44ee.........
    ....bb..eee44eee..bb....
    ....bbbeee4ee4eeebbb....
    .....bbbe4eeee4ebbb.....
    .....ebbbf4ee4fbbbe.....
    ....eeebffeeeeffbeee....
    ...eee4ffeeeeeeff4eee...
    ..eee4e4eeeeeeee4e4eee..
    ..ee4eeeeeeeeeeeeee4ee..
    ..e4ee44eeeeeeeeeeee4e..
    ..e4e4e44eeeee44444e4e..
    ..e4e44e4eeeeee444d44e..
    ..e4ee44eeeeeeee4ddd4e..
    ..e4eeeeeeeeeeee4ded4e..
    ..e4eeeeeeffffee4edede..
    2121212121feef1212121212
    fffffffffffeefffffffffff
    ..e4eeeeeeffffee4ded4d..
    ..e4eeeeeeeeeee44ede4d..
    ..e4eeeeeeeeeeee4dedde..
    ..e4eeeeeeeeeeeeedde4e..
    ..e4e4eeeeeeeeeeee4e4e..
    ..e4eeeeeeeeeeeeeeee4e..
    ..e4eeeeeeeeeeeeeeee4e..
    ..e4eeeeeeeeeeeeeeee4e..
    ..e4eeeeeeeeeeeeeeee4e..
    ..e4e4eee4eeee4eee4e4e..
    ..e4eeeeeeeeeeeeeeee4e..
    ..ee4444444444444444ee..
    ...eeeeeeeeeeeeeeeeee...
    ........................
    ........................
    `, SpriteKind.Player)
Ship.z = 5
controller.moveSprite(Ship, 50, 50)
twoCannons()
scene.setBackgroundColor(9)
scene.cameraFollowSprite(Ship)
game.onUpdate(function () {
    cannon1.setPosition(Ship.x + -5, Ship.y + -11)
    cannon2.setPosition(Ship.x + 5, Ship.y + -11)
})
