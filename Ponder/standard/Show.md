# 前言

> [Ponder](https://github.com/Qi-Month/PonderJs-Tutorials/blob/main/Ponder/Ponder.md) 以 [Submarine.js](https://github.com/Qi-Month/PonderJs-Tutorials/blob/main/kubejs/client_scripts/Ponder/Submarine.js) 为范本介绍, 介绍过的函数此处不多赘述

<details>
  <summary>目录（单击展开）</summary>

  - [前言](#前言)
  - [关于显示](#关于显示)
    1. [显示方块](#显示方块)

    
</details>
 
# 关于显示

## 显示方块

```js
// 以从上面下落到坐标 [2, 1, 1] 的动画形式显示出这一格的方块
scene.world.showSection([2, 1, 1], Direction.down);
```

> 以下代码节录自 [scene_world_function.md](https://github.com/Qi-Month/PonderJs-Tutorials/blob/main/Ponder/internal/scene_world_function.md)

```js
showSection(arg0: Internal.Selection_, arg1: Internal.Direction_): void_;
```
