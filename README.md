# PonderJS Tutorials

## 起源

> 截止至本篇教程开始编写的时间(2024.03.07), 我们没有在市面上发现任何一篇对新手较为友好的教程(GitHub 上的 wiki 和没有一样)
>
> 因此, 在本篇教程, 我们会将我所掌握的所有 PonderJS 知识全盘托出，但是我会的也不算多, 基本都是相对基础的知识, 但是写一个简单的 Ponder 基本也都足够了。
>
> 我不希望我身为前辈在前面踩过的坑让后辈再踩一次, 因此打算将我们所掌握的知识点全盘托出, 让后辈尽可能的少踩点坑。

## 声明

> 本人会的知识与真正的大佬比起来并不算多, 相对基础，因此本篇教程所教的东西都是在 Ponder 里很基础很简单的, 至于复杂一点的(例如 IE 的各种工作站等)我会在学会后尽早补上
>
> 本篇教程所会写的永远都是我们编者目前所掌握的全部知识, 不代表是 PonderJS 的全部知识点, 不要用「誒你这教程都不全的」一类的话以此要挟, 我相信聪明的哥哥姐姐们不会那么做的。
>
> 可以提 Issues, 或者交 PR 协助编写, 我们将打自心底的感谢🙏
>
> 最后, 感谢和我一起编写的其它编者!

本篇教程基于 KubeJS 6 编写, 在此之前我也写过 KubeJS 5 的, `1.18.2-1.20.1`各种方法没有区别, 唯一的区别就是开头的事件声明(截止我已发现的)

但是`1.16.5`的[PonderJS](https://www.mcmod.cn/class/4979.html)语句和`1.18.2`及以后的[Ponder for KubeJS](https://www.mcmod.cn/class/7205.html)语句有一定的区别, 老版本的语句更偏向于Create原版的语句, 但是本文档并不教老版本的语法, 这边更建议直接去看[Create自己的Ponder](https://github.com/Creators-of-Create/Create/tree/mc1.20.1/dev/src/main/java/com/simibubi/create/infrastructure/ponder)

### KubeJS 5

```js
// Ponder添加
onEvent("ponder.registry", (event) => {})
// PonderTag添加
onEvent("ponder.tag", (event) => {})
```

### KubeJS 6

```js
// Ponder添加
Ponder.registry((event) => {})
// PonderTag添加
Ponder.tags((event) => {})
```

## 所需要的工具

- 七根木棍(梯子)(仅仅只是为了确保 GitHub 稳定性, 教程中包含大量的图, 如果因为连接的不稳定而看不到图将会是**最大的损失**)
- 实在没有梯子加速器也可以, 这里比较推荐[**Watt Toolkit**](https://steampp.net)
- [Ponder for KubeJS](https://www.mcmod.cn/class/7205.html)(1.18.2 及以上), 以及它们的前置
- [ProbeJS](https://www.mcmod.cn/class/6486.html)
- 那么 **一丢丢** 🌌🤏 的 KubeJS 基础

直接开始的[**传送门**](Ponder/Ponder.md)
