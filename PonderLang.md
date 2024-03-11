# 关于翻译

> 在构筑代码的时候, 你可能会为了将内容翻译成其他语种而烦恼, 不过不用担心, Ponder会自动建立翻译文件

# 开始之前

当你完成代码并启动游戏时, Ponder 会自动生成对应的名为 `en_us.json` 的翻译文件`(即使你的代码内对应的描述并非英文)`, 其档案路径为

> kubejs\assets\ponderjs_generated\lang\en_us.json

此处只举两个简单的例子 :
> en_us.json 对应英文
> 
> zh_cn.json 对应简体中文

# Tag 的部分
以位于 `client_scripts` 的名为 `PonderTag.js` 的以下代码为例

```js
Ponder.tags((e) => {
  e.createTag(
    "kubejs:iron_golem", "minecraft:iron_ingot", "铁傀儡", "铁傀儡是高大强壮的友好生物，用于保护玩家和村民。"
  );
});
```
此时应会在对应的 `en_us.json` 生成

```json
{
  "kubejs.ponder.tag.iron_golem": "铁傀儡",
  "kubejs.ponder.tag.iron_golem.description": "铁傀儡是高大强壮的友好生物，用于保护玩家和村民。"
}
```
> kubejs  对应 PonderTag 的 id 的前缀
>
> ponder.tag  代表其对应 tag 部分
>
> iron_golem  对应 PonderTag 的 id 的后缀

知道对应关系后便能进行档案的修改了
