# 我为什么要写这篇教程?

#### 截止至本篇教程开始编写的时间(2024.03.07),我没有在市面上发现任何一篇对新手较为友好的教程(GitHub 上的 wiki 和没有一样)

#### 因此,在本篇教程,我会将我所掌握的所有 PonderJS 知识全盘托出.但是我会的也不算多,基本都是相对基础的知识,但是写一个简单的 Ponder 基本也都是够了.

# 声明

#### 本人会的知识与真正的大佬比起来并不算多,相对基础.因此本篇教程所教的东西都是在 Ponder 里很基础很简单的,至于复杂一点的(例如纹理连接,IE 的各种工作站等)我会在学会后尽早补上

#### PonderJS 作为 client 脚本,可以通过指令进行重载,但是导入一个新的 nbt 结构,需要大退重启游戏

```
/kubejs reload client_scripts
```

#### 本篇教程基于 KubeJS 6 编写,在此之前我也写过 KubeJS 5 的,各种方法没有区别,唯一的区别就是开头的事件声明(截止到目前我已发现的)

#### KubeJS 5

```js
onEvent("ponder.registry", (e) => {});
```

#### KubeJS 6

```js
Ponder.registry((e) => {});
```

## 所需要的工具

- 七根木棍(梯子)
- ProbeJs
- 那么**一丢丢**的 KubeJS 基础

# 开始

### 脚本目录位于

```
客户端/kubejs/client_scripts
```

在此文件内的任意地方都可以,但是更建议在 client_scripts 内创建一个"Ponder"文件夹,将你的 Ponder 脚本丢进去,而 Ponder 文件夹内还可以套文件夹用于进一步的整理与分类,养成分类的好习惯,会让你的编写更加方便

## 和其他的 KubeJS 脚本一样,开头都应该先声明事件,所有的编写都在{}内进行

```js
Ponder.registry((e) => {});
```

# 第一种(读取.nbt 文件进行编写)

## nbt 文件存储在

```
客户端/kubejs/assets/kubejs/ponder
```

## 可以用"Create"Mod 的蓝图与笔或者原版的结构方块进行 nbt 结构的获取(这俩自己学习用法,本教程并不会教)

## 在获取一个完整的 nbt 结构文件时,最好把地板也一起搭建并打包好

可以打开 Ponder 的开发者模式,用于显示坐标(限制存档,新存档需要再次开启)

## <image src="assets/images/config.gif">

开启开发者模式后便可查看各个方块的坐标

## <image src="assets/images/坐标.gif">

## 在脚本中写入这些完成准备阶段

```js
Ponder.registry((e) => {
  e.create("immersiveengineering:alloy_smelter") // 选择需要添加Ponder的Item
    .scene(
      "immersiveengineering:alloy_smelter", // Ponder ID
      "高炉", // 侧边的文字显示
      "kubejs:ie_2", // 读取的nbt文件
      (scene, utils) => {}
    );
});
```

## 根据我们自己搭建的结构,以及 Ponder 场景中的地板坐标,大致推算出各个方块的位置(别在意我这个铜块生锈,忘记用涂蜡的铜块了 QwQ)

## <image src="assets/images/结构展示.png">

# **要注意,你地板的坐标 Y 轴是 0,所以要从 1 开始算**

## 先让方块显示出来,我们在得先让地板显示出来,在{}内输入

```js
scene.showBasePlate();
scene.idle(20);
```

这里提一嘴,在 Ponder 中

```js
scene.idle(20);
```

的作用是停顿,例如显示完底盘等 1s 再继续显示,就写上这个,时间由 Tick 控制
在 Minecraft 中 1Tick = 0.05s,因此停顿一秒就是填 20,关于 Tick 更多信息可以到 Minecraft 的 wiki 进行查看,这里不做过多的赘述 [Minecraft 中文 wiki](https://zh.minecraft.wiki)

## 该停顿的地方就停顿,不要为了贪图方便而把该有的东西给 K 了,要记住你做出来的东西是给人看的,一定要养成好习惯!

如下面所示

```js
Ponder.registry((e) => {
  e.create("immersiveengineering:alloy_smelter") //
    .scene(
      "immersiveengineering:alloy_smelter", // Ponder ID
      "高炉", // 侧边的文字显示
      "kubejs:ie_2", // 读取的nbt文件
      (scene, utils) => {
        // 显示底盘,同时停顿1秒钟
        scene.showBasePlate();
        scene.idle(20);
      }
    );
});
```

### 我们想要把鼓风机显示出来,那就打开 Ponder 场景以及看你的结构,根据信息我们得知右边的鼓风机的位置在[2,1,1],那我们接着写

```js
// 显示底盘,同时停顿1秒钟
scene.showBasePlate();
scene.idle(20);
// 由动画的形式显示坐标为[2,1,1]的方块
scene.world.showSection([2, 1, 1], Direction.down);
```

### 这一段的代码是以动画从上面下落到坐标[2,1,1]的形式显示出这一格的方块,如果我们想要显示某区域的方块可以直接写

```js
scene.world.showSection([3, 1, 1, 1, 1, 3], Direction.down);
```

### 这样从[3,1,1]到[1,1,3]这一区域内的方块全部都会以下落的方式展现出来
