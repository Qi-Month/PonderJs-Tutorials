# 前言

> [Ponder_1](Ponder_1.md) 介绍过的此处不多赘述

[Ponder_1](Ponder_1.md) 以 [Submarine.js](kubejs/client_scripts/Ponder/Submarine.js) 为范本介绍, Ponder_2 则以 [iron_golem.js](kubejs/client_scripts/Ponder/iron_golem.js) 为范本介绍

<details>

<summary>目录（单击展开）</summary>
  <ol>
    <li><a href="#前言">前言</a> </li>
    <li><a href="#关于方块">关于方块</a> </li>
  </ol>
</details>

<details>
  <summary>目录（单击展开）</summary>

  - [前言](#前言)
  - [关于方块](#关于方块)
    1. [破坏方块](#破坏方块)

</details>
 
# 关于方块

> 此处介绍其他关于方块的函数

## 放置方块(怎么又是你)

根据 [scene_world_function.md](kubejs/constant/scene_world_function.md) 我们可知放置方块有两种函数

```js
setBlocks(arg0: Internal.Selection_, arg1: boolean_, arg2: Internal.BlockState_): void_;
setBlocks(arg0: Internal.Selection_, arg1: Internal.BlockState_): void_;
setBlocks(arg0: Internal.Selection_, arg1: Internal.BlockState_, arg2: boolean_): void_;

setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: boolean_): void_;
```

setBlocks 已经介绍过不多赘述, 此处介绍 setBlock

我们可以发现 setBlocks 与 setBlock 的第一个参数种类是不同的

其差别在于 setBlocks 可以使用 [3, 1, 1, 1, 1, 3] 来一次性放置大量方块, setBlock 一次只能放置一个

```js
// 在 [2, 1, 2] 放置铁块方块, 若该位置原本有方块, 则破坏该原本方块
scene.world.setBlock([2, 1, 2], "minecraft:iron_block", true);
```

## 破坏方块

首先来看范例

```js
// 破坏在 [2, 1, 2] 的方块
scene.world.destroyBlock([2, 1, 2]);
```
若是该位置无方块, 则不显示破坏方块时的粒子效果

> 以下代码节录自 internal_26.d.ts

```js
destroyBlock(arg0: BlockPos_): void_;
```

我们可以看到第一个参数种类与 setBlock 相同, 即`只能填入单格, 不能范围破坏`

## 替换方块

首先来看范例

```js
// 将 [2, 1, 2] 的方块替换为铁块方块, 并显示破坏方块时的粒子效果
scene.world.replaceBlocks([2, 1, 2], "minecraft:iron_block", true);

// 将以 [2, 1, 3] 及 [3, 1, 3] 为对角组成的矩形区域内的方块全部替换为铁块方块, 并不显示破坏方块时的粒子效果
scene.world.replaceBlocks([2, 1, 3, 3, 1, 3], "minecraft:iron_block", false);
```
若是该位置无方块, 则不替换方块, 也不显示破坏方块时的粒子效果

> 以下代码节录自 internal_26.d.ts

```js
replaceBlocks(arg0: Internal.Selection_, arg1: Internal.BlockState_, arg2: boolean_): void_;
```

我们可以看到第一个参数种类与 setBlocks 相同, 即`可以范围替换`

