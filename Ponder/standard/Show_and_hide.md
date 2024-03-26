# 关于显示与隐藏

> 此处介绍其他关于显示与隐藏方块的函数

<details>
  <summary>目录（单击展开）</summary>

  1. [显示方块](#显示方块)
  2. [隐藏方块](#隐藏方块)
  3. [其余待做函数](#其余待做函数)
    
</details>
 
## 显示方块

```js
// 以从上面向下落的动画形式显示以 [2, 1, 1] 及 [1, 1, 2] 为对角组成的矩形区域内的方块
// 并将该区域设置为 已显示状态
scene.world.showSection([2, 1, 1, 1, 1, 2], Direction.down);

// 以从上面向下落的动画形式显示 [2, 1, 1] 这一格的方块, 并将该格设置为 已显示状态
scene.world.showSection([2, 1, 1], Direction.down);

// 同上
scene.world.showSection([2, 1, 1], Facing.down);

// 同上
scene.world.showSection([2, 1, 1], 'down');
```
关于方向 [Direction & Facing](../internal/Facing.md)

> 以下代码节录自 [scene_world_function.md](../internal/scene_world_function.md)

```js
showSection(arg0: Internal.Selection_, arg1: Internal.Direction_): void_;
```

## 隐藏方块

```js
// 以从上面向下落的动画形式隐藏 [2, 1, 1] 这一格的方块, 并将该格设置为 未显示状态
scene.world.hideSection([2, 1, 1], 'down');
```

> 以下代码节录自 [scene_world_function.md](../internal/scene_world_function.md)

```js
hideSection(arg0: Internal.Selection_, arg1: Internal.Direction_): void_;
```

## 其余待做函数

等待大佬编辑

> 以下代码节录自 [scene_world_function.md](../internal/scene_world_function.md)

```js
hideIndependentSection(arg0: Internal.ElementLink_<Internal.WorldSectionElement>, arg1: Internal.Direction_, arg2: number): void_;
configureCenterOfRotation(arg0: Internal.ElementLink_<Internal.WorldSectionElement>, arg1: Vec3d_): void_;
showIndependentSectionImmediately(arg0: Internal.Selection_): Internal.ElementLink<Internal.WorldSectionElement>;
showIndependentSection(arg0: Internal.Selection_, arg1: Internal.Direction_): Internal.ElementLink<Internal.WorldSectionElement>;
hideIndependentSectionImmediately(arg0: Internal.ElementLink_<Internal.WorldSectionElement>): void_;
glueBlockOnto(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.ElementLink_<Internal.WorldSectionElement>): void_;
showSectionAndMerge(arg0: Internal.Selection_, arg1: Internal.Direction_, arg2: Internal.ElementLink_<Internal.WorldSectionElement>): void_;
makeSectionIndependent(arg0: Internal.Selection_): Internal.ElementLink<Internal.WorldSectionElement>;
showIndependentSection(arg0: Internal.Selection_, arg1: Internal.Direction_, arg2: number): Internal.ElementLink<Internal.WorldSectionElement>;
moveSection(arg0: Internal.ElementLink_<Internal.WorldSectionElement>, arg1: Vec3d_, arg2: number): void_;
hideIndependentSection(arg0: Internal.ElementLink_<Internal.WorldSectionElement>, arg1: Internal.Direction_): void_;
rotateSection(arg0: Internal.ElementLink_<Internal.WorldSectionElement>, arg1: number, arg2: number, arg3: number, arg4: number): void_;
```
