> ### encapsulateBounds
>
> `scene.encapsulateBounds(blockPos: BlockPos): void`
>
> 这个方法是 PonderJS 添加的工具方法, 其等效于
>
> ```js
> scene.addInstruction((ponderScene) => {
>   let world = ponderScene.world;
>   if (world != null) {
>     world.bounds.encapsulate(blockPos);
>   }
> });
> ```
>
> 作用是将`PonderWorld`的`BoundingBox`形变到与传入的方块坐标一致
