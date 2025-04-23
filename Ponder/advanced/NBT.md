# 复杂nbt的修改方式(本文由[**史莱姆**](https://space.bilibili.com/310622238)编写)

(图片以后有机会再截)
在实际应用场景中, 我们可能会遇到这样的抽象nbt: 

`{InputTanks:[{Level:{Speed:0.25,Target:0.25,Value:0.0},TankContent:{Amount:250,FluidName:"minecraft:lava"}}]}`

在这种时候, 如果我们想修改里面的`Amount`该怎么写呢?

实际上, 我们只需要参考在`/data`指令中的写法即可, 详情参考`minecraft wiki`. 这里只做简单的说明: 

如果nbt是上层`.{xxx:xxx,目标nbt:xxx}` 的形式, 修改时则使用`上层.目标nbt=xxx`

如果nbt是上层`.[xxx,目标nbt,...]`的形式, 修改时则使用上层`[1]=xxx`

所有情况基本都是以上情况的复合. 

此处的例子:
```js
scene.world.modifyTileNBT([x, y, z], (nbt) => {
	nbt.InputTanks[1].Amount = 500
})
```

# 实体修改
首先来讲nbt的修改

对实体的nbt修改与方块的nbt修改有很大的差别. 首先, 我们无法通过坐标来选择实体, 而是需要创建一个指向对应实体的变量, 方法如下: 
```js
let example = scene.world.createEntity("armor_stand", [x, y, z])
```

接着, 在具体的修改方法上我们也不像方块nbt那样. 根据需求, 我们有setNbt()和mergeNbt()两种选项. 前者会将该实体的其它nbt全部清除或改为默认值, 而后者只是向实体的nbt中添加或覆盖指定的内容. 

举个例子, 我们首先用`mergeNbt()`方法修改上面我们创建的盔甲架的头部物品并让它本身隐形: 

```js
scene.world.modifyEntity(example, (entity) => {
	entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"minecraft:stone"}]}')
})
```

我们可以看到除了盔甲架隐形了以及头部物品变为了石头, 并没有产生其它的变化. 

接着, 我们再用`setNbt()`方法将头部物品改为草方块试试: 

```js
scene.idle(30)
scene.world.modifyEntity(example, (entity) => {
	entity.setNbt('{ArmorItems:[{},{},{},{Count:1b,id:"minecraft:grass_block"}]}')
})
```

我们可以看到, 盔甲架不再隐形, 它除了`ArmorItems`以外的其它nbt全部被清除, 所以连坐标(由`Pos nbt`控制)也变为了`0 0 0`

接下来我们尝试让这个实体动起来. 

有些人可能会考虑使用上文中的`Pos nbt`来控制. 但实际上, 这种移动是没有动画的, 我们需要的是带有动画的平滑移动. 也有的人可能会想到修改`Motion nbt`, 但实际上这并不会在思索中产生任何效果. 所以我们使用如下的方法来让盔甲架以`-0.02/tick`的速度匀速向下移动`80 Tick`的时间. 

```js
for (let i1 = 0; i1 < 80; i1++) {
    scene.world.modifyEntity(example, entity => {
         entity.addDeltaMovement([0, -0.02, 0])
         entity.move("self", entity.getDeltaMovement())
    })
    scene.idle(1)
}
```

如果你需要变加速运动或是更复杂的运动路径, 也可以在此基础上修改, 所需要的无非是一些数学和物理知识. 