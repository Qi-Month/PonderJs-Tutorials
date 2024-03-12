
> 调用函数使用 `scene.world.你要的函数` 即可
>
> 例如 : scene.world.idle(3);
>
> 相关内容请见[Ponder.md](https://github.com/Qi-Month/PonderJs-Tutorials/blob/main/Ponder.md)

<details>
  <summary>目录（单击展开）</summary>
  <ol>
    <li><a href="#以下代码节录自-internal_33.d.ts">internal_33</a> </li>
    <li><a href="#以下代码节录自-internal_46.d.ts">internal_46</a> </li>
  </ol>
</details>

# 以下代码节录自 internal_33.d.ts

```ts
    class SceneBuilder implements Internal.SceneBuilderAccessor {
        constructor(arg0: Internal.PonderScene_)
        configureBasePlate(arg0: number, arg1: number, arg2: number): void_;
        addInstruction(arg0: Internal.Consumer_<Internal.PonderScene>): void_;
        setSceneOffsetY(arg0: number): void_;
        idleSeconds(arg0: number): void_;
        title(arg0: string, arg1: string): void_;
        ponderjs$setSpecialInstructions(arg0: Internal.SceneBuilder$SpecialInstructions_): void_;
        ponderjs$setWorldInstructions(arg0: Internal.SceneBuilder$WorldInstructions_): void_;
        addInstruction(arg0: Internal.PonderInstruction_): void_;
        removeShadow(): void_;
        scaleSceneView(arg0: number): void_;
        idle(arg0: number): void_;
        markAsFinished(): void_;
        rotateCameraY(arg0: number): void_;
        showBasePlate(): void_;
        addKeyframe(): void_;
        addLazyKeyframe(): void_;
        ponderjs$getPonderScene(): Internal.PonderScene;
        set sceneOffsetY(arg0: number)
        readonly overlay: Internal.SceneBuilder$OverlayInstructions;
        world: Internal.SceneBuilder$WorldInstructions;
        readonly debug: Internal.SceneBuilder$DebugInstructions;
        readonly effects: Internal.SceneBuilder$EffectInstructions;
        special: Internal.SceneBuilder$SpecialInstructions;
    }
    type SceneBuilder_ = SceneBuilder;
```

# 以下代码节录自 internal_46.d.ts

```ts
    class ExtendedSceneBuilder$ExtendedWorldInstructions extends Internal.SceneBuilder$WorldInstructions {
        constructor(arg0: Internal.ExtendedSceneBuilder_)
        createEntity(arg0: Internal.EntityType_<any>, arg1: Vec3d_, arg2: Internal.Consumer_<Internal.Entity>): Internal.ElementLink<Internal.EntityElement>;
        modifyBlocks(arg0: Internal.Selection_, arg1: Internal.BlockStateFunction_, arg2: boolean_): void_;
        setBlocks(arg0: Internal.Selection_, arg1: boolean_, arg2: Internal.BlockState_): void_;
        setBlocks(arg0: Internal.Selection_, arg1: Internal.BlockState_): void_;
        modifyBlockEntityNBT(arg0: Internal.Selection_, arg1: boolean_, arg2: Internal.Consumer_<Internal.CompoundTag>): void_;
        modifyBlocks(arg0: Internal.Selection_, arg1: boolean_, arg2: Internal.BlockStateFunction_): void_;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        modifyTileNBT(arg0: Internal.Selection_, arg1: Internal.Consumer_<Internal.CompoundTag>): void_;
        modifyBlockEntityNBT(arg0: Internal.Selection_, arg1: Internal.Consumer_<Internal.CompoundTag>): void_;
        modifyBlocks(arg0: Internal.Selection_, arg1: Internal.BlockStateFunction_): void_;
        modifyBlock(arg0: BlockPos_, arg1: Internal.BlockStateFunction_, arg2: boolean_): void_;
        createEntity(arg0: Internal.EntityType_<any>, arg1: Vec3d_): Internal.ElementLink<Internal.EntityElement>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        modifyTileNBT(arg0: Internal.Selection_, arg1: Internal.Consumer_<Internal.CompoundTag>, arg2: boolean_): void_;
        removeEntity(arg0: Internal.ElementLink_<Internal.EntityElement>): void_;
    }
    type ExtendedSceneBuilder$ExtendedWorldInstructions_ = ExtendedSceneBuilder$ExtendedWorldInstructions;
```
