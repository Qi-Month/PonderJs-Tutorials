# PonderTags

## 关于 ponder 的分类

### 第一种

> 建立新的 PonderTag

```js
Ponder.tags((e) => {
  e.createTag(
    "kubejs:Iron_Golem", // 你设定的PonderTag的id
    "minecraft:iron_ingot", // 你设定的PonderTag的图标
    "铁傀儡", // 你设定的PonderTag的名称
    "铁傀儡是高大强壮的友好生物，用于保护玩家和村民。", // 你设定的PonderTag的介绍
    ["minecraft:iron_block", "minecraft:carved_pumpkin"] // **可选参数** 你设定的PonderTag的关联词条, 只有一个时也能不用 [ ]
  );
});
```

### 第二种

> 为已有的 PonderTag 添加新的关联物品

```js
Ponder.tags((e) => {
  e.add(
    "kubejs:Iron_Golem", // 要编辑的PonderTag
    ["minecraft:iron_ingot", "minecraft:poppy"] // 要加入的关联词条, 只有一个时也能不用 [ ]
  );
});
```

PS: 建立 Ponder 时一并设置其 PonderTag

```js
Ponder.registry((e) => {
  e.create('minecraft:iron_block')
    .tag("kubejs:Iron_Golem")    // 只能添加已有的PonderTag, 添加复数PonderTag时无须 [ ],  用逗号隔开PonderTag即可
    .scene("minecraft:Iron_Golem", "铁傀儡", "kubejs:ie_2", (scene, utils) => {});
});
```

### 第三种

> 删除 PonderTag 内的的关联物品

```js
Ponder.tags((e) => {
  e.remove(
    "kubejs:Iron_Golem", // 要编辑的PonderTag
    ["minecraft:iron_ingot", "minecraft:poppy"] // 要删除的关联词条, 只有一个时也能不用 [ ]
  );
});
```

### 第四种

> 删除已有的 PonderTag

```js
Ponder.tags((e) => {
  e.removeTag(
    "kubejs:Iron_Golem" // 要删除的PonderTag, 删除复数PonderTag时无须 [ ],  用逗号隔开PonderTag即可
  );
});
```
