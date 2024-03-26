# 关于实体

> 此处介绍其他关于实体的函数

<details>
  <summary>目录（单击展开）</summary>

  1. [创造实体](#创造实体)
  2. [编辑实体](#编辑实体)
  3. [创造掉落物实体](#创造掉落物实体)
    
</details>
 
## 创造实体

首先来看范例

```js
// 在 [2.5, 1, 2.5] 创造一只 minecraft:sheep 的实体, 并附值给 _sheep
var _sheep = scene.world.createEntity("minecraft:sheep", [2.5, 1, 2.5]);

// 在 [2.5, 1, 2.5] 创造一只 minecraft:sheep 的实体, 设置其名字为 jeb_
scene.world.createEntity("minecraft:sheep", [2.5, 1, 2.5], event => {
    event.setCustomName("jeb_");
});
```

其返回值为 **Internal.ElementLink<Internal.EntityElement>**

> 以下代码节录自 [scene_world_function.md](../internal/scene_world_function.md)

```js
createEntity(arg0: Internal.EntityType_<any>, arg1: Vec3d_, arg2: Internal.Consumer_<Internal.Entity>): Internal.ElementLink<Internal.EntityElement>;
createEntity(arg0: Internal.EntityType_<any>, arg1: Vec3d_): Internal.ElementLink<Internal.EntityElement>;

createEntity(arg0: Internal.Function_<Internal.Level, Internal.Entity>): Internal.ElementLink<Internal.EntityElement>;
```

## 编辑实体

首先来看范例

```js
// 在 [2.5, 1, 2.5] 创造一只 minecraft:sheep 的实体, 并附值给 _sheep
var _sheep = scene.world.createEntity("minecraft:sheep", [2.5, 1, 2.5]);

//编辑实体 _sheep
scene.world.modifyEntity(_sheep, event => {

    //设置其名字为 jeb_
    event.setCustomName("jeb_");

    //显示其的受伤动画
    event.animateHurt(3);

    //设置其移动 [1, 0, 1] 格, 移动方式为 self
    event.move("self", [1, 0, 1]);
});
```

> 以下代码节录自 [scene_world_function.md](../internal/scene_world_function.md)

```js
modifyEntity(arg0: Internal.ElementLink_<Internal.EntityElement>, arg1: Internal.Consumer_<Internal.Entity>): void_;
```

## 创造掉落物实体

首先来看范例

```js
// 在 [2, 1, 2] 创造一个移动 [0.5, 0, 0] 的 minecraft:iron_ingot 掉落物实体
scene.world.createItemEntity([2, 1, 2], [0.5, 0, 0], 'minecraft:iron_ingot');
```
P.S.经测试, 移动 0.5 是一格多一点, 等待其他大佬补充, 我搞不太懂逻辑

以下分别是 **([2, 1, 2], [0.5, 0, 0])** 和 **([3, 1, 2], [0, 0, 0])**

![图片](../assets/images/ItemEntity_move.gif)

其返回值为 **Internal.ElementLink<Internal.EntityElement>**

> 以下代码节录自 [scene_world_function.md](../internal/scene_world_function.md)

```js
createItemEntity(arg0: Vec3d_, arg1: Vec3d_, arg2: Internal.ItemStack_): Internal.ElementLink<Internal.EntityElement>;
```

## 删除实体

首先来看范例

```js
// 在 [2.5, 1, 2.5] 创造一只 minecraft:sheep 的实体, 并附值给 _sheep
var _sheep = scene.world.createEntity("minecraft:sheep", [2.5, 1, 2.5]);

//删除实体 _sheep
scene.world.removeEntity(_sheep);
```

> 以下代码节录自 [scene_world_function.md](../internal/scene_world_function.md)

```js
removeEntity(arg0: Internal.ElementLink_<Internal.EntityElement>): void_;
```
