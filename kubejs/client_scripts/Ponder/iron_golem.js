Ponder.tags(event => {
    event.createTag("kubejs:iron_golem", "minecraft:iron_block", "铁傀儡", "铁傀儡是高大强壮的友好生物，用于保护玩家和村民。");
});

Ponder.registry(event => {
    function GetPos(_pos) {
        return [parseInt(_pos / 100), parseInt(_pos / 10) % 10, _pos % 10]; 
    };
    function Set_and_show(scene) {
        return function (_pos, _id, _face, _wait) {
            scene.world.setBlocks(GetPos(_pos), (_id.match(":") ? _id : "minecraft:" + _id), false);
            scene.world.showSection(GetPos(_pos), _face || "down");
            if (_wait) { scene.idle(_wait); };
        };
    };
    event.create("minecraft:iron_block")
        .tag("kubejs:iron_golem")
        .scene("kubejs:iron_golem_1", "召唤铁傀儡", (scene, util) => {
            scene.configureBasePlate(0, 0, 5);
            scene.showBasePlate();
            scene.idle(5);

            scene.text(25, '想要召唤铁傀儡\n首先, 你需要将四个铁块以 §bT§r 字摆放');

            scene.idle(5);

            Set_and_show(scene)(212, "iron_block", "down", 5);
            Set_and_show(scene)(222, "iron_block", "down", 5);
            Set_and_show(scene)(122, "iron_block", "east", 5);
            Set_and_show(scene)(322, "iron_block", "west", 5);

            scene.idle(10);

            scene.addKeyframe();

            scene.text(20, '注意 : §4这四个位置必须是空气方块§r\n任何非空气方块（包括雪、高草和水）在这四个位置时都会阻碍铁傀儡的生成');

            scene.overlay.showOutline("green", {}, [3, 1, 2], 20);
            scene.overlay.showOutline("green", {}, [3, 3, 2], 20);
            scene.overlay.showOutline("green", {}, [1, 1, 2], 20);
            scene.overlay.showOutline("green", {}, [1, 3, 2], 20);

            scene.idle(20);

            scene.addKeyframe();

            scene.idle(10);

            scene.text(20, '然后将 §b雕刻南瓜§r 或 §b南瓜灯§r 放置在上层中间方块的顶上\n注意 : §4必须最后放置§r\n便能在§4这个位置§r召唤铁傀儡', [2.5, 3, 2.5]);

            scene.overlay.showOutline("red", {}, [2, 1, 2], 15);

            Set_and_show(scene)(232, "carved_pumpkin");

            scene.idle(15);

            [212, 222, 122, 322, 232].forEach(_pos => {
                scene.world.destroyBlock(GetPos(_pos));
            });

            scene.world.createEntity("minecraft:iron_golem", [2, 1, 2]);

            scene.idle(5);

            scene.markAsFinished();
        }).scene("kubejs:iron_golem_2", "召唤铁傀儡其二", (scene, util) => {
            scene.configureBasePlate(0, 0, 5);
            scene.showBasePlate();

            [212, 222, 122, 322].forEach(_pos => { Set_and_show(scene)(_pos, "iron_block", "down"); });

            scene.addKeyframe();

            scene.idle(20);

            scene.text(35, '也能放置§b南瓜§r, 南瓜的放置顺序没有限制, 不需要最后放置, 但需要最后使用§b剪刀§r修剪');

            scene.idle(5);

            Set_and_show(scene)(232, "pumpkin", "down", 10);

            scene.showControls(20, [2.5, 3, 2.5], "left").rightClick().withItem("minecraft:shears");

            scene.idle(15);

            [212, 222, 122, 322, 232].forEach(_pos => {
                scene.world.destroyBlock(GetPos(_pos));
            });

            scene.world.createEntity("minecraft:iron_golem", [2, 1, 2]);

            scene.idle(5);

            scene.markAsFinished();
        }).scene("kubejs:iron_golem_3", "召唤铁傀儡其三", (scene, util) => {
            scene.configureBasePlate(0, 0, 5);
            scene.showBasePlate();
            scene.idle(5);

            scene.text(80, '实际上, 这个十字结构可以任意旋转, 都能生成铁傀儡');

            scene.idle(5);

            Set_and_show(scene)(310, "iron_block", "south", 5);
            Set_and_show(scene)(311, "iron_block", "south", 5);
            Set_and_show(scene)(411, "iron_block", "west", 5);
            Set_and_show(scene)(211, "iron_block", "east", 5);
            Set_and_show(scene)(312, "carved_pumpkin", "north", 5);

            [310, 311, 411, 211, 312].forEach(_pos => {
                scene.world.destroyBlock(GetPos(_pos));
            });

            scene.world.createEntity("minecraft:iron_golem", [3, 1, 0]);

            scene.idle(10);

            scene.addKeyframe();

            scene.idle(5);

            Set_and_show(scene)(232, "iron_block", "down", 5);
            Set_and_show(scene)(222, "iron_block", "down", 5);
            Set_and_show(scene)(122, "iron_block", "east", 5);
            Set_and_show(scene)(322, "iron_block", "west", 5);
            Set_and_show(scene)(212, "carved_pumpkin", "up", 5);

            [212, 222, 122, 322, 232].forEach(_pos => {
                scene.world.destroyBlock(GetPos(_pos));
            });

            scene.world.createEntity("minecraft:iron_golem", [2, 3, 2]);

            scene.idle(10);

            scene.markAsFinished();
        });
});
