# 前言

> [Ponder](../Ponder.md) 以 [Submarine.js](../../kubejs/client_scripts/Ponder/Submarine.js) 为范本介绍, 介绍过的函数此处不多赘述

<details>
  <summary>目录（单击展开）</summary>

  - [前言](#前言)
  - [关于实体](#关于实体)
    1. [创造实体](#创造实体)
    2. [编辑实体](#编辑实体)
    
</details>
 
# 关于实体

> 此处介绍其他关于实体的函数

## 创造实体

首先来看范例

```js
// 在 [2.5, 1, 2.5] 创造一只 羊 的实体
scene.world.createEntity("minecraft:sheep", [2.5, 1, 2.5]);

// 在 [2.5, 1, 2.5] 创造一只 羊 的实体, 设置 羊 的名字是 jeb_
scene.world.createEntity("minecraft:sheep", [2.5, 1, 2.5], event => {
    event.setCustomName("jeb_");
});

```

> 以下代码节录自 [scene_world_function.md](../internal/scene_world_function.md)

```js
createEntity(arg0: Internal.EntityType_<any>, arg1: Vec3d_, arg2: Internal.Consumer_<Internal.Entity>): Internal.ElementLink<Internal.EntityElement>;
createEntity(arg0: Internal.EntityType_<any>, arg1: Vec3d_): Internal.ElementLink<Internal.EntityElement>;

createEntity(arg0: Internal.Function_<Internal.Level, Internal.Entity>): Internal.ElementLink<Internal.EntityElement>;
```

## 编辑实体

首先来看范例

```js
// 在 [2.5, 1, 2.5] 创造一只 羊 的实体
var _sheep = scene.world.createEntity("minecraft:sheep", [2.5, 1, 2.5]);
//编辑 羊 的实体
scene.world.modifyEntity(_sheep, event => {
    //设置 羊 的名字是 jeb_
    event.setCustomName("jeb_");
    //显示 羊 的受伤动画
    event.animateHurt(3);
    //设置 羊 移动 [1, 0, 1] 格, 移动方式为 self
    event.move("self", [1, 0, 1]);
});
```

> 以下代码节录自 [scene_world_function.md](../internal/scene_world_function.md)

```js
modifyEntity(arg0: Internal.ElementLink_<Internal.EntityElement>, arg1: Internal.Consumer_<Internal.Entity>): void_;
```

