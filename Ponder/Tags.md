# 前言

> 什么是 PonderTag？

在思索索引创建分类, 相同分类的 Ponder 也能互相跳转, 是非常方便的功能

<details>
  <summary>目录（单击展开）</summary>

1. [前言](#前言)
2. [建立新的 PonderTag](#其一-无中生有)
3. [为已有的 PonderTag 添加新的关联词条](#其二-画龙点睛)
4. [删除 PonderTag 内的的关联物品](#其三-去芜存菁)
5. [删除已有的 PonderTag](#其四-一扫而空)
6. [机械动力自带的 PonderTag](#其五-承上启下)
</details>

# 其一 无中生有

> 建立新的 PonderTag

```js
Ponder.tags((event) => {
  event.createTag(
    "kubejs:iron_golem", // 你设定的 PonderTag 的 id, 必须小写
    "minecraft:iron_block", // 你设定的 PonderTag 的图标
    "铁傀儡", // 你设定的 PonderTag 的名称
    "铁傀儡是高大强壮的友好生物，用于保护玩家和村民。", // 你设定的 PonderTag 的介绍
    ["minecraft:iron_block", "minecraft:carved_pumpkin"] // **可选参数** 你设定的 PonderTag 的关联词条, 只有一个时也能不用 [ ]
  );
});
```

![图片](https://github.com/whenmo/PonderJs-Tutorials/blob/main/assets/images/PonderTag示例.gif)

# 其二 画龙点睛

> 为已有的 PonderTag 添加新的关联词条

```js
Ponder.tags((event) => {
  event.add(
    "kubejs:iron_golem", // 要编辑的 PonderTag
    ["minecraft:iron_ingot", "minecraft:poppy"] // 要加入的关联词条, 只有一个时也能不用 [ ]
  );
});
```

EX: 建立 Ponder 时一并设置其 PonderTag, 以 [iron_golem.js](https://github.com/whenmo/PonderJs-Tutorials/blob/main/kubejs/client_scripts/Ponder/iron_golem.js) 的部分代码为例

```js
Ponder.registry(event => {
    ↓
    ==
    ↑
    event.create("minecraft:iron_block")
        .tag("kubejs:iron_golem")  // 只能添加已有的 PonderTag, 添加复数 PonderTag 时无须 [ ],  用逗号隔开 PonderTag 即可
        .scene("kubejs:iron_golem_1", "召唤铁傀儡", (scene, util) => {
    ↓
    ==
    ↑
       });
});
```

# 其三 去芜存菁

> 删除 PonderTag 内的的关联物品

```js
Ponder.tags((event) => {
  event.remove(
    "kubejs:iron_golem", // 要编辑的 PonderTag
    ["minecraft:iron_ingot", "minecraft:poppy"] // 要删除的关联词条, 只有一个时也能不用 [ ]
  );
});
```

# 其四 一扫而空

> 删除已有的 PonderTag

```js
Ponder.tags((event) => {
  event.removeTag(
    "kubejs:iron_golem" // 要删除的 PonderTag, 删除复数 PonderTag 时无须 [ ],  用逗号隔开 PonderTag 即可
  );
});
```

# 其五 承上启下

> 机械动力自带的 [PonderTag](https://github.com/Creators-of-Create/Create/blob/mc1.18/dev/src/main/java/com/simibubi/create/infrastructure/ponder/AllPonderTags.java) 如下
>
> | 标签                   | 图标       | 标题                   | 描述                                                               |
> | ---------------------- | ---------- | ---------------------- | ------------------------------------------------------------------ |
> | "kinetic_relays"       | 齿轮       | "动力方块"             | "用于传递旋转力的组件"                                             |
> | "kinetic_sources"      | 水车       | "动力源"               | "能够产生旋转力的组件"                                             |
> | "kinetic_appliances"   | 动力辊压机 | "动力设备"             | "这些组件可以利用旋转力进行工作"                                   |
> | "fluids"               | 流体管道   | "流体操纵器械"         | "这些组件可以用于传递流体，以及利用流体进行工作"                   |
> | "logistics"            | 箱子       | "物品运输"             | "该组件可以协助物品运输"                                           |
> | "redstone"             | 红石粉     | "逻辑组件"             | "这些组件会在红石工程中发挥大用处"                                 |
> | "decoration"           | 玫瑰丛     | "装饰"                 | "装饰是这些组件的常见用法"                                         |
> | "creative"             | 创造板条箱 | "创造模式"             | "总有些东西是生存模式得不到的"                                     |
> | "movement_anchor"      | 动力活塞   | "运动锚点"             | "允许创建移动装置的组件，它可以以数种方式使相接的结构运动起来"     |
> | "contraption_actor"    | 动力收割机 | "装置执行组件"         | "能在移动的装置上执行特殊功能的组件"                               |
> | "contraption_assembly" | 强力胶     | "方块连接功能"         | "将各个组件连接以便同时运动的工具以及组件"                         |
> | "windmill_sails"       | 风车轴承   | "用于风车轴承的帆"     | "在进行风车组装时会被算入风车强度的方块，这些方块的效能都是一样的" |
> | "arm_targets"          | 动力臂     | "动力臂的工作目标"     | "该组件可作为动力臂的输入或者输出点"                               |
> | "train_related"        | 列车轨道   | "铁路设备"             | "用于建造或管理列车装置的组件"                                     |
> | "recently_updated"     | 剪贴板     | "最近的变更"           | "在最新版本的机械动力中添加或显著更改的组件"                       |
> | "display_sources"      | 显示链接器 | "显示链接器的数据来源" | "可以提供一些可被显示链接器读取的数据的组件或方块"                 |
> | "display_targets"      | 显示链接器 | "显示链接器的输出目标" | "可以处理和显示从显示链接器接收到的数据的组件或方块"               |
