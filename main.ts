namespace SpriteKind {
    export const Cannon = SpriteKind.create()
    export const HUD = SpriteKind.create()
    export const Net = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipDirection = 0
    OrientShip()
    CannonsNorth()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyProjectile, function (sprite, otherSprite) {
	
})
function OrientShip () {
    if (ShipDirection == 0) {
        animation.runImageAnimation(
        Ship,
        [img`
            ..........1..1..........
            .........1....1.........
            ........................
            .......1........1.......
            ......1....ee....1......
            .....1....eeee....1.....
            .........ee44ee.........
            ........eee44eee........
            ..1....eee4ee4eee....1..
            .1....eee4eeee4eee....1.
            1....eee4e4ee4e4eee....1
            ....eee4eeeeeeee4eee....
            ...eee4eeeeeeeeee4eee...
            ..eee4e4eeeeeeee4e4eee..
            1.ee4eeeeeeeeeeeeee4ee.1
            1.e4ee44eeeeeeeeeeee4e.1
            1.e4e4e44eeeee44444e4e.1
            ..e4e44e4eeeeee444d44e..
            ..e4ee44eeeeeeee4ddd4e..
            1.e4eeeeeeeeeeee4ded4e.1
            1.e4eeeeeeffffee4edede.1
            2121212121feef1212121212
            fffffffffffeefffffffffff
            ..e4eeeeeeffffee4ded4d..
            ..e4eeeeeeeeeee44ede4d..
            ..e4eeeeeeeeeeee4dedde..
            1.e4eeeeeeeeeeeeedde4e.1
            1.e4e4eeeeeeeeeeee4e4e.1
            1.e4eeeeeeeeeeeeeeee4e.1
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            1.e4e4eee4eeee4eee4e4e.1
            1.e4eeeeeeeeeeeeeeee4e.1
            1.ee4444444444444444ee.1
            ...eeeeeeeeeeeeeeeeee...
            ........................
            ........................
            1......................1
            1......................1
            `,img`
            ...........11...........
            ........................
            .........1....1.........
            ........................
            .......1...ee....1......
            ..........eeee..........
            ....1....ee44ee....1....
            ...1....eee44eee....1...
            .......eee4ee4eee.......
            .1....eee4eeee4eee....1.
            .....eee4e4ee4e4eee.....
            1...eee4eeeeeeee4eee...1
            1..eee4eeeeeeeeee4eee..1
            1.eee4e4eeeeeeee4e4eee.1
            ..ee4eeeeeeeeeeeeee4ee..
            ..e4ee44eeeeeeeeeeee4e..
            ..e4e4e44eeeee44444e4e..
            1.e4e44e4eeeeee444d44e.1
            1.e4ee44eeeeeeee4ddd4e.1
            1.e4eeeeeeeeeeee4ded4e.1
            ..e4eeeeeeffffee4edede..
            2121212121feef1212121212
            fffffffffffeefffffffffff
            1.e4eeeeeeffffee4ded4d.1
            1.e4eeeeeeeeeee44ede4d.1
            1.e4eeeeeeeeeeee4dedde.1
            ..e4eeeeeeeeeeeeedde4e..
            ..e4e4eeeeeeeeeeee4e4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            1.e4eeeeeeeeeeeeeeee4e.1
            ..e4e4eee4eeee4eee4e4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..ee4444444444444444ee..
            1..eeeeeeeeeeeeeeeeee..1
            1......................1
            1......................1
            ........................
            ........................
            `,img`
            ..........1..1..........
            ........................
            ........1......1........
            ........................
            ......1....ee....1......
            .....1....eeee....1.....
            .........ee44ee.........
            ........eee44eee........
            ..1....eee4ee4eee....1..
            .1....eee4eeee4eee....1.
            1....eee4e4ee4e4eee....1
            ....eee4eeeeeeee4eee....
            ...eee4eeeeeeeeee4eee...
            ..eee4e4eeeeeeee4e4eee..
            1.ee4eeeeeeeeeeeeee4ee.1
            1.e4ee44eeeeeeeeeeee4e.1
            1.e4e4e44eeeee44444e4e.1
            ..e4e44e4eeeeee444d44e..
            ..e4ee44eeeeeeee4ddd4e..
            ..e4eeeeeeeeeeee4ded4e..
            1.e4eeeeeeffffee4edede.1
            2121212121feef1212121212
            fffffffffffeefffffffffff
            ..e4eeeeeeffffee4ded4d..
            1.e4eeeeeeeeeee44ede4d.1
            ..e4eeeeeeeeeeee4dedde..
            1.e4eeeeeeeeeeeeedde4e.1
            1.e4e4eeeeeeeeeeee4e4e.1
            1.e4eeeeeeeeeeeeeeee4e.1
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            1.e4e4eee4eeee4eee4e4e.1
            1.e4eeeeeeeeeeeeeeee4e.1
            1.ee4444444444444444ee.1
            ...eeeeeeeeeeeeeeeeee...
            1......................1
            ........................
            1......................1
            1......................1
            `,img`
            ........................
            .........1....1.........
            ........................
            .......1........1.......
            ......1....ee....1......
            ..........eeee..........
            ....1....ee44ee....1....
            ...1....eee44eee....1...
            .......eee4ee4eee.......
            ......eee4eeee4eee......
            .....eee4e4ee4e4eee.....
            1...eee4eeeeeeee4eee...1
            1..eee4eeeeeeeeee4eee..1
            1.eee4e4eeeeeeee4e4eee.1
            ..ee4eeeeeeeeeeeeee4ee..
            ..e4ee44eeeeeeeeeeee4e..
            ..e4e4e44eeeee44444e4e..
            1.e4e44e4eeeeee444d44e.1
            1.e4ee44eeeeeeee4ddd4e.1
            1.e4eeeeeeeeeeee4ded4e.1
            ..e4eeeeeeffffee4edede..
            2121212121feef1212121212
            fffffffffffeefffffffffff
            1.e4eeeeeeffffee4ded4d.1
            1.e4eeeeeeeeeee44ede4d.1
            1.e4eeeeeeeeeeee4dedde.1
            ..e4eeeeeeeeeeeeedde4e..
            ..e4e4eeeeeeeeeeee4e4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            1.e4eeeeeeeeeeeeeeee4e.1
            ..e4e4eee4eeee4eee4e4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..ee4444444444444444ee..
            1..eeeeeeeeeeeeeeeeee..1
            1......................1
            1......................1
            ........................
            ........................
            `],
        200,
        true
        )
    } else if (ShipDirection == 1) {
        animation.runImageAnimation(
        Ship,
        [img`
            11...111...111...f211..111...1..........
            .................f1...........1.........
            .....eeeeeeeeeeeef2eeeeeeee....1........
            ....ee44444444444f1444444eee............
            ....e4eeeeeeeeeeef2eeeeee4eee...........
            ....e4e4eeee4eeeef1eee44ee4eee....1.....
            ....e4eeeeeeeeeeef2ee44e4ee4eee....1....
            ....e4eeeeeeeeeeef1ee4e44e4e4eee....1...
            ....e4eeeeeeeeeeef2eee44eeeee4eee.......
            ....e4e4eeeeeeeeef1eeeeeeeeeee4eee....1.
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee....1
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee....
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee....
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee....1
            ....e4e4eeeeeeeeef1eeee4eeeeee4eee....1.
            ....e4eeeeeeeee4ef2eee44eeeee4eee.......
            ....e4eeeeeeee444f144444ee4e4eee....1...
            ....e4eeeeeeeddedf2edd44eee4eee....1....
            ....e4e4eeee4dedef1dedd4ee4eee....1.....
            ....e4eeeeeeeededf2edd4ee4eee...........
            ....ee44444444d44f1d44444eee............
            .....eeeeeeeeeeddf2eeeeeeee....1........
            .................f1...........1.........
            11...111...111...f211..111...1..........
            `,img`
            ..111...1.....111f2.111...111...........
            .................f1...........1.........
            .....eeeeeeeeeeeef2eeeeeeee.............
            ....ee44444444444f1444444eee....1.......
            ....e4eeeeeeeeeeef2eeeeee4eee....1......
            ....e4e4eeee4eeeef1eee44ee4eee..........
            ....e4eeeeeeeeeeef2ee44e4ee4eee.........
            ....e4eeeeeeeeeeef1ee4e44e4e4eee...1....
            ....e4eeeeeeeeeeef2eee44eeeee4eee.......
            ....e4e4eeeeeeeeef1eeeeeeeeeee4eee...1..
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee.....
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee...1
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee...1
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee.....
            ....e4e4eeeeeeeeef1eeee4eeeeee4eee...1..
            ....e4eeeeeeeee4ef2eee44eeeee4eee.......
            ....e4eeeeeeee444f144444ee4e4eee........
            ....e4eeeeeeeddedf2edd44eee4eee....1....
            ....e4e4eeee4dedef1dedd4ee4eee..........
            ....e4eeeeeeeededf2edd4ee4eee....1......
            ....ee44444444d44f1d44444eee....1.......
            .....eeeeeeeeeeddf2eeeeeeee.............
            .................f1...........1.........
            ..111...1.....111f2.111...111...........
            `,img`
            11.1.111...111.1.f21...111...1..........
            .................f1...........1.........
            .....eeeeeeeeeeeef2eeeeeeee....1........
            ....ee44444444444f1444444eee............
            ....e4eeeeeeeeeeef2eeeeee4eee...........
            ....e4e4eeee4eeeef1eee44ee4eee....1.....
            ....e4eeeeeeeeeeef2ee44e4ee4eee....1....
            ....e4eeeeeeeeeeef1ee4e44e4e4eee........
            ....e4eeeeeeeeeeef2eee44eeeee4eee....1..
            ....e4e4eeeeeeeeef1eeeeeeeeeee4eee......
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee....1
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee....
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee....
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee....1
            ....e4e4eeeeeeeeef1eeee4eeeeee4eee......
            ....e4eeeeeeeee4ef2eee44eeeee4eee....1..
            ....e4eeeeeeee444f144444ee4e4eee........
            ....e4eeeeeeeddedf2edd44eee4eee....1....
            ....e4e4eeee4dedef1dedd4ee4eee....1.....
            ....e4eeeeeeeededf2edd4ee4eee...........
            ....ee44444444d44f1d44444eee............
            .....eeeeeeeeeeddf2eeeeeeee....1........
            .................f1...........1.........
            11.1.111...111.1.f21...111...1..........
            `,img`
            ..111...1.....111f2.111...111...........
            .................f1.....................
            .....eeeeeeeeeeeef2eeeeeeee.............
            ....ee44444444444f1444444eee....1.......
            ....e4eeeeeeeeeeef2eeeeee4eee....1......
            ....e4e4eeee4eeeef1eee44ee4eee..........
            ....e4eeeeeeeeeeef2ee44e4ee4eee....1....
            ....e4eeeeeeeeeeef1ee4e44e4e4eee....1...
            ....e4eeeeeeeeeeef2eee44eeeee4eee.......
            ....e4e4eeeeeeeeef1eeeeeeeeeee4eee....1.
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee.....
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee....
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee....
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee.....
            ....e4e4eeeeeeeeef1eeee4eeeeee4eee....1.
            ....e4eeeeeeeee4ef2eee44eeeee4eee.......
            ....e4eeeeeeee444f144444ee4e4eee....1...
            ....e4eeeeeeeddedf2edd44eee4eee....1....
            ....e4e4eeee4dedef1dedd4ee4eee..........
            ....e4eeeeeeeededf2edd4ee4eee....1......
            ....ee44444444d44f1d44444eee....1.......
            .....eeeeeeeeeeddf2eeeeeeee.............
            .................f1.....................
            ..111...1.....111f2.111...111...........
            `],
        200,
        true
        )
    } else if (ShipDirection == 2) {
        animation.runImageAnimation(
        Ship,
        [img`
            1......................1
            1......................1
            ........................
            ........................
            ...eeeeeeeeeeeeeeeeee...
            1.ee4444444444444444ee.1
            1.e4eeeeeeeeeeeeeeee4e.1
            1.e4e4eee4eeee4eee4e4e.1
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            1.e4eeeeeeeeeeeeeeee4e.1
            1.e4e4eeeeeeeeeeee4e4e.1
            1.e4eddeeeeeeeeeeeee4e.1
            ..edded4eeeeeeeeeeee4e..
            ..d4ede44eeeeeeeeeee4e..
            ..d4ded4eeffffeeeeee4e..
            fffffffffffeefffffffffff
            2121212121feef1212121212
            1.edede4eeffffeeeeee4e.1
            1.e4ded4eeeeeeeeeeee4e.1
            ..e4ddd4eeeeeeee44ee4e..
            ..e44d444eeeeee4e44e4e..
            1.e4e44444eeeee44e4e4e.1
            1.e4eeeeeeeeeeee44ee4e.1
            1.ee4eeeeeeeeeeeeee4ee.1
            ..eee4e4eeeeeeee4e4eee..
            ...eee4eeeeeeeeee4eee...
            ....eee4eeeeeeee4eee....
            1....eee4e4ee4e4eee....1
            .1....eee4eeee4eee....1.
            ..1....eee4ee4eee....1..
            ........eee44eee........
            .........ee44ee.........
            .....1....eeee....1.....
            ......1....ee....1......
            .......1........1.......
            ........................
            .........1....1.........
            ..........1..1..........
            `,img`
            ........................
            ........................
            1......................1
            1......................1
            1..eeeeeeeeeeeeeeeeee..1
            ..ee4444444444444444ee..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4e4eee4eeee4eee4e4e..
            1.e4eeeeeeeeeeeeeeee4e.1
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4e4eeeeeeeeeeee4e4e..
            ..e4eddeeeeeeeeeeeee4e..
            1.edded4eeeeeeeeeeee4e.1
            1.d4ede44eeeeeeeeeee4e.1
            1.d4ded4eeffffeeeeee4e.1
            fffffffffffeefffffffffff
            2121212121feef1212121212
            ..edede4eeffffeeeeee4e..
            1.e4ded4eeeeeeeeeeee4e.1
            1.e4ddd4eeeeeeee44ee4e.1
            1.e44d444eeeeee4e44e4e.1
            ..e4e44444eeeee44e4e4e..
            ..e4eeeeeeeeeeee44ee4e..
            ..ee4eeeeeeeeeeeeee4ee..
            1.eee4e4eeeeeeee4e4eee.1
            1..eee4eeeeeeeeee4eee..1
            1...eee4eeeeeeee4eee...1
            .....eee4e4ee4e4eee.....
            ......eee4eeee4eee......
            .......eee4ee4eee.......
            ...1....eee44eee....1...
            ....1....ee44ee....1....
            ..........eeee..........
            ......1....ee....1......
            .......1........1.......
            ........................
            .........1....1.........
            ........................
            `,img`
            1......................1
            1......................1
            ........................
            1......................1
            ...eeeeeeeeeeeeeeeeee...
            1.ee4444444444444444ee.1
            1.e4eeeeeeeeeeeeeeee4e.1
            1.e4e4eee4eeee4eee4e4e.1
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            1.e4eeeeeeeeeeeeeeee4e.1
            1.e4e4eeeeeeeeeeee4e4e.1
            1.e4eddeeeeeeeeeeeee4e.1
            ..edded4eeeeeeeeeeee4e..
            1.d4ede44eeeeeeeeeee4e.1
            ..d4ded4eeffffeeeeee4e..
            fffffffffffeefffffffffff
            2121212121feef1212121212
            1.edede4eeffffeeeeee4e.1
            ..e4ded4eeeeeeeeeeee4e..
            ..e4ddd4eeeeeeee44ee4e..
            ..e44d444eeeeee4e44e4e..
            1.e4e44444eeeee44e4e4e.1
            1.e4eeeeeeeeeeee44ee4e.1
            1.ee4eeeeeeeeeeeeee4ee.1
            ..eee4e4eeeeeeee4e4eee..
            ...eee4eeeeeeeeee4eee...
            ....eee4eeeeeeee4eee....
            1....eee4e4ee4e4eee....1
            .1....eee4eeee4eee....1.
            ..1....eee4ee4eee....1..
            ........eee44eee........
            .........ee44ee.........
            .....1....eeee....1.....
            ......1....ee....1......
            ........................
            ........1......1........
            ........................
            ..........1..1..........
            `,img`
            ........................
            ........................
            1......................1
            1......................1
            1..eeeeeeeeeeeeeeeeee..1
            ..ee4444444444444444ee..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4e4eee4eeee4eee4e4e..
            1.e4eeeeeeeeeeeeeeee4e.1
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4e4eeeeeeeeeeee4e4e..
            ..e4eddeeeeeeeeeeeee4e..
            1.edded4eeeeeeeeeeee4e.1
            1.d4ede44eeeeeeeeeee4e.1
            1.d4ded4eeffffeeeeee4e.1
            fffffffffffeefffffffffff
            2121212121feef1212121212
            ..edede4eeffffeeeeee4e..
            1.e4ded4eeeeeeeeeeee4e.1
            1.e4ddd4eeeeeeee44ee4e.1
            1.e44d444eeeeee4e44e4e.1
            ..e4e44444eeeee44e4e4e..
            ..e4eeeeeeeeeeee44ee4e..
            ..ee4eeeeeeeeeeeeee4ee..
            1.eee4e4eeeeeeee4e4eee.1
            1..eee4eeeeeeeeee4eee..1
            1...eee4eeeeeeee4eee...1
            .....eee4e4ee4e4eee.....
            .1....eee4eeee4eee....1.
            .......eee4ee4eee.......
            ...1....eee44eee....1...
            ....1....ee44ee....1....
            ..........eeee..........
            ......1....ee...1.......
            ........................
            .........1....1.........
            ........................
            ...........11...........
            `],
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        Ship,
        [img`
            ..........1...111..112f...111...111...11
            .........1...........1f.................
            ........1....eeeeeeee2fddeeeeeeeeee.....
            ............eee44444d1f44d44444444ee....
            ...........eee4ee4dde2fdedeeeeeeee4e....
            .....1....eee4ee4dded1feded4eeee4e4e....
            ....1....eee4eee44dde2fdeddeeeeeee4e....
            ...1....eee4e4ee444441f444eeeeeeee4e....
            .......eee4eeeee44eee2fe4eeeeeeeee4e....
            .1....eee4eeeeee4eeee1feeeeeeeee4e4e....
            1....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            ....ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            ....ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            1....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            .1....eee4eeeeeeeeeee1feeeeeeeee4e4e....
            .......eee4eeeee44eee2feeeeeeeeeee4e....
            ...1....eee4e4e44e4ee1feeeeeeeeeee4e....
            ....1....eee4ee4e44ee2feeeeeeeeeee4e....
            .....1....eee4ee44eee1feeee4eeee4e4e....
            ...........eee4eeeeee2feeeeeeeeeee4e....
            ............eee4444441f44444444444ee....
            ........1....eeeeeeee2feeeeeeeeeeee.....
            .........1...........1f.................
            ..........1...111..112f...111...111...11
            `,img`
            ...........111...111.2f111.....1...111..
            .........1...........1f.................
            .............eeeeeeee2fddeeeeeeeeee.....
            .......1....eee44444d1f44d44444444ee....
            ......1....eee4ee4dde2fdedeeeeeeee4e....
            ..........eee4ee4dded1feded4eeee4e4e....
            ....1....eee4eee44dde2fdeddeeeeeee4e....
            ........eee4e4ee444441f444eeeeeeee4e....
            .......eee4eeeee44eee2fe4eeeeeeeee4e....
            ..1...eee4eeeeee4eeee1feeeeeeeee4e4e....
            .....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            1...ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            1...ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            .....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            ..1...eee4eeeeeeeeeee1feeeeeeeee4e4e....
            .......eee4eeeee44eee2feeeeeeeeeee4e....
            ....1...eee4e4e44e4ee1feeeeeeeeeee4e....
            .........eee4ee4e44ee2feeeeeeeeeee4e....
            ..........eee4ee44eee1feeee4eeee4e4e....
            ......1....eee4eeeeee2feeeeeeeeeee4e....
            .......1....eee4444441f44444444444ee....
            .............eeeeeeee2feeeeeeeeeeee.....
            .........1...........1f.................
            ...........111...111.2f111.....1...111..
            `,img`
            ..........1...111...12f.1.111...111.1.11
            .........1...........1f.................
            ........1....eeeeeeee2fddeeeeeeeeee.....
            ............eee44444d1f44d44444444ee....
            ...........eee4ee4dde2fdedeeeeeeee4e....
            .....1....eee4ee4dded1feded4eeee4e4e....
            ....1....eee4eee44dde2fdeddeeeeeee4e....
            ........eee4e4ee444441f444eeeeeeee4e....
            ..1....eee4eeeee44eee2fe4eeeeeeeee4e....
            ......eee4eeeeee4eeee1feeeeeeeee4e4e....
            1....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            ....ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            ....ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            1....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            ......eee4eeeeeeeeeee1feeeeeeeee4e4e....
            ..1....eee4eeeee44eee2feeeeeeeeeee4e....
            ........eee4e4e44e4ee1feeeeeeeeeee4e....
            ....1....eee4ee4e44ee2feeeeeeeeeee4e....
            .....1....eee4ee44eee1feeee4eeee4e4e....
            ...........eee4eeeeee2feeeeeeeeeee4e....
            ............eee4444441f44444444444ee....
            ........1....eeeeeeee2feeeeeeeeeeee.....
            .........1...........1f.................
            ..........1...111...12f.1.111...111.1.11
            `,img`
            ...........111...111.2f111.....1...111..
            .....................1f.................
            .............eeeeeeee2fddeeeeeeeeee.....
            .......1....eee44444d1f44d44444444ee....
            ......1....eee4ee4dde2fdedeeeeeeee4e....
            ..........eee4ee4dded1feded4eeee4e4e....
            ....1....eee4eee44dde2fdeddeeeeeee4e....
            ...1....eee4e4ee444441f444eeeeeeee4e....
            .......eee4eeeee44eee2fe4eeeeeeeee4e....
            .1....eee4eeeeee4eeee1feeeeeeeee4e4e....
            .....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            ....ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            ....ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            .....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            .1....eee4eeeeeeeeeee1feeeeeeeee4e4e....
            .......eee4eeeee44eee2feeeeeeeeeee4e....
            ...1....eee4e4e44e4ee1feeeeeeeeeee4e....
            ....1....eee4ee4e44ee2feeeeeeeeeee4e....
            ..........eee4ee44eee1feeee4eeee4e4e....
            ......1....eee4eeeeee2feeeeeeeeeee4e....
            .......1....eee4444441f44444444444ee....
            .............eeeeeeee2feeeeeeeeeeee.....
            .....................1f.................
            ...........111...111.2f111.....1...111..
            `],
        200,
        true
        )
    }
}
function CannonsNorth () {
    for (let value of sprites.allOfKind(SpriteKind.Cannon)) {
        value.destroy()
    }
    if (Cannon_Count == 5) {
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
        cannon3 = sprites.create(img`
            . . e 4 f f 
            b b b b f e 
            b b b b f e 
            . . e 4 f f 
            `, SpriteKind.Cannon)
        cannon4 = sprites.create(img`
            f f 4 e . . 
            e f b b b b 
            e f b b b b 
            f f 4 e . . 
            `, SpriteKind.Cannon)
        cannon5 = sprites.create(img`
            f e e f 
            f f f f 
            4 b b 4 
            e b b e 
            . b b . 
            . b b . 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
        cannon3.z = 6
        cannon4.z = 6
        cannon5.z = 6
    } else if (Cannon_Count == 4) {
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
        cannon3 = sprites.create(img`
            . . e 4 f f 
            b b b b f e 
            b b b b f e 
            . . e 4 f f 
            `, SpriteKind.Cannon)
        cannon4 = sprites.create(img`
            f f 4 e . . 
            e f b b b b 
            e f b b b b 
            f f 4 e . . 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
        cannon3.z = 6
        cannon4.z = 6
    } else {
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
}
function CannonsWest () {
    for (let value of sprites.allOfKind(SpriteKind.Cannon)) {
        value.destroy()
    }
    if (Cannon_Count == 5) {
        cannon1 = sprites.create(img`
            b b . . e e 
            b b b e e e 
            . b b b e 4 
            . e b b b f 
            e e e b f f 
            e e 4 f f e 
            `, SpriteKind.Cannon)
        cannon2 = sprites.create(img`
            e e 4 f f e 
            e e e b f f 
            . e b b b f 
            . b b b e 4 
            b b b e e e 
            b b . . e e 
            `, SpriteKind.Cannon)
        cannon3 = sprites.create(img`
            f e e f 
            f f f f 
            4 b b 4 
            e b b e 
            . b b . 
            . b b . 
            `, SpriteKind.Cannon)
        cannon4 = sprites.create(img`
            . b b . 
            . b b . 
            e b b e 
            4 b b 4 
            f f f f 
            f e e f 
            `, SpriteKind.Cannon)
        cannon5 = sprites.create(img`
            f f 4 e . . 
            e f b b b b 
            e f b b b b 
            f f 4 e . . 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
        cannon3.z = 6
        cannon4.z = 6
        cannon5.z = 6
    } else if (Cannon_Count == 4) {
        cannon1 = sprites.create(img`
            b b . . e e 
            b b b e e e 
            . b b b e 4 
            . e b b b f 
            e e e b f f 
            e e 4 f f e 
            `, SpriteKind.Cannon)
        cannon2 = sprites.create(img`
            e e 4 f f e 
            e e e b f f 
            . e b b b f 
            . b b b e 4 
            b b b e e e 
            b b . . e e 
            `, SpriteKind.Cannon)
        cannon3 = sprites.create(img`
            f e e f 
            f f f f 
            4 b b 4 
            e b b e 
            . b b . 
            . b b . 
            `, SpriteKind.Cannon)
        cannon4 = sprites.create(img`
            . b b . 
            . b b . 
            e b b e 
            4 b b 4 
            f f f f 
            f e e f 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
        cannon3.z = 6
        cannon4.z = 6
    } else {
        cannon1 = sprites.create(img`
            b b . . e e 
            b b b e e e 
            . b b b e 4 
            . e b b b f 
            e e e b f f 
            e e 4 f f e 
            `, SpriteKind.Cannon)
        cannon2 = sprites.create(img`
            e e 4 f f e 
            e e e b f f 
            . e b b b f 
            . b b b e 4 
            b b b e e e 
            b b . . e e 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Net = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Net)
    if (game.runtime() > NetReload + 1500) {
        NetReload = game.runtime()
        if (ShipDirection == 0) {
            Net.setPosition(Ship.x + 16, Ship.y)
            animation.runImageAnimation(
            Net,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                d . . . . . . . . . . . . . . . 
                . d . . . . . . . . . . . . . . 
                d . . . . . . . . . . . . . . . 
                . d . . . . . . . . . . . . . . 
                d . . . . . . . . . . . . . . . 
                . d . . . . . . . . . . . . . . 
                d . . . . . . . . . . . . . . . 
                . d . . . . . . . . . . . . . . 
                d . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                d . . . . . . . . . . . . . . . 
                . d . . . . . . . . . . . . . . 
                d . d . . . . . . . . . . . . . 
                . d . d . . . . . . . . . . . . 
                d . d . . . . . . . . . . . . . 
                . d . d . . . . . . . . . . . . 
                d . d . . . . . . . . . . . . . 
                . d . d . . . . . . . . . . . . 
                d . d . . . . . . . . . . . . . 
                . d . d . . . . . . . . . . . . 
                d . d . . . . . . . . . . . . . 
                . d . . . . . . . . . . . . . . 
                d . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                d d . . . . . . . . . . . . . . 
                d . d . . . . . . . . . . . . . 
                . d . d . . . . . . . . . . . . 
                d . d . d . . . . . . . . . . . 
                . d . d . d . . . . . . . . . . 
                d . d . d d . . . . . . . . . . 
                . d . d . d . . . . . . . . . . 
                d . d . d d . . . . . . . . . . 
                . d . d . d . . . . . . . . . . 
                d . d . d d . . . . . . . . . . 
                . d . d . d . . . . . . . . . . 
                d . d . d . . . . . . . . . . . 
                . d . d . . . . . . . . . . . . 
                d . d . . . . . . . . . . . . . 
                d d . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                d d d d . . . . . . . . . . . . 
                d . d . d . . . . . . . . . . . 
                . d . d . d . . . . . . . . . . 
                d . d . d . d . . . . . . . . . 
                . d . d . d . d . . . . . . . . 
                d . d . d . d d . . . . . . . . 
                . d . d . d . d . . . . . . . . 
                d . d . d . d d . . . . . . . . 
                . d . d . d . d . . . . . . . . 
                d . d . d . d d . . . . . . . . 
                . d . d . d . d . . . . . . . . 
                d . d . d . d . . . . . . . . . 
                . d . d . d . . . . . . . . . . 
                d . d . d . . . . . . . . . . . 
                d d d d . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                d d d d d d . . . . . . . . . . 
                d . d . d . d . . . . . . . . . 
                . d . d . d . d . . . . . . . . 
                d . d . d . d . d . . . . . . . 
                . d . d . d . d . d . . . . . . 
                d . d . d . d . d d . . . . . . 
                . d . d . d . d . d . . . . . . 
                d . d . d . d . d d . . . . . . 
                . d . d . d . d . d . . . . . . 
                d . d . d . d . d d . . . . . . 
                . d . d . d . d . d . . . . . . 
                d . d . d . d . d . . . . . . . 
                . d . d . d . d . . . . . . . . 
                d . d . d . d . . . . . . . . . 
                d d d d d d . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                d d d d d d d d . . . . . . . . 
                d . d . d . d . d . . . . . . . 
                . d . d . d . d . d . . . . . . 
                d . d . d . d . d . d . . . . . 
                . d . d . d . d . d . d . . . . 
                d . d . d . d . d . d d . . . . 
                . d . d . d . d . d . d . . . . 
                d . d . d . d . d . d d . . . . 
                . d . d . d . d . d . d . . . . 
                d . d . d . d . d . d d . . . . 
                . d . d . d . d . d . d . . . . 
                d . d . d . d . d . d . . . . . 
                . d . d . d . d . d . . . . . . 
                d . d . d . d . d . . . . . . . 
                d d d d d d d d . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . d d d d d d d . . . . . . 
                . . d . d . d . d . d . . . . . 
                . d . d . d . d . d . d . . . . 
                d . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                d . d . d . d . d . d . d d . . 
                . d . d . d . d . d . d . d . . 
                d . d . d . d . d . d . d d . . 
                . d . d . d . d . d . d . d . . 
                d . d . d . d . d . d . d d . . 
                . d . d . d . d . d . d . d . . 
                d . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . . . . 
                . . d . d . d . d . d . . . . . 
                . . . d d d d d d d . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . d d d d d d d . . . . . 
                . . . d . d . d . d . d . . . . 
                . . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                d . d . d . d . d . d . d . d . 
                d d . d . d . d . d . d . d d . 
                d . d . d . d . d . d . d . d . 
                d d . d . d . d . d . d . d d . 
                d . d . d . d . d . d . d . d . 
                d d . d . d . d . d . d . d d . 
                d . d . d . d . d . d . d . d . 
                . d . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . . . 
                . . . d . d . d . d . d . . . . 
                . . . . d d d d d d d . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . d d d d d d d . . . . . 
                . . . d . d . d . d . d . . . . 
                . . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                d . d . d . d . d . d . d . d . 
                d d . d . d . d . d . d . d d . 
                d . d . d . d . d . d . d . d . 
                d d . d . d . d . d . d . d d . 
                d . d . d . d . d . d . d . d . 
                d d . d . d . d . d . d . d d . 
                d . d . d . d . d . d . d . d . 
                . d . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . . . 
                . . . d . d . d . d . d . . . . 
                . . . . d d d d d d d . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . d . d . d . d . d . . . . 
                . . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . . . 
                . . . d . d . d . d . d . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . d . d . d . d . . . . . 
                . . . d . d . d . d . d . . . . 
                . . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . . . 
                . d . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . . . 
                . . . d . d . d . d . d . . . . 
                . . . . d . d . d . d . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . d . d . d . . . . . . 
                . . . . d . d . d . d . . . . . 
                . . . d . d . d . d . d . . . . 
                . . d . d . d . d . d . d . . . 
                . . . d . d . d . d . d . . . . 
                . . d . d . d . d . d . d . . . 
                . . . d . d . d . d . d . . . . 
                . . . . d . d . d . d . . . . . 
                . . . . . d . d . d . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . d . d . . . . . . . 
                . . . . . d . d . d . . . . . . 
                . . . . d . d . d . d . . . . . 
                . . . d . d . d . d . d . . . . 
                . . . . d . d . d . d . . . . . 
                . . . . . d . d . d . . . . . . 
                . . . . . . d . d . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . d . . . . . . . . 
                . . . . . . d . d . . . . . . . 
                . . . . . d . d . d . . . . . . 
                . . . . . . d . d . . . . . . . 
                . . . . . . . d . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . d . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            false
            )
        } else if (ShipDirection == 1) {
        	
        } else if (ShipDirection == 2) {
        	
        } else {
        	
        }
    }
})
function CannonsSouth () {
    for (let value of sprites.allOfKind(SpriteKind.Cannon)) {
        value.destroy()
    }
    if (Cannon_Count == 5) {
        cannon1 = sprites.create(img`
            e f f 4 e e 
            f f b e e e 
            f b b b e . 
            4 e b b b . 
            e e e b b b 
            e e . . b b 
            `, SpriteKind.Cannon)
        cannon2 = sprites.create(img`
            e e 4 f f e 
            e e e b f f 
            . e b b b f 
            . b b b e 4 
            b b b e e e 
            b b . . e e 
            `, SpriteKind.Cannon)
        cannon3 = sprites.create(img`
            f f 4 e . . 
            e f b b b b 
            e f b b b b 
            f f 4 e . . 
            `, SpriteKind.Cannon)
        cannon4 = sprites.create(img`
            . . e 4 f f 
            b b b b f e 
            b b b b f e 
            . . e 4 f f 
            `, SpriteKind.Cannon)
        cannon5 = sprites.create(img`
            . b b . 
            . b b . 
            e b b e 
            4 b b 4 
            f f f f 
            f e e f 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
        cannon3.z = 6
        cannon4.z = 6
        cannon5.z = 6
    } else if (Cannon_Count == 4) {
        cannon1 = sprites.create(img`
            e f f 4 e e 
            f f b e e e 
            f b b b e . 
            4 e b b b . 
            e e e b b b 
            e e . . b b 
            `, SpriteKind.Cannon)
        cannon2 = sprites.create(img`
            e e 4 f f e 
            e e e b f f 
            . e b b b f 
            . b b b e 4 
            b b b e e e 
            b b . . e e 
            `, SpriteKind.Cannon)
        cannon3 = sprites.create(img`
            f f 4 e . . 
            e f b b b b 
            e f b b b b 
            f f 4 e . . 
            `, SpriteKind.Cannon)
        cannon4 = sprites.create(img`
            . . e 4 f f 
            b b b b f e 
            b b b b f e 
            . . e 4 f f 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
        cannon3.z = 6
        cannon4.z = 6
    } else {
        cannon1 = sprites.create(img`
            e f f 4 e e 
            f f b e e e 
            f b b b e . 
            4 e b b b . 
            e e e b b b 
            e e . . b b 
            `, SpriteKind.Cannon)
        cannon2 = sprites.create(img`
            e e 4 f f e 
            e e e b f f 
            . e b b b f 
            . b b b e 4 
            b b b e e e 
            b b . . e e 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipDirection = 3
    OrientShip()
    CannonsWest()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 500)
    otherSprite.destroy()
})
function CannonsEast () {
    for (let value of sprites.allOfKind(SpriteKind.Cannon)) {
        value.destroy()
    }
    if (Cannon_Count == 5) {
        cannon1 = sprites.create(img`
            e e . . b b 
            e e e b b b 
            4 e b b b . 
            f b b b e . 
            f f b e e e 
            e f f 4 e e 
            `, SpriteKind.Cannon)
        cannon2 = sprites.create(img`
            e f f 4 e e 
            f f b e e e 
            f b b b e . 
            4 e b b b . 
            e e e b b b 
            e e . . b b 
            `, SpriteKind.Cannon)
        cannon3 = sprites.create(img`
            . b b . 
            . b b . 
            e b b e 
            4 b b 4 
            f f f f 
            f e e f 
            `, SpriteKind.Cannon)
        cannon4 = sprites.create(img`
            f e e f 
            f f f f 
            4 b b 4 
            e b b e 
            . b b . 
            . b b . 
            `, SpriteKind.Cannon)
        cannon5 = sprites.create(img`
            . . e 4 f f 
            b b b b f e 
            b b b b f e 
            . . e 4 f f 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
        cannon3.z = 6
        cannon4.z = 6
        cannon5.z = 6
    } else if (Cannon_Count == 4) {
        cannon1 = sprites.create(img`
            e e . . b b 
            e e e b b b 
            4 e b b b . 
            f b b b e . 
            f f b e e e 
            e f f 4 e e 
            `, SpriteKind.Cannon)
        cannon2 = sprites.create(img`
            e f f 4 e e 
            f f b e e e 
            f b b b e . 
            4 e b b b . 
            e e e b b b 
            e e . . b b 
            `, SpriteKind.Cannon)
        cannon3 = sprites.create(img`
            . b b . 
            . b b . 
            e b b e 
            4 b b 4 
            f f f f 
            f e e f 
            `, SpriteKind.Cannon)
        cannon4 = sprites.create(img`
            f e e f 
            f f f f 
            4 b b 4 
            e b b e 
            . b b . 
            . b b . 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
        cannon3.z = 6
        cannon4.z = 6
    } else {
        cannon1 = sprites.create(img`
            e e . . b b 
            e e e b b b 
            4 e b b b . 
            f b b b e . 
            f f b e e e 
            e f f 4 e e 
            `, SpriteKind.Cannon)
        cannon2 = sprites.create(img`
            e f f 4 e e 
            f f b e e e 
            f b b b e . 
            4 e b b b . 
            e e e b b b 
            e e . . b b 
            `, SpriteKind.Cannon)
        cannon1.z = 6
        cannon2.z = 6
    }
}
function Map () {
    myMinimap = minimap.minimap()
    minimap.includeSprite(myMinimap, Ship)
    MiniMap = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HUD)
    MiniMap.setImage(minimap.getImage(minimap.minimap(MinimapScale.Sixteenth, 2, 12)))
    MiniMap.setPosition(scene.screenWidth() + 0, scene.screenHeight() + 0)
}
function Fire_Cannons_North () {
    if (Cannon_Count == 5) {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, -60, -100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, 60, -100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon5, 0, 100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon3, -100, 0)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon4, 100, 0)
    } else if (Cannon_Count == 4) {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, -60, -100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, 60, -100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon3, -100, 0)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon4, 100, 0)
    } else {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, -60, -100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, 60, -100)
    }
}
function Fire_Cannons_South () {
    if (Cannon_Count == 5) {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, 60, 100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, -60, 100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon3, 100, 0)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon4, -100, 0)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon5, 0, -100)
    } else if (Cannon_Count == 4) {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, 60, 100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, -60, 100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon3, 100, 0)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon4, -100, 0)
    } else {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, 60, 100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, -60, 100)
    }
}
function ShipInit () {
    ShipDirection = 0
    Cannon_Count = 2
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
        ..1.e4eeeeeeeeeeeeeeee4e.1..
        ....e4eeeeeeeeeeeeeeee4e....
        ....e4eeeeeeeeeeeeeeee4e....
        ....e4eeeeeeeeeeeeeeee4e....
        ..1.e4e4eee4eeee4eee4e4e.1..
        ..1.e4eeeeeeeeeeeeeeee4e.1..
        ..1.ee4444444444444444ee.1..
        .....eeeeeeeeeeeeeeeeee.....
        ............................
        ............................
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
        ....e4eeeeeeeeeeeeeeee4e....
        ....e4eeeeeeeeeeeeeeee4e....
        ....e4eeeeeeeeeeeeeeee4e....
        ..1.e4eeeeeeeeeeeeeeee4e.1..
        ....e4e4eee4eeee4eee4e4e....
        ....e4eeeeeeeeeeeeeeee4e....
        ....ee4444444444444444ee....
        ..1..eeeeeeeeeeeeeeeeee..1..
        ..1......................1..
        ..1......................1..
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
        ..1.e4eeeeeeeeeeeeeeee4e.1..
        ....e4eeeeeeeeeeeeeeee4e....
        ....e4eeeeeeeeeeeeeeee4e....
        ....e4eeeeeeeeeeeeeeee4e....
        ..1.e4e4eee4eeee4eee4e4e.1..
        ..1.e4eeeeeeeeeeeeeeee4e.1..
        ..1.ee4444444444444444ee.1..
        .....eeeeeeeeeeeeeeeeee.....
        ..1......................1..
        ............................
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
        ....e4eeeeeeeeeeeeeeee4e....
        ....e4eeeeeeeeeeeeeeee4e....
        ....e4eeeeeeeeeeeeeeee4e....
        ..1.e4eeeeeeeeeeeeeeee4e.1..
        ....e4e4eee4eeee4eee4e4e....
        ....e4eeeeeeeeeeeeeeee4e....
        ....ee4444444444444444ee....
        ..1..eeeeeeeeeeeeeeeeee..1..
        ..1......................1..
        ..1......................1..
        ............................
        ............................
        `],
    200,
    true
    )
    controller.moveSprite(Ship, 50, 50)
    Ship.z = 5
    scene.cameraFollowSprite(Ship)
    CannonsNorth()
    for (let value of tiles.getTilesByType(myTiles.tile4)) {
        tiles.placeOnRandomTile(Ship, myTiles.tile4)
        tiles.setTileAt(value, myTiles.tile1)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipDirection = 1
    OrientShip()
    CannonsEast()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (game.runtime() > ReloadCannon + 1000) {
        ReloadCannon = game.runtime()
        if (ShipDirection == 0) {
            Fire_Cannons_North()
        } else if (ShipDirection == 1) {
            Fire_Cannons_East()
        } else if (ShipDirection == 2) {
            Fire_Cannons_South()
        } else {
            Fire_Cannons_West()
        }
        for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
            value.startEffect(effects.fire, 50)
        }
    }
})
function OrientCannons_North () {
    if (Cannon_Count == 5) {
        cannon1.setPosition(Ship.x + -5, Ship.y + -10)
        cannon2.setPosition(Ship.x + 5, Ship.y + -10)
        cannon3.setPosition(Ship.x + -9, Ship.y + 10)
        cannon4.setPosition(Ship.x + 9, Ship.y + 10)
        cannon5.setPosition(Ship.x + 0, Ship.y + 15)
    } else if (Cannon_Count == 4) {
        cannon1.setPosition(Ship.x + -5, Ship.y + -10)
        cannon2.setPosition(Ship.x + 5, Ship.y + -10)
        cannon3.setPosition(Ship.x + -9, Ship.y + 10)
        cannon4.setPosition(Ship.x + 9, Ship.y + 10)
    } else {
        cannon1.setPosition(Ship.x + -5, Ship.y + -10)
        cannon2.setPosition(Ship.x + 5, Ship.y + -10)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipDirection = 2
    OrientShip()
    CannonsSouth()
})
function OrientCannons_East () {
    if (Cannon_Count == 5) {
        cannon1.setPosition(Ship.x + 10, Ship.y + -5)
        cannon2.setPosition(Ship.x + 10, Ship.y + 5)
        cannon3.setPosition(Ship.x + -10, Ship.y + -9)
        cannon4.setPosition(Ship.x + -10, Ship.y + 9)
        cannon5.setPosition(Ship.x + -15, Ship.y + 0)
    } else if (Cannon_Count == 4) {
        cannon1.setPosition(Ship.x + 10, Ship.y + -5)
        cannon2.setPosition(Ship.x + 10, Ship.y + 5)
        cannon3.setPosition(Ship.x + -10, Ship.y + -9)
        cannon4.setPosition(Ship.x + -10, Ship.y + 9)
    } else {
        cannon1.setPosition(Ship.x + 10, Ship.y + -5)
        cannon2.setPosition(Ship.x + 10, Ship.y + 5)
    }
}
function rowBoat () {
    for (let value of tiles.getTilesByType(myTiles.tile3)) {
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
        tiles.placeOnRandomTile(RowBoat, myTiles.tile3)
        tiles.setTileAt(value, myTiles.tile1)
    }
}
function level1 () {
    tiles.setTilemap(tiles.createTilemap(hex`1e001e0002020202020202020202020202080808080808020202020202020202020202020202020202020808080807010101010101090808080202020202020202020202020202070101010101010101010101010101010908020202020202020202020207010101010101010101010101010101010101090202020202020202020701010101010101010101030101010101010101010a020202020202020701010101010101010101010101010101010101010109020202020202070101010101010101010101010101010101010101010101090202020207010101010101010101010101010101010101010101010101010a02020701010101010103010101010101010101010101010101010101010a02060101010101010101010101010101010101010101010101010101010a02060101010101010101010101010b0c0c0501010101010101010101010a020601010101010101010101010b0202020205010101010101010101010a0206010101010101010101010b020202020202050101010101030101010a0206010101010101010101010a020202020202060101010101010101010a0206010101010101010101010a020202020202060101010101010101010a02060101010101030101010109020202020202070101010101010101010a020601010101010101010101010a0202020207010101010101010101010a02060101010101010101010101090808080701010101010101010101010a02060101010101010101010101010101010101010101010101010101010a02060101010101010101010101010101010101010101010301010101010a02060101010101010101010101010101010101010101010101010101010a02060101010101010101010101010101010101010101010101010101010a02060101010101010101010101010101010101010101010101010101010a02020501010101010101010101010101010101010101010101010101010a02020205010101010101010101010101010101010101010101010101010a02020202050101010101010101010101010101010101010101010101010a020202020205010101010101010101010101010101010101010101010b020202020202020501010101010101010101010101010101010101010b020202020202020202050101010101010101010101010101010101010b020202020202020202020205010101010101040101010101010101010b0202020202`, img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12], TileScale.Sixteen))
    scene.setBackgroundColor(9)
    ShipInit()
    rowBoat()
}
function Fire_Cannons_West () {
    if (Cannon_Count == 5) {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, -100, -60)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, -100, 60)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon3, 0, 100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon4, 0, -100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon5, 100, 0)
    } else if (Cannon_Count == 4) {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, -100, -60)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, -100, 60)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon3, 0, 100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon4, 0, -100)
    } else {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, -100, -60)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, -100, 60)
    }
}
function OrientCannons_South () {
    if (Cannon_Count == 5) {
        cannon1.setPosition(Ship.x + 5, Ship.y + 10)
        cannon2.setPosition(Ship.x + -5, Ship.y + 10)
        cannon3.setPosition(Ship.x + 9, Ship.y + -10)
        cannon4.setPosition(Ship.x + -9, Ship.y + -10)
        cannon5.setPosition(Ship.x + 0, Ship.y + -15)
    } else if (Cannon_Count == 4) {
        cannon1.setPosition(Ship.x + 5, Ship.y + 10)
        cannon2.setPosition(Ship.x + -5, Ship.y + 10)
        cannon3.setPosition(Ship.x + 9, Ship.y + -10)
        cannon4.setPosition(Ship.x + -9, Ship.y + -10)
    } else {
        cannon1.setPosition(Ship.x + 5, Ship.y + 10)
        cannon2.setPosition(Ship.x + -5, Ship.y + 10)
    }
}
function OrientCannons_West () {
    if (Cannon_Count == 5) {
        cannon1.setPosition(Ship.x + -10, Ship.y + -5)
        cannon2.setPosition(Ship.x + -10, Ship.y + 5)
        cannon3.setPosition(Ship.x + 10, Ship.y + 9)
        cannon4.setPosition(Ship.x + 10, Ship.y + -9)
        cannon5.setPosition(Ship.x + 15, Ship.y + 0)
    } else if (Cannon_Count == 4) {
        cannon1.setPosition(Ship.x + -10, Ship.y + -5)
        cannon2.setPosition(Ship.x + -10, Ship.y + 5)
        cannon3.setPosition(Ship.x + 10, Ship.y + 9)
        cannon4.setPosition(Ship.x + 10, Ship.y + -9)
    } else {
        cannon1.setPosition(Ship.x + -10, Ship.y + -5)
        cannon2.setPosition(Ship.x + -10, Ship.y + 5)
    }
}
function Fire_Cannons_East () {
    if (Cannon_Count == 5) {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, 100, -60)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, 100, 60)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon3, 0, -100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon4, 0, 100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon5, -100, 0)
    } else if (Cannon_Count == 4) {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, 100, -60)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, 100, 60)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon3, 0, -100)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon4, 0, 100)
    } else {
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon1, 100, -60)
        CannonBall = sprites.createProjectileFromSprite(img`
            f f 
            f f 
            `, cannon2, 100, 60)
    }
}
let RowboatProjectile: Sprite = null
let RowBoat: Sprite = null
let ReloadCannon = 0
let CannonBall: Sprite = null
let MiniMap: Sprite = null
let myMinimap: minimap.Minimap = null
let NetReload = 0
let Net: Sprite = null
let cannon5: Sprite = null
let cannon4: Sprite = null
let cannon3: Sprite = null
let cannon2: Sprite = null
let cannon1: Sprite = null
let Cannon_Count = 0
let Ship: Sprite = null
let ShipDirection = 0
level1()
game.onUpdate(function () {
    if (ShipDirection == 0) {
        OrientCannons_North()
    } else if (ShipDirection == 1) {
        OrientCannons_East()
    } else if (ShipDirection == 2) {
        OrientCannons_South()
    } else {
        OrientCannons_West()
    }
})
game.onUpdateInterval(1000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Math.abs(Ship.x - value.x) < 90 && (Math.abs(Ship.x - value.x) > 25 && (Math.abs(Ship.y - value.y) < 90 && Math.abs(Ship.y - value.y) > 25))) {
            value.follow(Ship, 25)
        } else {
            value.follow(null)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Math.abs(Ship.x - value.x) < 70 && (Math.abs(Ship.x - value.x) > 0 && (Math.abs(Ship.y - value.y) < 70 && Math.abs(Ship.y - value.y) > 0))) {
            RowboatProjectile = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, value, Ship.x - value.x, Ship.y - value.y)
            RowboatProjectile.setKind(SpriteKind.EnemyProjectile)
        } else {
        	
        }
    }
})
