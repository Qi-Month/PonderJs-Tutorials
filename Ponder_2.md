# 前言

> [Ponder_1](Ponder_1.md) 介绍过的此处不多赘述

[Ponder_1](Ponder_1.md) 以 [Submarine.js](kubejs/client_scripts/Ponder/Submarine.js) 为范本介绍, Ponder_2 则以 [iron_golem.js](kubejs/client_scripts/Ponder/iron_golem.js) 为范本介绍

<details>

<summary>目录（单击展开）</summary>
  <ol>
    <li><a href="#前言">前言</a> </li>
  </ol>
</details>

# 关于方块

> 放置方块已经介绍过, 此处介绍其他关于方块的函数

```js
// 破坏在 [2, 1, 2] 的方块, 若该位置原本有方块, 则破坏该原本方块
scene.world.destroyBlock([2, 1, 2]);


```
