> 调用函数使用 `scene.你要的函数` 即可
>
> 例如 : scene.idle(3);
>
> 相关内容请见[Ponder.md](https://github.com/Qi-Month/PonderJs-Tutorials/blob/main/Ponder.md)

<details>
  <summary>目录（单击展开）</summary>
  <ol>
    <li><a href="#以下代码节录自-internal_33.d.ts">internal_33</a> </li>
    <li><a href="#以下代码节录自-internal_62.d.ts">internal_62</a> </li>
  </ol>
</details>

# 以下代码节录自 internal_33.d.ts

```ts
class SceneBuilder implements Internal.SceneBuilderAccessor {
  constructor(arg0: Internal.PonderScene_);
  configureBasePlate(arg0: number, arg1: number, arg2: number): void_;
  addInstruction(arg0: Internal.Consumer_<Internal.PonderScene>): void_;
  setSceneOffsetY(arg0: number): void_;
  idleSeconds(arg0: number): void_;
  title(arg0: string, arg1: string): void_;
  ponderjs$setSpecialInstructions(
    arg0: Internal.SceneBuilder$SpecialInstructions_
  ): void_;
  ponderjs$setWorldInstructions(
    arg0: Internal.SceneBuilder$WorldInstructions_
  ): void_;
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
  set sceneOffsetY(arg0: number);
  readonly overlay: Internal.SceneBuilder$OverlayInstructions;
  world: Internal.SceneBuilder$WorldInstructions;
  readonly debug: Internal.SceneBuilder$DebugInstructions;
  readonly effects: Internal.SceneBuilder$EffectInstructions;
  special: Internal.SceneBuilder$SpecialInstructions;
}
type SceneBuilder_ = SceneBuilder;
```

# 以下代码节录自 internal_62.d.ts

```ts
class ExtendedSceneBuilder extends Internal.SceneBuilder {
  constructor(arg0: Internal.PonderScene_);
  sharedText(
    arg0: number,
    arg1: ResourceLocation_,
    arg2: Vec3d_
  ): Internal.TextWindowElement$Builder;
  showControls(
    arg0: number,
    arg1: Vec3d_,
    arg2: PonderPointing_
  ): PonderInputWindowElement;
  sharedText(
    arg0: number,
    arg1: ResourceLocation_
  ): Internal.TextWindowElement$Builder;
  getDebug(): Internal.SceneBuilder$DebugInstructions;
  getOverlay(): Internal.SceneBuilder$OverlayInstructions;
  getParticles(): Internal.ParticleInstructions;
  getEffects(): Internal.SceneBuilder$EffectInstructions;
  showStructure(): void_;
  text(
    arg0: number,
    arg1: string,
    arg2: Vec3d_
  ): Internal.TextWindowElement$Builder;
  showStructure(arg0: number): void_;
  playSound(arg0: Internal.SoundEvent_): void_;
  getWorld(): Internal.ExtendedSceneBuilder$ExtendedWorldInstructions;
  playSound(
    arg0: Internal.SoundEvent_,
    arg1: Internal.SoundSource_,
    arg2: number,
    arg3: number
  ): void_;
  encapsulateBounds(arg0: BlockPos_): void_;
  text(arg0: number, arg1: string): Internal.TextWindowElement$Builder;
  getLevel(): Internal.ExtendedSceneBuilder$ExtendedWorldInstructions;
  playSound(arg0: Internal.SoundEvent_, arg1: number): void_;
  getSpecial(): Internal.SceneBuilder$SpecialInstructions;
  get debug(): Internal.SceneBuilder$DebugInstructions;
  get overlay(): Internal.SceneBuilder$OverlayInstructions;
  get particles(): Internal.ParticleInstructions;
  get effects(): Internal.SceneBuilder$EffectInstructions;
  get world(): Internal.ExtendedSceneBuilder$ExtendedWorldInstructions;
  get level(): Internal.ExtendedSceneBuilder$ExtendedWorldInstructions;
  get special(): Internal.SceneBuilder$SpecialInstructions;
}
type ExtendedSceneBuilder_ = ExtendedSceneBuilder;
```
