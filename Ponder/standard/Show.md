# 关于显示

> 此处介绍其他关于显示方块的函数

<details>
  <summary>目录（单击展开）</summary>

  1. [显示方块](#显示方块)
    
</details>
 
## 显示方块

```js
// 以从上面下落到坐标 [2, 1, 1] 的动画形式显示出这一格的方块
scene.world.showSection([2, 1, 1], Direction.down);
```

> 以下代码节录自 [scene_world_function.md](../internal/scene_world_function.md)

```js
showSection(arg0: Internal.Selection_, arg1: Internal.Direction_): void_;
```
