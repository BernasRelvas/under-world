// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100014000503030303030303030303040303030303030303030303030303030303030303010102010102010101020101020101010101020102020202020202020202020202020201010201010102020201010102020102020202020201010201010101020201010202010102020202020202010202020101020201010101010101020102010201010102020202020201020201020102010102020202010102010201010201020202020102020601020202010102010102010101010101010101020101020102020202020202020202020201020201010102010101010101020101010101010101020101010102020202020202010107020201010101010102010101020101020101010101010102020101010201010202020101010101020101010102010101010201010102020201010102020101010101010102020101010101010101`, img`
................
................
22.22.222.22.222
22.2............
...22.222...222.
.2......22.2222.
.22..22.......2.
..22..2222222.2.
2.222......2..2.
2.22....22.2.22.
2....2...2...22.
22.222222222.22.
2............2..
222.222222.22222
222.2222.......2
2...222222.222.2
2.2222222..222.2
2...22222.2222.2
222.222...222..2
222222..22222222
`, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
