namespace SpriteKind {
    export const Cannon = SpriteKind.create()
    export const HUD = SpriteKind.create()
    export const Net = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
    export const Rowboat = SpriteKind.create()
    export const Treasure = SpriteKind.create()
    export const Number = SpriteKind.create()
}
function Set_Cannons () {
    for (let value of sprites.allOfKind(SpriteKind.Cannon)) {
        value.destroy()
    }
    if (Owns_Port_Cannon == true) {
        if (ShipDirection == North) {
            Port_Cannon = sprites.create(img`
                . . e 4 f f 
                b b b b f e 
                b b b b f e 
                . . e 4 f f 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == East) {
            Port_Cannon = sprites.create(img`
                . b b . 
                . b b . 
                e b b e 
                4 b b 4 
                f f f f 
                f e e f 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == South) {
            Port_Cannon = sprites.create(img`
                f f 4 e . . 
                e f b b b b 
                e f b b b b 
                f f 4 e . . 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == West) {
            Port_Cannon = sprites.create(img`
                f e e f 
                f f f f 
                4 b b 4 
                e b b e 
                . b b . 
                . b b . 
                `, SpriteKind.Cannon)
        }
        Port_Cannon.z = 6
    }
    if (Owns_Starboard_Cannon == true) {
        if (ShipDirection == North) {
            Starboard_Cannon = sprites.create(img`
                f f 4 e . . 
                e f b b b b 
                e f b b b b 
                f f 4 e . . 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == East) {
            Starboard_Cannon = sprites.create(img`
                f e e f 
                f f f f 
                4 b b 4 
                e b b e 
                . b b . 
                . b b . 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == South) {
            Starboard_Cannon = sprites.create(img`
                . . e 4 f f 
                b b b b f e 
                b b b b f e 
                . . e 4 f f 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == West) {
            Starboard_Cannon = sprites.create(img`
                . b b . 
                . b b . 
                e b b e 
                4 b b 4 
                f f f f 
                f e e f 
                `, SpriteKind.Cannon)
        }
        Starboard_Cannon.z = 6
    }
    if (Owns_Port_Bow_Cannon == true) {
        if (ShipDirection == North) {
            Port_Bow_Cannon = sprites.create(img`
                b b . . e e 
                b b b e e e 
                . b b b e 4 
                . e b b b f 
                e e e b f f 
                e e 4 f f e 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == East) {
            Port_Bow_Cannon = sprites.create(img`
                e e . . b b 
                e e e b b b 
                4 e b b b . 
                f b b b e . 
                f f b e e e 
                e f f 4 e e 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == South) {
            Port_Bow_Cannon = sprites.create(img`
                e f f 4 e e 
                f f b e e e 
                f b b b e . 
                4 e b b b . 
                e e e b b b 
                e e . . b b 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == West) {
            Port_Bow_Cannon = sprites.create(img`
                e e 4 f f e 
                e e e b f f 
                . e b b b f 
                . b b b e 4 
                b b b e e e 
                b b . . e e 
                `, SpriteKind.Cannon)
        }
        Port_Bow_Cannon.z = 6
    }
    if (Owns_Starboard_Bow_Cannon == true) {
        if (ShipDirection == North) {
            Starboard_Bow_Cannon = sprites.create(img`
                e e . . b b 
                e e e b b b 
                4 e b b b . 
                f b b b e . 
                f f b e e e 
                e f f 4 e e 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == East) {
            Starboard_Bow_Cannon = sprites.create(img`
                e f f 4 e e 
                f f b e e e 
                f b b b e . 
                4 e b b b . 
                e e e b b b 
                e e . . b b 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == South) {
            Starboard_Bow_Cannon = sprites.create(img`
                e e 4 f f e 
                e e e b f f 
                . e b b b f 
                . b b b e 4 
                b b b e e e 
                b b . . e e 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == West) {
            Starboard_Bow_Cannon = sprites.create(img`
                b b . . e e 
                b b b e e e 
                . b b b e 4 
                . e b b b f 
                e e e b f f 
                e e 4 f f e 
                `, SpriteKind.Cannon)
        }
        Starboard_Bow_Cannon.z = 6
    }
    if (Owns_Stern_Cannon == true) {
        if (ShipDirection == North) {
            Stern_Cannon = sprites.create(img`
                f e e f 
                f f f f 
                4 b b 4 
                e b b e 
                . b b . 
                . b b . 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == East) {
            Stern_Cannon = sprites.create(img`
                . . e 4 f f 
                b b b b f e 
                b b b b f e 
                . . e 4 f f 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == South) {
            Stern_Cannon = sprites.create(img`
                . b b . 
                . b b . 
                e b b e 
                4 b b 4 
                f f f f 
                f e e f 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == West) {
            Stern_Cannon = sprites.create(img`
                f f 4 e . . 
                e f b b b b 
                e f b b b b 
                f f 4 e . . 
                `, SpriteKind.Cannon)
        }
        Stern_Cannon.z = 6
    }
}
function Init_Ship () {
    ShipDirection = North
    Ship = sprites.create(img`
        ...........ee...........
        ..........eeee..........
        .........ee44ee.........
        ........eee44eee........
        .......eee4ee4eee.......
        ......eee4eeee4eee......
        .....eee4e4ee4e4eee.....
        ....eee4eeeeeeee4eee....
        ...eee4eeeeeeeeee4eee...
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
        ........................
        ........................
        ........................
        ...........11...........
        ...........ee...........
        ..........eeee..........
        ........1ee44ee1........
        ........eee44eee........
        .......eee4ee4eee.......
        .....1eee4eeee4eee1.....
        .....eee4e4ee4e4eee.....
        ....eee4eeeeeeee4eee....
        ..1eee4eeeeeeeeee4eee1..
        ..eee4e4eeeeeeee4e4eee..
        ..ee4eeeeeeeeeeeeee4ee..
        .1e4ee44eeeeeeeeeeee4e1.
        ..e4e4e44eeeee44444e4e..
        ..e4e44e4eeeeee444d44e..
        .1e4ee44eeeeeeee4ddd4e1.
        ..e4eeeeeeeeeeee4ded4e..
        ..e4eeeeeeffffee4edede..
        2121212121feef1212121212
        fffffffffffeefffffffffff
        ..e4eeeeeeffffee4ded4d..
        .1e4eeeeeeeeeee44ede4d1.
        ..e4eeeeeeeeeeee4dedde..
        ..e4eeeeeeeeeeeeedde4e..
        .1e4e4eeeeeeeeeeee4e4e1.
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4eeeeeeeeeeeeeeee4e..
        .1e4eeeeeeeeeeeeeeee4e1.
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4e4eee4eeee4eee4e4e..
        .1e4eeeeeeeeeeeeeeee4e1.
        ..ee4444444444444444ee..
        ...eeeeeeeeeeeeeeeeee...
        .1....................1.
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........1ee1..........
        ..........eeee..........
        .........ee44ee.........
        .......1eee44eee1.......
        .......eee4ee4eee.......
        ......eee4eeee4eee......
        ....1eee4e4ee4e4eee1....
        ....eee4eeeeeeee4eee....
        ...eee4eeeeeeeeee4eee...
        .1eee4e4eeeeeeee4e4eee1.
        ..ee4eeeeeeeeeeeeee4ee..
        ..e4ee44eeeeeeeeeeee4e..
        .1e4e4e44eeeee44444e4e1.
        ..e4e44e4eeeeee444d44e..
        ..e4ee44eeeeeeee4ddd4e..
        .1e4eeeeeeeeeeee4ded4e1.
        ..e4eeeeeeffffee4edede..
        2121212121feef1212121212
        fffffffffffeefffffffffff
        ..e4eeeeeeffffee4ded4d..
        ..e4eeeeeeeeeee44ede4d..
        .1e4eeeeeeeeeeee4dedde1.
        ..e4eeeeeeeeeeeeedde4e..
        ..e4e4eeeeeeeeeeee4e4e..
        .1e4eeeeeeeeeeeeeeee4e1.
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4eeeeeeeeeeeeeeee4e..
        .1e4eeeeeeeeeeeeeeee4e1.
        ..e4e4eee4eeee4eee4e4e..
        ..e4eeeeeeeeeeeeeeee4e..
        .1ee4444444444444444ee1.
        ...eeeeeeeeeeeeeeeeee...
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ...........ee...........
        .........1eeee1.........
        .........ee44ee.........
        ........eee44eee........
        ......1eee4ee4eee1......
        ......eee4eeee4eee......
        .....eee4e4ee4e4eee.....
        ...1eee4eeeeeeee4eee1...
        ...eee4eeeeeeeeee4eee...
        ..eee4e4eeeeeeee4e4eee..
        .1ee4eeeeeeeeeeeeee4ee1.
        ..e4ee44eeeeeeeeeeee4e..
        ..e4e4e44eeeee44444e4e..
        .1e4e44e4eeeeee444d44e1.
        ..e4ee44eeeeeeee4ddd4e..
        ..e4eeeeeeeeeeee4ded4e..
        .1e4eeeeeeffffee4edede1.
        2121212121feef1212121212
        fffffffffffeefffffffffff
        .1e4eeeeeeffffee4ded4d1.
        ..e4eeeeeeeeeee44ede4d..
        ..e4eeeeeeeeeeee4dedde..
        .1e4eeeeeeeeeeeeedde4e1.
        ..e4e4eeeeeeeeeeee4e4e..
        ..e4eeeeeeeeeeeeeeee4e..
        .1e4eeeeeeeeeeeeeeee4e1.
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4eeeeeeeeeeeeeeee4e..
        .1e4e4eee4eeee4eee4e4e1.
        ..e4eeeeeeeeeeeeeeee4e..
        ..ee4444444444444444ee..
        .1.eeeeeeeeeeeeeeeeee.1.
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    controller.moveSprite(Ship, 50, 50)
    Ship.z = 5
    scene.cameraFollowSprite(Ship)
    Set_Cannons()
    for (let value of tiles.getTilesByType(myTiles.tile4)) {
        tiles.placeOnRandomTile(Ship, myTiles.tile4)
        tiles.setTileAt(value, myTiles.tile1)
    }
    HUDsprites()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipDirection = North
    OrientShip()
    Set_Cannons()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyProjectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    otherSprite.startEffect(effects.warmRadial)
    if (Ship_Integrity > 1) {
        Ship_Integrity += -1
    } else {
        Ship.destroy(effects.ashes, 500)
    }
    HUDdigits()
})
function OrientShip () {
    if (ShipDirection == North) {
        animation.runImageAnimation(
        Ship,
        [img`
            ........................
            ........................
            ........................
            ...........11...........
            ...........ee...........
            ..........eeee..........
            ........1ee44ee1........
            ........eee44eee........
            .......eee4ee4eee.......
            .....1eee4eeee4eee1.....
            .....eee4e4ee4e4eee.....
            ....eee4eeeeeeee4eee....
            ..1eee4eeeeeeeeee4eee1..
            ..eee4e4eeeeeeee4e4eee..
            ..ee4eeeeeeeeeeeeee4ee..
            .1e4ee44eeeeeeeeeeee4e1.
            ..e4e4e44eeeee44444e4e..
            ..e4e44e4eeeeee444d44e..
            .1e4ee44eeeeeeee4ddd4e1.
            ..e4eeeeeeeeeeee4ded4e..
            ..e4eeeeeeffffee4edede..
            2121212121feef1212121212
            fffffffffffeefffffffffff
            ..e4eeeeeeffffee4ded4d..
            .1e4eeeeeeeeeee44ede4d1.
            ..e4eeeeeeeeeeee4dedde..
            ..e4eeeeeeeeeeeeedde4e..
            .1e4e4eeeeeeeeeeee4e4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4e4eee4eeee4eee4e4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..ee4444444444444444ee..
            ...eeeeeeeeeeeeeeeeee...
            .1....................1.
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........1ee1..........
            ..........eeee..........
            .........ee44ee.........
            .......1eee44eee1.......
            .......eee4ee4eee.......
            ......eee4eeee4eee......
            ....1eee4e4ee4e4eee1....
            ....eee4eeeeeeee4eee....
            ...eee4eeeeeeeeee4eee...
            .1eee4e4eeeeeeee4e4eee1.
            ..ee4eeeeeeeeeeeeee4ee..
            ..e4ee44eeeeeeeeeeee4e..
            .1e4e4e44eeeee44444e4e1.
            ..e4e44e4eeeeee444d44e..
            ..e4ee44eeeeeeee4ddd4e..
            .1e4eeeeeeeeeeee4ded4e1.
            ..e4eeeeeeffffee4edede..
            2121212121feef1212121212
            fffffffffffeefffffffffff
            ..e4eeeeeeffffee4ded4d..
            ..e4eeeeeeeeeee44ede4d..
            .1e4eeeeeeeeeeee4dedde1.
            ..e4eeeeeeeeeeeeedde4e..
            ..e4e4eeeeeeeeeeee4e4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4e4eee4eeee4eee4e4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1ee4444444444444444ee1.
            ...eeeeeeeeeeeeeeeeee...
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ...........ee...........
            .........1eeee1.........
            .........ee44ee.........
            ........eee44eee........
            ......1eee4ee4eee1......
            ......eee4eeee4eee......
            .....eee4e4ee4e4eee.....
            ...1eee4eeeeeeee4eee1...
            ...eee4eeeeeeeeee4eee...
            ..eee4e4eeeeeeee4e4eee..
            .1ee4eeeeeeeeeeeeee4ee1.
            ..e4ee44eeeeeeeeeeee4e..
            ..e4e4e44eeeee44444e4e..
            .1e4e44e4eeeeee444d44e1.
            ..e4ee44eeeeeeee4ddd4e..
            ..e4eeeeeeeeeeee4ded4e..
            .1e4eeeeeeffffee4edede1.
            2121212121feef1212121212
            fffffffffffeefffffffffff
            .1e4eeeeeeffffee4ded4d1.
            ..e4eeeeeeeeeee44ede4d..
            ..e4eeeeeeeeeeee4dedde..
            .1e4eeeeeeeeeeeeedde4e1.
            ..e4e4eeeeeeeeeeee4e4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4e4eee4eeee4eee4e4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..ee4444444444444444ee..
            .1.eeeeeeeeeeeeeeeeee.1.
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
    } else if (ShipDirection == East) {
        animation.runImageAnimation(
        Ship,
        [img`
            .................f2.....................
            ...1..1..1..1..1.f1..1..1...............
            .....eeeeeeeeeeeef2eeeeeeee1............
            ....ee44444444444f1444444eee............
            ....e4eeeeeeeeeeef2eeeeee4eee...........
            ....e4e4eeee4eeeef1eee44ee4eee1.........
            ....e4eeeeeeeeeeef2ee44e4ee4eee.........
            ....e4eeeeeeeeeeef1ee4e44e4e4eee........
            ....e4eeeeeeeeeeef2eee44eeeee4eee1......
            ....e4e4eeeeeeeeef1eeeeeeeeeee4eee......
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee.....
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee1...
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee1...
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee.....
            ....e4e4eeeeeeeeef1eeee4eeeeee4eee......
            ....e4eeeeeeeee4ef2eee44eeeee4eee1......
            ....e4eeeeeeee444f144444ee4e4eee........
            ....e4eeeeeeeddedf2edd44eee4eee.........
            ....e4e4eeee4dedef1dedd4ee4eee1.........
            ....e4eeeeeeeededf2edd4ee4eee...........
            ....ee44444444d44f1d44444eee............
            .....eeeeeeeeeeddf2eeeeeeee1............
            ...1..1..1..1..1.f1..1..1...............
            .................f2.....................
            `,img`
            .................f2.....................
            .....1..1..1..1..f1.1..1..1.............
            .....eeeeeeeeeeeef2eeeeeeee.............
            ....ee44444444444f1444444eee............
            ....e4eeeeeeeeeeef2eeeeee4eee1..........
            ....e4e4eeee4eeeef1eee44ee4eee..........
            ....e4eeeeeeeeeeef2ee44e4ee4eee.........
            ....e4eeeeeeeeeeef1ee4e44e4e4eee1.......
            ....e4eeeeeeeeeeef2eee44eeeee4eee.......
            ....e4e4eeeeeeeeef1eeeeeeeeeee4eee......
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee1....
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee....
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee....
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee1....
            ....e4e4eeeeeeeeef1eeee4eeeeee4eee......
            ....e4eeeeeeeee4ef2eee44eeeee4eee.......
            ....e4eeeeeeee444f144444ee4e4eee1.......
            ....e4eeeeeeeddedf2edd44eee4eee.........
            ....e4e4eeee4dedef1dedd4ee4eee..........
            ....e4eeeeeeeededf2edd4ee4eee1..........
            ....ee44444444d44f1d44444eee............
            .....eeeeeeeeeeddf2eeeeeeee.............
            .....1..1..1..1..f1.1..1..1.............
            .................f2.....................
            `,img`
            .................f2.....................
            ....1..1..1..1..1f11..1..1..............
            .....eeeeeeeeeeeef2eeeeeeee.............
            ....ee44444444444f1444444eee1...........
            ....e4eeeeeeeeeeef2eeeeee4eee...........
            ....e4e4eeee4eeeef1eee44ee4eee..........
            ....e4eeeeeeeeeeef2ee44e4ee4eee1........
            ....e4eeeeeeeeeeef1ee4e44e4e4eee........
            ....e4eeeeeeeeeeef2eee44eeeee4eee.......
            ....e4e4eeeeeeeeef1eeeeeeeeeee4eee1.....
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee.....
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee....
            ....e4eeeeeeeeeefeefeeeeeeeeeeee44ee....
            ....e4eeeeeeeeeeffffeeeeeeeee4e4eee.....
            ....e4e4eeeeeeeeef1eeee4eeeeee4eee1.....
            ....e4eeeeeeeee4ef2eee44eeeee4eee.......
            ....e4eeeeeeee444f144444ee4e4eee........
            ....e4eeeeeeeddedf2edd44eee4eee1........
            ....e4e4eeee4dedef1dedd4ee4eee..........
            ....e4eeeeeeeededf2edd4ee4eee...........
            ....ee44444444d44f1d44444eee1...........
            .....eeeeeeeeeeddf2eeeeeeee.............
            ....1..1..1..1..1f11..1..1..............
            .................f2.....................
            `],
        200,
        true
        )
    } else if (ShipDirection == South) {
        animation.runImageAnimation(
        Ship,
        [img`
            ........................
            ........................
            ........................
            .1....................1.
            ...eeeeeeeeeeeeeeeeee...
            ..ee4444444444444444ee..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4e4eee4eeee4eee4e4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4e4eeeeeeeeeeee4e4e1.
            ..e4eddeeeeeeeeeeeee4e..
            ..edded4eeeeeeeeeeee4e..
            .1d4ede44eeeeeeeeeee4e1.
            ..d4ded4eeffffeeeeee4e..
            fffffffffffeefffffffffff
            2121212121feef1212121212
            ..edede4eeffffeeeeee4e.1
            ..e4ded4eeeeeeeeeeee4e..
            .1e4ddd4eeeeeeee44ee4e1.
            ..e44d444eeeeee4e44e4e..
            ..e4e44444eeeee44e4e4e..
            .1e4eeeeeeeeeeee44ee4e1.
            ..ee4eeeeeeeeeeeeee4ee..
            ..eee4e4eeeeeeee4e4eee..
            ..1eee4eeeeeeeeee4eee1..
            ....eee4eeeeeeee4eee....
            .....eee4e4ee4e4eee.....
            .....1eee4eeee4eee1.....
            .......eee4ee4eee.......
            ........eee44eee........
            ........1ee44ee1........
            ..........eeee..........
            ...........ee...........
            ...........11...........
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ...eeeeeeeeeeeeeeeeee...
            .1ee4444444444444444ee1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4e4eee4eeee4eee4e4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4e4eeeeeeeeeeee4e4e..
            ..e4eddeeeeeeeeeeeee4e..
            .1edded4eeeeeeeeeeee4e1.
            ..d4ede44eeeeeeeeeee4e..
            ..d4ded4eeffffeeeeee4e..
            fffffffffffeefffffffffff
            2121212121feef1212121212
            ..edede4eeffffeeeeee4e.1
            .1e4ded4eeeeeeeeeeee4e1.
            ..e4ddd4eeeeeeee44ee4e..
            ..e44d444eeeeee4e44e4e..
            .1e4e44444eeeee44e4e4e1.
            ..e4eeeeeeeeeeee44ee4e..
            ..ee4eeeeeeeeeeeeee4ee..
            .1eee4e4eeeeeeee4e4eee1.
            ...eee4eeeeeeeeee4eee...
            ....eee4eeeeeeee4eee....
            ....1eee4e4ee4e4eee1....
            ......eee4eeee4eee......
            .......eee4ee4eee.......
            .......1eee44eee1.......
            .........ee44ee.........
            ..........eeee..........
            ..........1ee1..........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            .1.eeeeeeeeeeeeeeeeee.1.
            ..ee4444444444444444ee..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4e4eee4eeee4eee4e4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4e4eeeeeeeeeeee4e4e..
            .1e4eddeeeeeeeeeeeee4e1.
            ..edded4eeeeeeeeeeee4e..
            ..d4ede44eeeeeeeeeee4e..
            .1d4ded4eeffffeeeeee4e1.
            fffffffffffeefffffffffff
            2121212121feef1212121212
            .1edede4eeffffeeeeee4e11
            ..e4ded4eeeeeeeeeeee4e..
            ..e4ddd4eeeeeeee44ee4e..
            .1e44d444eeeeee4e44e4e1.
            ..e4e44444eeeee44e4e4e..
            ..e4eeeeeeeeeeee44ee4e..
            .1ee4eeeeeeeeeeeeee4ee1.
            ..eee4e4eeeeeeee4e4eee..
            ...eee4eeeeeeeeee4eee...
            ...1eee4eeeeeeee4eee1...
            .....eee4e4ee4e4eee.....
            ......eee4eeee4eee......
            ......1eee4ee4eee1......
            ........eee44eee........
            .........ee44ee.........
            .........1eeee1.........
            ...........ee...........
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
    } else if (ShipDirection == West) {
        animation.runImageAnimation(
        Ship,
        [img`
            .....................2f.................
            ...............1..1..1f.1..1..1..1..1...
            ............1eeeeeeee2fddeeeeeeeeee.....
            ............eee44444d1f44d44444444ee....
            ...........eee4ee4dde2fdedeeeeeeee4e....
            .........1eee4ee4dded1feded4eeee4e4e....
            .........eee4eee44dde2fdeddeeeeeee4e....
            ........eee4e4ee444441f444eeeeeeee4e....
            ......1eee4eeeee44eee2fe4eeeeeeeee4e....
            ......eee4eeeeee4eeee1feeeeeeeee4e4e....
            .....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            ...1ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            ...1ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            .....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            ......eee4eeeeeeeeeee1feeeeeeeee4e4e....
            ......1eee4eeeee44eee2feeeeeeeeeee4e....
            ........eee4e4e44e4ee1feeeeeeeeeee4e....
            .........eee4ee4e44ee2feeeeeeeeeee4e....
            .........1eee4ee44eee1feeee4eeee4e4e....
            ...........eee4eeeeee2feeeeeeeeeee4e....
            ............eee4444441f44444444444ee....
            ............1eeeeeeee2feeeeeeeeeeee.....
            ...............1..1..1f.1..1..1..1..1...
            .....................2f.................
            `,img`
            .....................2f.................
            .............1..1..1.1f..1..1..1..1.....
            .............eeeeeeee2fddeeeeeeeeee.....
            ............eee44444d1f44d44444444ee....
            ..........1eee4ee4dde2fdedeeeeeeee4e....
            ..........eee4ee4dded1feded4eeee4e4e....
            .........eee4eee44dde2fdeddeeeeeee4e....
            .......1eee4e4ee444441f444eeeeeeee4e....
            .......eee4eeeee44eee2fe4eeeeeeeee4e....
            ......eee4eeeeee4eeee1feeeeeeeee4e4e....
            ....1eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            ....ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            ....ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            ....1eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            ......eee4eeeeeeeeeee1feeeeeeeee4e4e....
            .......eee4eeeee44eee2feeeeeeeeeee4e....
            .......1eee4e4e44e4ee1feeeeeeeeeee4e....
            .........eee4ee4e44ee2feeeeeeeeeee4e....
            ..........eee4ee44eee1feeee4eeee4e4e....
            ..........1eee4eeeeee2feeeeeeeeeee4e....
            ............eee4444441f44444444444ee....
            .............eeeeeeee2feeeeeeeeeeee.....
            .............1..1..1.1f..1..1..1..1.....
            .....................2f.................
            `,img`
            .....................2f.................
            ..............1..1..11f1..1..1..1..1....
            .............eeeeeeee2fddeeeeeeeeee.....
            ...........1eee44444d1f44d44444444ee....
            ...........eee4ee4dde2fdedeeeeeeee4e....
            ..........eee4ee4dded1feded4eeee4e4e....
            ........1eee4eee44dde2fdeddeeeeeee4e....
            ........eee4e4ee444441f444eeeeeeee4e....
            .......eee4eeeee44eee2fe4eeeeeeeee4e....
            .....1eee4eeeeee4eeee1feeeeeeeee4e4e....
            .....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            ....ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            ....ee44eeeeeeeeeeeefeefeeeeeeeeee4e....
            .....eee4e4eeeeeeeeeffffeeeeeeeeee4e....
            .....1eee4eeeeeeeeeee1feeeeeeeee4e4e....
            .......eee4eeeee44eee2feeeeeeeeeee4e....
            ........eee4e4e44e4ee1feeeeeeeeeee4e....
            ........1eee4ee4e44ee2feeeeeeeeeee4e....
            ..........eee4ee44eee1feeee4eeee4e4e....
            ...........eee4eeeeee2feeeeeeeeeee4e....
            ...........1eee4444441f44444444444ee....
            .............eeeeeeee2feeeeeeeeeeee.....
            ..............1..1..11f1..1..1..1..1....
            .....................2f.................
            `],
        200,
        true
        )
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
        if (ShipDirection == North) {
            Net.setPosition(Ship.x + 19, Ship.y)
            animation.runImageAnimation(
            Net,
            [img`
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                d . . . . . . . . . . . . . . . 
                . d . . . . . . . . . . . . . . 
                d d . . . . . . . . . . . . . . 
                . d . . . . . . . . . . . . . . 
                d . . . . . . . . . . . . . . . 
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
                d d d . . . . . . . . . . . . . 
                . d . d . . . . . . . . . . . . 
                d . d . d . . . . . . . . . . . 
                . d . d d . . . . . . . . . . . 
                d . d . d . . . . . . . . . . . 
                . d . d . . . . . . . . . . . . 
                d d d . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                d d d d d d d . . . . . . . . . 
                . d . d . d . d . . . . . . . . 
                d . d . d . d . d . . . . . . . 
                . d . d . d . d d . . . . . . . 
                d . d . d . d . d . . . . . . . 
                . d . d . d . d d . . . . . . . 
                d . d . d . d . d . . . . . . . 
                . d . d . d . d . . . . . . . . 
                d d d d d d d . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . d d d d d d d . . . . . . . . 
                d . d . d . d . d . . . . . . . 
                . d . d . d . d . d . . . . . . 
                d . d . d . d . d . d . . . . . 
                . d . d . d . d . d . d . . . . 
                d . d . d . d . d . d d . . . . 
                . d . d . d . d . d . d . . . . 
                d . d . d . d . d . d . . . . . 
                . d . d . d . d . d . . . . . . 
                d . d . d . d . d . . . . . . . 
                . d d d d d d d . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
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
        } else if (ShipDirection == East) {
            Net.setPosition(Ship.x, Ship.y + 19)
            animation.runImageAnimation(
            Net,
            [img`
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
                `,img`
                . . . . . . d . d . d . . . . . 
                . . . . . . . d d d . . . . . . 
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
                `,img`
                . . . . . d . d . d . d . . . . 
                . . . . . d d . d . d d . . . . 
                . . . . . d . d . d . d . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . . . d d d . . . . . . 
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
                `,img`
                . . . d d . d . d . d . d d . . 
                . . . d . d . d . d . d . d . . 
                . . . d d . d . d . d . d d . . 
                . . . d . d . d . d . d . d . . 
                . . . d d . d . d . d . d d . . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d d d d d d d . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d d d d d d d . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d d d d d d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d d d d d d d . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d d d d d d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d d d d d d d . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . d . d . d . d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d . d . d . d . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . d . d . d . d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d . d . d . d . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . d . d . . . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . d . d . d . d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d . d . d . d . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . . . d . d . . . . . . 
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
                . . . . . . . . d . . . . . . . 
                . . . . . . . d . d . . . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . . . d . d . . . . . . 
                . . . . . . . . d . . . . . . . 
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
                . . . . . . . . d . . . . . . . 
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
        } else if (ShipDirection == South) {
            Net.setPosition(Ship.x + -19, Ship.y)
            animation.runImageAnimation(
            Net,
            [img`
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . d 
                . . . . . . . . . . . . . . d . 
                . . . . . . . . . . . . . . d d 
                . . . . . . . . . . . . . . d . 
                . . . . . . . . . . . . . . . d 
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
                . . . . . . . . . . . . . d d d 
                . . . . . . . . . . . . d . d . 
                . . . . . . . . . . . d . d . d 
                . . . . . . . . . . . d d . d . 
                . . . . . . . . . . . d . d . d 
                . . . . . . . . . . . . d . d . 
                . . . . . . . . . . . . . d d d 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . d d d d d d d 
                . . . . . . . . d . d . d . d . 
                . . . . . . . d . d . d . d . d 
                . . . . . . . d d . d . d . d . 
                . . . . . . . d . d . d . d . d 
                . . . . . . . d d . d . d . d . 
                . . . . . . . d . d . d . d . d 
                . . . . . . . . d . d . d . d . 
                . . . . . . . . . d d d d d d d 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . d d d d d d d . 
                . . . . . . . d . d . d . d . d 
                . . . . . . d . d . d . d . d . 
                . . . . . d . d . d . d . d . d 
                . . . . d . d . d . d . d . d . 
                . . . . d d . d . d . d . d . d 
                . . . . d . d . d . d . d . d . 
                . . . . . d . d . d . d . d . d 
                . . . . . . d . d . d . d . d . 
                . . . . . . . d . d . d . d . d 
                . . . . . . . . d d d d d d d . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d d d d d d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d d d d d d d . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d d d d d d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d d d d d d d . . . . 
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
        } else if (ShipDirection == West) {
            Net.setPosition(Ship.x, Ship.y + -19)
            animation.runImageAnimation(
            Net,
            [img`
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
                . . . . . . . d d d . . . . . . 
                . . . . . . d . d . d . . . . . 
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
                . . . . . . . d d d . . . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . d . d . d . d . . . . 
                . . . . . d d . d . d d . . . . 
                . . . . . d . d . d . d . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . d d d d d d d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . . d d . d . d . d . d d . . 
                . . . d . d . d . d . d . d . . 
                . . . d d . d . d . d . d d . . 
                . . . d . d . d . d . d . d . . 
                . . . d d . d . d . d . d d . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . d d d d d d d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d d d d d d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d d d d d d d . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d d d d d d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . d d . d . d . d . d . d . d d 
                . d . d . d . d . d . d . d . d 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d d d d d d d . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . d . d . d . d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . d . d . d . d . d . d . d . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d . d . d . d . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . d . d . d . d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . d . d . d . d . d . d . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d . d . d . d . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . d . d . . . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . d . d . d . d . . . . 
                . . . . d . d . d . d . d . . . 
                . . . . . d . d . d . d . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . . . d . d . . . . . . 
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
                . . . . . . . . d . . . . . . . 
                . . . . . . . d . d . . . . . . 
                . . . . . . d . d . d . . . . . 
                . . . . . . . d . d . . . . . . 
                . . . . . . . . d . . . . . . . 
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
                . . . . . . . . d . . . . . . . 
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
        }
        Net.z = 7
    }
})
sprites.onOverlap(SpriteKind.Rowboat, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 500)
    otherSprite.destroy()
})
sprites.onDestroyed(SpriteKind.Rowboat, function (sprite) {
    Treasure_Rowboat = sprites.create(img`
        . . . . . . 
        . . 6 6 . . 
        . . 6 6 . . 
        . 6 6 6 6 . 
        . 6 6 6 6 . 
        6 6 6 6 6 6 
        6 6 6 6 6 6 
        6 6 6 6 6 6 
        6 6 6 6 6 6 
        6 6 6 6 6 6 
        6 6 6 6 6 6 
        6 6 6 6 6 6 
        . 6 6 6 6 . 
        `, SpriteKind.Treasure)
    Treasure_Rowboat.setPosition(sprite.x, sprite.y)
    Treasure_Rowboat.z = 1
})
function NumberFun () {
    Numbers_array = [
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        5 4 . 5 4 
        5 4 . 5 4 
        5 4 . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        . . 5 4 . 
        . 5 5 4 . 
        . . 5 4 . 
        . . 5 4 . 
        . . 5 4 . 
        . . 5 4 . 
        . 5 5 5 4 
        `,
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        . . . 5 4 
        . . 5 4 . 
        . 5 4 . . 
        5 4 . . . 
        5 5 5 5 4 
        `,
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        . . . 5 4 
        . 5 5 4 . 
        . . . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        5 4 . 5 4 
        5 4 . 5 4 
        5 4 . 5 4 
        5 5 5 5 4 
        . . . 5 4 
        . . . 5 4 
        . . . 5 4 
        `,
    img`
        5 5 5 5 4 
        5 . . . . 
        5 5 5 4 . 
        . . . 5 4 
        . . . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        5 4 . . . 
        5 5 5 4 . 
        5 4 . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        5 5 5 5 4 
        . . . 5 4 
        . . . 5 4 
        . . 5 4 . 
        . . 5 4 . 
        . 5 4 . . 
        . 5 4 . . 
        `,
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        5 4 . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        5 4 . 5 4 
        . 5 5 5 4 
        . . . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
        `
    ]
    Integrity_First_Digit = sprites.create(Numbers_array[10], SpriteKind.Number)
    Integrity_Second_Digit = sprites.create(Numbers_array[10], SpriteKind.Number)
    Dubloon_First_Digit = sprites.create(Numbers_array[10], SpriteKind.Number)
    Dubloon_Second_Digit = sprites.create(Numbers_array[10], SpriteKind.Number)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipDirection = West
    OrientShip()
    Set_Cannons()
})
function HUDsprites () {
    Integrity_HUD = sprites.create(img`
        555555555555555555555555555555
        54...........................5
        54......ef...................5
        54.21212e21212f..............5
        54.21212121212f..............5
        54.21212121212f..............5
        54.21212121212f..............5
        54.21212121212f..............5
        54..121212121f...............5
        54...212e212f................5
        54......ef...................5
        54...........................5
        555555555555555555555555555555
        `, SpriteKind.HUD)
    Integrity_HUD.setFlag(SpriteFlag.Ghost, true)
    Integrity_HUD.setFlag(SpriteFlag.RelativeToCamera, true)
    Integrity_HUD.setPosition(scene.screenWidth() - 145, scene.screenHeight() - 8)
    Integrity_HUD.z = 50
    Doubloon_HUD = sprites.create(img`
        555555555555555555555555555554
        4...........................54
        4....5554...................54
        4...555554..................54
        4..55444554.................54
        4.5545454554................54
        4.5544444554................54
        4.5545454554................54
        4..55444554.................54
        4...555554..................54
        4....5554...................54
        4...........................54
        555555555555555555555555555554
        `, SpriteKind.HUD)
    Doubloon_HUD.setFlag(SpriteFlag.Ghost, true)
    Doubloon_HUD.setFlag(SpriteFlag.RelativeToCamera, true)
    Doubloon_HUD.setPosition(scene.screenWidth() - 115, scene.screenHeight() - 8)
    Doubloon_HUD.z = 51
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipDirection = East
    OrientShip()
    Set_Cannons()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (game.runtime() > ReloadCannon + 1000) {
        ReloadCannon = game.runtime()
        Fire_Cannons()
        for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
            value.startEffect(effects.fire, 50)
        }
    }
})
function Orient_Cannons () {
    if (Owns_Port_Cannon == true) {
        if (ShipDirection == North) {
            Port_Cannon.setPosition(Ship.x + -9, Ship.y + 10)
        } else if (ShipDirection == East) {
            Port_Cannon.setPosition(Ship.x + -10, Ship.y + -9)
        } else if (ShipDirection == South) {
            Port_Cannon.setPosition(Ship.x + 9, Ship.y + -10)
        } else if (ShipDirection == West) {
            Port_Cannon.setPosition(Ship.x + 10, Ship.y + 9)
        }
    }
    if (Owns_Starboard_Cannon == true) {
        if (ShipDirection == North) {
            Starboard_Cannon.setPosition(Ship.x + 9, Ship.y + 10)
        } else if (ShipDirection == East) {
            Starboard_Cannon.setPosition(Ship.x + -10, Ship.y + 9)
        } else if (ShipDirection == South) {
            Starboard_Cannon.setPosition(Ship.x + -9, Ship.y + -10)
        } else if (ShipDirection == West) {
            Starboard_Cannon.setPosition(Ship.x + 10, Ship.y + -9)
        }
    }
    if (Owns_Port_Bow_Cannon == true) {
        if (ShipDirection == North) {
            Port_Bow_Cannon.setPosition(Ship.x + -5, Ship.y + -10)
        } else if (ShipDirection == East) {
            Port_Bow_Cannon.setPosition(Ship.x + 10, Ship.y + -5)
        } else if (ShipDirection == South) {
            Port_Bow_Cannon.setPosition(Ship.x + 5, Ship.y + 10)
        } else if (ShipDirection == West) {
            Port_Bow_Cannon.setPosition(Ship.x + -10, Ship.y + 5)
        }
    }
    if (Owns_Starboard_Bow_Cannon == true) {
        if (ShipDirection == North) {
            Starboard_Bow_Cannon.setPosition(Ship.x + 5, Ship.y + -10)
        } else if (ShipDirection == East) {
            Starboard_Bow_Cannon.setPosition(Ship.x + 10, Ship.y + 5)
        } else if (ShipDirection == South) {
            Starboard_Bow_Cannon.setPosition(Ship.x + -5, Ship.y + 10)
        } else if (ShipDirection == West) {
            Starboard_Bow_Cannon.setPosition(Ship.x + -10, Ship.y + -5)
        }
    }
    if (Owns_Stern_Cannon == true) {
        if (ShipDirection == North) {
            Stern_Cannon.setPosition(Ship.x + 0, Ship.y + 15)
        } else if (ShipDirection == East) {
            Stern_Cannon.setPosition(Ship.x + -15, Ship.y + 0)
        } else if (ShipDirection == South) {
            Stern_Cannon.setPosition(Ship.x + 0, Ship.y + -15)
        } else if (ShipDirection == West) {
            Stern_Cannon.setPosition(Ship.x + 15, Ship.y + 0)
        }
    }
}
function IntegrityCheck () {
    if (Ship_Integrity < Ship_Max_Integrity) {
        Ship_Integrity += 1
    }
}
sprites.onOverlap(SpriteKind.Net, SpriteKind.Treasure, function (sprite, otherSprite) {
    otherSprite.destroy()
    Chest = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 4 . . . 
        . . . 5 e e e e e e e e 5 4 . . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e 5 5 e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HUD)
    Chest.setPosition(otherSprite.x, otherSprite.y)
    Chest.z = 10
    animation.runImageAnimation(
    Chest,
    [img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 4 . . . 
        . . . 5 e e e e e e e e 5 4 . . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e 5 5 e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 4 . . . 
        . . . 5 e e e e e e e e 5 4 . . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e 5 5 e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . f f f f f f f f f f f f f . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 4 . . . 
        . . . 5 5 e e e e e e e 5 4 . . 
        . . . 5 e e e 5 5 e e e e 5 4 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 e e 5 5 e e e 5 5 4 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 e e 5 5 e e e 5 5 4 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
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
    200,
    false
    )
    if (Math.percentChance(50)) {
        Coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.HUD)
        animation.runImageAnimation(
        Coin,
        [img`
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
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
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
        Coin.setPosition(Chest.x, Chest.y + -5)
        Coin.z = 11
        Doubloons += 1
    } else if (Math.percentChance(30)) {
        Sail = sprites.create(img`
            . . . . . e . . . . . 
            2 1 2 1 2 e 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            . 1 2 1 2 1 2 1 2 1 . 
            . . 2 1 2 e 2 1 2 . . 
            . . . . . e . . . . . 
            `, SpriteKind.HUD)
        Sail.setPosition(Chest.x, Chest.y + -10)
        Sail.z = 11
        animation.runImageAnimation(
        Sail,
        [img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . e . . . . . 
            2 1 2 1 2 e 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . e . . . . . 
            2 1 2 1 2 e 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . e . . . . . 
            2 1 2 1 2 e 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            . 1 2 1 2 1 2 1 2 1 . 
            . . 2 1 2 e 2 1 2 . . 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . e . . . . . 
            2 1 2 1 2 e 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            . 1 2 1 2 1 2 1 2 1 . 
            . . 2 1 2 e 2 1 2 . . 
            . . . . . e . . . . . 
            . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . e . . . . . 
            2 1 2 1 2 e 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            . 1 2 1 2 1 2 1 2 1 . 
            . . 2 1 2 e 2 1 2 . . 
            . . . . . e . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . e . . . . . 
            2 1 2 1 2 e 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            . 1 2 1 2 1 2 1 2 1 . 
            . . 2 1 2 e 2 1 2 . . 
            . . . . . e . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `,img`
            . . . . . e . . . . . 
            2 1 2 1 2 e 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            2 1 2 1 2 1 2 1 2 1 2 
            . 1 2 1 2 1 2 1 2 1 . 
            . . 2 1 2 e 2 1 2 . . 
            . . . . . e . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `],
        150,
        false
        )
        IntegrityCheck()
    } else {
        Coins = sprites.create(img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            ..555554554554554..
            ...5554554554554...
            `, SpriteKind.HUD)
        animation.runImageAnimation(
        Coins,
        [img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            `,img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            `,img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            ..555554554554554..
            ...5554554554554...
            ...................
            `,img`
            ...................
            ...................
            ...................
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            ..555554554554554..
            ...5554554554554...
            ...................
            ...................
            ...................
            `,img`
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            ..555554554554554..
            ...5554554554554...
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            `,img`
            ..1..1........1....
            ...5554554554554.1.
            1.555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            1.555554554554554.1
            ...5554554554554...
            ..1.............1..
            ...................
            ...................
            ...................
            ...................
            ...................
            `,img`
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            ..555554554554554..
            ...5554554554554...
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            `,img`
            ..1..1........1....
            ...5554554554554.1.
            1.555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            1.555554554554554.1
            ...5554554554554...
            ..1.............1..
            ...................
            ...................
            ...................
            ...................
            ...................
            `,img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            `],
        200,
        false
        )
        Coins.setPosition(Chest.x, Chest.y + -5)
        Coins.z = 11
        Doubloons += 5
    }
    HUDdigits()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipDirection = South
    OrientShip()
    Set_Cannons()
})
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
            `, SpriteKind.Rowboat)
        tiles.placeOnTile(RowBoat, value)
        tiles.setTileAt(value, myTiles.tile1)
    }
}
function level1 () {
    tiles.setTilemap(tiles.createTilemap(hex`1e001e0002020202020202020202020202080808080808020202020202020202020202020202020202020808080807010101010101090808080202020202020202020202020202070101010101010101010101010101010908020202020202020202020207010101010101010101010101010101010101090202020202020202020701010101010101010101030101010101010101010a020202020202020701010101010101010101010101010101010101010109020202020202070101010101010101010101010101010101010101010101090202020207010101010101010101010101010101010101010101010101010a02020701010101010103010101010101010101010101010101010101010a02060101010101010101010101010101010101010101010101010101010a02060101010101010101010101010b0c0c0501010101010101010101010a020601010101010101010101010b0202020205010101010101010101010a0206010101010101010101010b020202020202050101010101030101010a0206010101010101010101010a020202020202060101010101010101010a0206010101010101010101010a020202020202060101010101010101010a02060101010101030101010109020202020202070101010101010101010a020601010101010101010101010a0202020207010101010101010101010a02060101010101010101010101090808080701010101010101010101010a02060101010101010101010101010101010101010101010101010101010a02060101010101010101010101010101010101010101010301010101010a02060101010101010101010101010101010101010101010101010101010a02060101010101010101010101010101010101010101010101010101010a02060101010101010101010101010101010101010101010101010101010a02020501010101010101010101010101010101010101010101010101010a02020205010101010101010101010101010101010101010101010101010a02020202050101010101010101010101010101010101010101010101010a020202020205010101010101010101010101010101010101010101010b020202020202020501010101040101010101010101010101010101010b020202020202020202050101010101010101010101010101010101010b020202020202020202020205010101010101010101010101010101010b0202020202`, img`
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
    Init_Ship()
    rowBoat()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rowboat, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Ship_Integrity > 1) {
        Ship_Integrity += -1
    } else {
        Ship.destroy(effects.ashes, 500)
    }
    HUDdigits()
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
function Fire_Cannons () {
    if (Owns_Port_Cannon == true) {
        if (ShipDirection == North) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Cannon, -100, 0)
        } else if (ShipDirection == East) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Cannon, 0, -100)
        } else if (ShipDirection == South) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Cannon, 100, 0)
        } else if (ShipDirection == West) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Cannon, 0, 100)
        }
    }
    if (Owns_Starboard_Cannon == true) {
        if (ShipDirection == North) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Cannon, 100, 0)
        } else if (ShipDirection == East) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Cannon, 0, 100)
        } else if (ShipDirection == South) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Cannon, -100, 0)
        } else if (ShipDirection == West) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Cannon, 0, -100)
        }
    }
    if (Owns_Port_Bow_Cannon == true) {
        if (ShipDirection == North) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Bow_Cannon, -75, -75)
        } else if (ShipDirection == East) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Bow_Cannon, 75, -75)
        } else if (ShipDirection == South) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Bow_Cannon, 75, 75)
        } else if (ShipDirection == West) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Bow_Cannon, -75, 75)
        }
    }
    if (Owns_Starboard_Bow_Cannon == true) {
        if (ShipDirection == North) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Bow_Cannon, 75, -75)
        } else if (ShipDirection == East) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Bow_Cannon, 75, 75)
        } else if (ShipDirection == South) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Bow_Cannon, -75, 75)
        } else if (ShipDirection == West) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Bow_Cannon, -75, -75)
        }
    }
    if (Owns_Stern_Cannon == true) {
        if (ShipDirection == North) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Stern_Cannon, 0, 100)
        } else if (ShipDirection == East) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Stern_Cannon, -100, 0)
        } else if (ShipDirection == South) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Stern_Cannon, 0, -100)
        } else if (ShipDirection == West) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Stern_Cannon, 100, 0)
        }
    }
}
function HUDdigits () {
    for (let value of sprites.allOfKind(SpriteKind.Number)) {
        value.destroy()
    }
    NumberFun()
    if (Ship_Integrity / 10 >= 1) {
        Integrity_First_Digit.setImage(Numbers_array[Math.trunc(Ship_Integrity / 10)])
        Integrity_Second_Digit.setImage(Numbers_array[Ship_Integrity % 10])
        Integrity_Second_Digit.setFlag(SpriteFlag.Ghost, true)
        Integrity_Second_Digit.setFlag(SpriteFlag.RelativeToCamera, true)
        Integrity_Second_Digit.setPosition(scene.screenWidth() - 135, scene.screenHeight() - 8)
    } else {
        Integrity_First_Digit.setImage(Numbers_array[Ship_Integrity])
    }
    Integrity_First_Digit.setFlag(SpriteFlag.Ghost, true)
    Integrity_First_Digit.setFlag(SpriteFlag.RelativeToCamera, true)
    Integrity_First_Digit.setPosition(scene.screenWidth() - 141, scene.screenHeight() - 8)
    Integrity_First_Digit.z = 50
    if (Doubloons / 10 >= 1) {
        Dubloon_First_Digit.setImage(Numbers_array[Math.trunc(Doubloons / 10)])
        Dubloon_Second_Digit.setImage(Numbers_array[Doubloons % 10])
        Dubloon_Second_Digit.setFlag(SpriteFlag.Ghost, true)
        Dubloon_Second_Digit.setFlag(SpriteFlag.RelativeToCamera, true)
        Dubloon_Second_Digit.setPosition(scene.screenWidth() - 107, scene.screenHeight() - 8)
    } else {
        Dubloon_First_Digit.setImage(Numbers_array[Doubloons])
    }
    Dubloon_First_Digit.setFlag(SpriteFlag.Ghost, true)
    Dubloon_First_Digit.setFlag(SpriteFlag.RelativeToCamera, true)
    Dubloon_First_Digit.setPosition(scene.screenWidth() - 113, scene.screenHeight() - 8)
    Dubloon_First_Digit.z = 50
}
let RowboatProjectile: Sprite = null
let CannonBall: Sprite = null
let RowBoat: Sprite = null
let Coins: Sprite = null
let Sail: Sprite = null
let Coin: Sprite = null
let Chest: Sprite = null
let ReloadCannon = 0
let Doubloon_HUD: Sprite = null
let Integrity_HUD: Sprite = null
let Dubloon_Second_Digit: Sprite = null
let Dubloon_First_Digit: Sprite = null
let Integrity_Second_Digit: Sprite = null
let Integrity_First_Digit: Sprite = null
let Numbers_array: Image[] = []
let Treasure_Rowboat: Sprite = null
let NetReload = 0
let Net: Sprite = null
let Ship: Sprite = null
let Stern_Cannon: Sprite = null
let Starboard_Bow_Cannon: Sprite = null
let Port_Bow_Cannon: Sprite = null
let Starboard_Cannon: Sprite = null
let Port_Cannon: Sprite = null
let ShipDirection = 0
let Ship_Integrity = 0
let Ship_Max_Integrity = 0
let Owns_Stern_Cannon = false
let Owns_Starboard_Bow_Cannon = false
let Owns_Port_Bow_Cannon = false
let Owns_Starboard_Cannon = false
let Owns_Port_Cannon = false
let Doubloons = 0
let West = 0
let South = 0
let East = 0
let North = 0
North = 0
East = 1
South = 2
West = 3
Doubloons = 0
Owns_Port_Cannon = true
Owns_Starboard_Cannon = true
Owns_Port_Bow_Cannon = false
Owns_Starboard_Bow_Cannon = false
Owns_Stern_Cannon = false
Ship_Max_Integrity = 10
Ship_Integrity = 10
HUDdigits()
level1()
game.onUpdate(function () {
    Orient_Cannons()
})
game.onUpdateInterval(1000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Rowboat)) {
        if (Math.abs(Ship.x - value.x) < 90 && (Math.abs(Ship.x - value.x) > 25 && (Math.abs(Ship.y - value.y) < 90 && Math.abs(Ship.y - value.y) > 25))) {
            value.follow(Ship, 25)
            for (let value of sprites.allOfKind(SpriteKind.Rowboat)) {
                if (value.y < Ship.y) {
                    animation.runImageAnimation(
                    value,
                    [img`
                        . . . . f f f f f f . . . . 
                        . . . . f d e e d f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f d e e d f . . . . 
                        . . . . e e e e e e . . . . 
                        . . . e f d e e d f e . . . 
                        . . e . f e e e e f . e . . 
                        . e . . f e e e e f . . e . 
                        e . . . f 4 f f 4 f . . . e 
                        . . . . . f f f f . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        `,img`
                        . . . . f f f f f f . . . . 
                        . . . . f d e e d f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f d e e d f . . . . 
                        e e e e e e e e e e e e e e 
                        . . . . f d e e d f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f 4 f f 4 f . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        `,img`
                        e . . . f f f f f f . . . e 
                        . e . . f d e e d f . . e . 
                        . . e . f e e e e f . e . . 
                        . . . e f d e e d f e . . . 
                        . . . . e e e e e e . . . . 
                        . . . . f d e e d f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f 4 f f 4 f . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        `,img`
                        e . . . f f f f f f . . . e 
                        . e . . f d e e d f . . e . 
                        . . e . f e e e e f . e . . 
                        . . . e f d e e d f e . . . 
                        . . . . e e e e e e . . . . 
                        . . . . f d e e d f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f 4 f f 4 f . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        `],
                    150,
                    true
                    )
                } else {
                    animation.runImageAnimation(
                    value,
                    [img`
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . f f f f . . . . . 
                        e . . . f 4 f f 4 f . . . e 
                        . e . . f e e e e f . . e . 
                        . . e . f e e e e f . e . . 
                        . . . e f d e e d f e . . . 
                        . . . . e e e e e e . . . . 
                        . . . . f d e e d f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f d e e d f . . . . 
                        . . . . f f f f f f . . . . 
                        `,img`
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
                        `,img`
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . f 4 f f 4 f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f d e e d f . . . . 
                        . . . . e e e e e e . . . . 
                        . . . e f d e e d f e . . . 
                        . . e . f e e e e f . e . . 
                        . e . . f d e e d f . . e . 
                        e . . . f f f f f f . . . e 
                        `,img`
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . f 4 f f 4 f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f e e e e f . . . . 
                        . . . . f d e e d f . . . . 
                        . . . . e e e e e e . . . . 
                        . . . e f d e e d f e . . . 
                        . . e . f e e e e f . e . . 
                        . e . . f d e e d f . . e . 
                        e . . . f f f f f f . . . e 
                        `],
                    150,
                    true
                    )
                }
            }
        } else {
            value.follow(null)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Rowboat)) {
        if (Math.abs(Ship.x - value.x) < 70 && (Math.abs(Ship.x - value.x) > 0 && (Math.abs(Ship.y - value.y) < 70 && Math.abs(Ship.y - value.y) > 0))) {
            RowboatProjectile = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, value, (Ship.x - value.x) * 1.25, (Ship.y - value.y) * 1.25)
            RowboatProjectile.setKind(SpriteKind.EnemyProjectile)
        } else {
        	
        }
    }
})
