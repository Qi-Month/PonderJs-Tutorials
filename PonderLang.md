# 关于翻译

> 在构筑代码的时候, 你可能会为了将内容翻译成其他语种而烦恼, 不过不用担心, Ponder 会自动建立翻译文件
>
> 只要知道你的代码与其的对应关系便可进行档案的修改了

# 开始之前

当你完成代码并启动游戏时, Ponder 会自动生成对应的名为 `en_us.json` 的翻译文件 **（即使你的代码内对应的描述并非英文）**, 其档案路径为

> `kubejs/assets/mod_id/ponderjs_generated/lang/en_us.json`
>
> 注意 : 每次启动游戏都会根据你的代码重置 `en_us.json` 的内容

此处只举两个简单的例子：

> `en_us.json` 对应英文
>
> `zh_cn.json` 对应简体中文

# 开始

以位于 `client_scripts` 的名为 [iron_golem.js](kubejs/client_scripts/Ponder/iron_golem.js) 的部分代码为例

# PonderTag 的部分

```js
Ponder.tags(event => {
    event.createTag("kubejs:iron_golem", "minecraft:iron_block", "铁傀儡", "铁傀儡是高大强壮的友好生物，用于保护玩家和村民。");
});
```

此时应会在对应的 `en_us.json` 生成

```json
{
  "kubejs.ponder.tag.iron_golem": "铁傀儡",
  "kubejs.ponder.tag.iron_golem.description": "铁傀儡是高大强壮的友好生物，用于保护玩家和村民。"
}
```

> `kubejs` 对应 PonderTag 的 id 的命名空间（namespace）
>
> `ponder.tag` 代表其对应 tag 部分
>
> `iron_golem` 对应 PonderTag 的 id 的路径（path）

# Ponder 的部分

```js
Ponder.registry(event => {
    ↓
    ==
    ↑
    event.create("minecraft:iron_block")
        .tag("kubejs:iron_golem")
        .scene("kubejs:iron_golem_1", "召唤铁傀儡", (scene, util) => {
    ↓
    ==
    ↑
            scene.text(25, '想要召唤铁傀儡\n首先, 你需要将四个铁块以 §bT§r 字摆放');
    ↓
    ==
    ↑
            scene.text(20, '注意 : §4这四个位置必须是空气方块§r\n任何非空气方块（包括雪、高草和水）在这四个位置时都会阻碍铁傀儡的生成');
    ↓
    ==
    ↑
       });
});
```

此时应会在对应的 `en_us.json` 生成

```json
{
  "kubejs.ponder.iron_golem_1.header": "召唤铁傀儡",
  "kubejs.ponder.iron_golem_1.text_1": "想要召唤铁傀儡\n首先, 你需要将四个铁块以 §bT§r 字摆放",
  "kubejs.ponder.iron_golem_1.text_2": "注意 : §4这四个位置必须是空气方块§r\n任何非空气方块（包括雪、高草和水）在这四个位置时都会阻碍铁傀儡的生成"
}
```

> `kubejs.ponder.iron_golem_1` 对应 Ponder 的 id
>
> `header` 对应 Ponder 的标题
>
> `text_1` 依照显示的顺序依序生成 text_1 ~ text_n
