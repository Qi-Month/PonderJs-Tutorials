## 进阶用法(建议先把基础学好了再回来看这个)

> ### showIndependentSection
>
> `scene.world.showIndependentSection(selection: Selection, fadeInDirection: Direction): ElementLink<WorldSectionElement>`
>
> 该方法用于显示一个区域, 并返回该区域的`ElementLink`(此方法的动画同样持续 15 tick)
>
> ```js
> const example_link = scene.world.showIndependentSection(
>   [2, 1, 2],
>   Direction.down
> );
> ```

> ### showIndependentSection
>
> `scene.world.showIndependentSection(selection: Selection, fadeInDirection: Direction, fadeInDuration: number): ElementLink<WorldSectionElement>`
>
> 此方法相较与上面的方法, 多了一个`fadeInDuration`参数
>
> 该参数接受一个整数, 用于修改动画持续时间

> ### showIndependentSectionImmediately
>
> `scene.world.showIndependentSectionImmediately(selection: Selection): ElementLink<WorldSectionElement>`
>
> 此方法是上述两个方法的简化版, 作用是立刻显示一个区域, 并且返回该区域的`ElementLink`
>
> 作为简化的代价, 该方法的默认`fadeInDirection`为`Direction.down`

> ### showSectionAndMerge
>
> `scene.world.showSectionAndMerge(selection: Selection, fadeInDirection: Direction, link: ElementLink<WorldSectionElement>): void`
>
> 还记得我们刚刚创建的`example_link`吗?
>
> 便是此方法接受的`link`参数
>
> 该方法用于显示一个区域, 并将显示的区域合并到`link`中(此方法的动画同样持续 15 tick)

> ### glueBlockOnto
>
> `scene.world.glueBlockOnto(blockPos: BlockPos, fadeInDirection: Direction, link: ElementLink<WorldSectionElement>): void`
>
> 这个方法是为了方便 Java 开发者而写的
>
> 在 JavaScript 中, 它与上述方法的区别仅有第一个参数:
>
> - 该方法只能传入一个方块坐标
>
> - 而上述方法支持一个方块坐标或一个区域
