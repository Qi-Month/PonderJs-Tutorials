# 关于ponder的分类

### 脚本目录位于.minecraft/kubejs/client_scripts 在此文件内的任意地方都可以,但是更建议在 client_scripts 内创建一个"Ponder"文件夹,将你的 Ponder 脚本丢进去,而 Ponder 文件夹内还可以套文件夹用于进一步的整理与分类,养成分类的好习惯,会让你的编写更加方便

## 和其他的 KubeJS 脚本一样,开头都应该先声明事件,所有的编写都在{}内进行

```js
Ponder.tags(e => {});
```

## 第一种: 建立新的PonderTag

```js
Ponder.tags(e => {
    e.createTag(
      "kubejs:Iron_Golem",  // 你设定的PonderTag的id
      "minecraft:iron_ingot",  // 你设定的PonderTag的图标
      "铁傀儡",  // 你设定的PonderTag的名称
      "铁傀儡是高大强壮的友好生物，用于保护玩家和村民。", // 你设定的PonderTag的介绍
      ['minecraft:iron_block', 'minecraft:carved_pumpkin'] // **可选参数** 你设定的PonderTag的关联词条, 只有一个时也能不用 [ ]
    );
});
```

## 第二种: 为已有的PonderTag添加新的关联物品

```js
Ponder.tags(e => {
    e.add(
      "kubejs:Iron_Golem",  // 要编辑的PonderTag
      ['minecraft:iron_ingot', 'minecraft:poppy']  // 要加入的关联词条, 只有一个时也能不用 [ ]
    );
});
```

## 第三种: 删除PonderTag内的的关联物品

```js
Ponder.tags(e => {
    e.remove(
      "kubejs:Iron_Golem",  // 要编辑的PonderTag
      ['minecraft:iron_ingot', 'minecraft:poppy']  // 要删除的关联词条, 只有一个时也能不用 [ ]
    );
});
```


## 第四种: 删除已有的PonderTag

```js
Ponder.tags(e => {
    e.removeTag(
      "kubejs:Iron_Golem"  // 要删除的PonderTag, 删除复数PonderTag时无须 [ ],  用逗号隔开PonderTag即可
    );
});
```
