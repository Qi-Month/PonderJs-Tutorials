> 调用函数使用 `scene.world.你要的函数` 即可
>
> 例如 : scene.world.setBlocks([2, 1, 1], "create:encased_fan");
>
> 相关内容请见[Ponder.md](https://github.com/Qi-Month/PonderJs-Tutorials/blob/main/Ponder.md)

<details>
  <summary>目录（单击展开）</summary>
  <ol>
    <li><a href="#以下代码节录自-internal_46.d.ts">internal_46</a> </li>
    <li><a href="#以下代码节录自-internal_26.d.ts">internal_26</a> </li>
  </ol>
</details>

# 以下代码节录自 internal_46.d.ts

```ts
class ExtendedSceneBuilder$ExtendedWorldInstructions extends Internal.SceneBuilder$WorldInstructions {
  constructor(arg0: Internal.ExtendedSceneBuilder_);
  createEntity(
    arg0: Internal.EntityType_<any>,
    arg1: Vec3d_,
    arg2: Internal.Consumer_<Internal.Entity>
  ): Internal.ElementLink<Internal.EntityElement>;
  modifyBlocks(
    arg0: Internal.Selection_,
    arg1: Internal.BlockStateFunction_,
    arg2: boolean_
  ): void_;
  setBlocks(
    arg0: Internal.Selection_,
    arg1: boolean_,
    arg2: Internal.BlockState_
  ): void_;
  setBlocks(arg0: Internal.Selection_, arg1: Internal.BlockState_): void_;
  modifyBlockEntityNBT(
    arg0: Internal.Selection_,
    arg1: boolean_,
    arg2: Internal.Consumer_<Internal.CompoundTag>
  ): void_;
  modifyBlocks(
    arg0: Internal.Selection_,
    arg1: boolean_,
    arg2: Internal.BlockStateFunction_
  ): void_;
  /**
   * @deprecated
   * This method is marked to be removed in future!
   */
  modifyTileNBT(
    arg0: Internal.Selection_,
    arg1: Internal.Consumer_<Internal.CompoundTag>
  ): void_;
  modifyBlockEntityNBT(
    arg0: Internal.Selection_,
    arg1: Internal.Consumer_<Internal.CompoundTag>
  ): void_;
  modifyBlocks(
    arg0: Internal.Selection_,
    arg1: Internal.BlockStateFunction_
  ): void_;
  modifyBlock(
    arg0: BlockPos_,
    arg1: Internal.BlockStateFunction_,
    arg2: boolean_
  ): void_;
  createEntity(
    arg0: Internal.EntityType_<any>,
    arg1: Vec3d_
  ): Internal.ElementLink<Internal.EntityElement>;
  /**
   * @deprecated
   * This method is marked to be removed in future!
   */
  modifyTileNBT(
    arg0: Internal.Selection_,
    arg1: Internal.Consumer_<Internal.CompoundTag>,
    arg2: boolean_
  ): void_;
  removeEntity(arg0: Internal.ElementLink_<Internal.EntityElement>): void_;
}
type ExtendedSceneBuilder$ExtendedWorldInstructions_ =
  ExtendedSceneBuilder$ExtendedWorldInstructions;
```

# 以下代码节录自 internal_26.d.ts

```ts
class SceneBuilder$WorldInstructions {
  constructor(arg0: Internal.SceneBuilder_);
  modifyBlocks(
    arg0: Internal.Selection_,
    arg1: Internal.UnaryOperator_<Internal.BlockState>,
    arg2: boolean_
  ): void_;
  setKineticSpeed(arg0: Internal.Selection_, arg1: number): void_;
  createItemOnBelt(
    arg0: BlockPos_,
    arg1: Internal.Direction_,
    arg2: Internal.ItemStack_
  ): Internal.ElementLink<Internal.BeltItemElement>;
  connectCrafterInvs(arg0: BlockPos_, arg1: BlockPos_): void_;
  createItemOnBeltLike(
    arg0: BlockPos_,
    arg1: Internal.Direction_,
    arg2: Internal.ItemStack_
  ): void_;
  toggleRedstonePower(arg0: Internal.Selection_): void_;
  setCraftingResult(arg0: BlockPos_, arg1: Internal.ItemStack_): void_;
  modifyBlockEntity<T extends Internal.BlockEntity>(
    arg0: BlockPos_,
    arg1: T,
    arg2: Internal.Consumer_<T>
  ): void_;
  hideIndependentSection(
    arg0: Internal.ElementLink_<Internal.WorldSectionElement>,
    arg1: Internal.Direction_,
    arg2: number
  ): void_;
  configureCenterOfRotation(
    arg0: Internal.ElementLink_<Internal.WorldSectionElement>,
    arg1: Vec3d_
  ): void_;
  configureStabilization(
    arg0: Internal.ElementLink_<Internal.WorldSectionElement>,
    arg1: Vec3d_
  ): void_;
  showIndependentSectionImmediately(
    arg0: Internal.Selection_
  ): Internal.ElementLink<Internal.WorldSectionElement>;
  animateBogey(arg0: BlockPos_, arg1: number, arg2: number): void_;
  showIndependentSection(
    arg0: Internal.Selection_,
    arg1: Internal.Direction_
  ): Internal.ElementLink<Internal.WorldSectionElement>;
  toggleControls(arg0: BlockPos_): void_;
  hideIndependentSectionImmediately(
    arg0: Internal.ElementLink_<Internal.WorldSectionElement>
  ): void_;
  flapFunnel(arg0: BlockPos_, arg1: boolean_): void_;
  createItemEntity(
    arg0: Vec3d_,
    arg1: Vec3d_,
    arg2: Internal.ItemStack_
  ): Internal.ElementLink<Internal.EntityElement>;
  showSection(arg0: Internal.Selection_, arg1: Internal.Direction_): void_;
  replaceBlocks(
    arg0: Internal.Selection_,
    arg1: Internal.BlockState_,
    arg2: boolean_
  ): void_;
  changeBeltItemTo(
    arg0: Internal.ElementLink_<Internal.BeltItemElement>,
    arg1: Internal.ItemStack_
  ): void_;
  removeItemsFromBelt(arg0: BlockPos_): void_;
  hideSection(arg0: Internal.Selection_, arg1: Internal.Direction_): void_;
  movePulley(arg0: BlockPos_, arg1: number, arg2: number): void_;
  restoreBlocks(arg0: Internal.Selection_): void_;
  multiplyKineticSpeed(arg0: Internal.Selection_, arg1: number): void_;
  modifyEntitiesInside<T extends Internal.Entity>(
    arg0: T,
    arg1: Internal.Selection_,
    arg2: Internal.Consumer_<T>
  ): void_;
  flashDisplayLink(arg0: BlockPos_): void_;
  instructArm(
    arg0: BlockPos_,
    arg1: Internal.ArmBlockEntity$Phase_,
    arg2: Internal.ItemStack_,
    arg3: number
  ): void_;
  glueBlockOnto(
    arg0: BlockPos_,
    arg1: Internal.Direction_,
    arg2: Internal.ElementLink_<Internal.WorldSectionElement>
  ): void_;
  animateTrainStation(arg0: BlockPos_, arg1: boolean_): void_;
  stallBeltItem(
    arg0: Internal.ElementLink_<Internal.BeltItemElement>,
    arg1: boolean_
  ): void_;
  changeSignalState(
    arg0: BlockPos_,
    arg1: Internal.SignalBlockEntity$SignalState_
  ): void_;
  cycleBlockProperty(arg0: BlockPos_, arg1: Internal.Property_<any>): void_;
  incrementBlockBreakingProgress(arg0: BlockPos_): void_;
  modifyBlockEntityNBT(
    arg0: Internal.Selection_,
    arg1: typeof Internal.BlockEntity,
    arg2: Internal.Consumer_<Internal.CompoundTag>,
    arg3: boolean_
  ): void_;
  showSectionAndMerge(
    arg0: Internal.Selection_,
    arg1: Internal.Direction_,
    arg2: Internal.ElementLink_<Internal.WorldSectionElement>
  ): void_;
  makeSectionIndependent(
    arg0: Internal.Selection_
  ): Internal.ElementLink<Internal.WorldSectionElement>;
  rotateBearing(arg0: BlockPos_, arg1: number, arg2: number): void_;
  dyeDisplayBoard(
    arg0: BlockPos_,
    arg1: number,
    arg2: Internal.DyeColor_
  ): void_;
  showIndependentSection(
    arg0: Internal.Selection_,
    arg1: Internal.Direction_,
    arg2: number
  ): Internal.ElementLink<Internal.WorldSectionElement>;
  modifyBlock(
    arg0: BlockPos_,
    arg1: Internal.UnaryOperator_<Internal.BlockState>,
    arg2: boolean_
  ): void_;
  moveSection(
    arg0: Internal.ElementLink_<Internal.WorldSectionElement>,
    arg1: Vec3d_,
    arg2: number
  ): void_;
  hideIndependentSection(
    arg0: Internal.ElementLink_<Internal.WorldSectionElement>,
    arg1: Internal.Direction_
  ): void_;
  propagatePipeChange(arg0: BlockPos_): void_;
  rotateSection(
    arg0: Internal.ElementLink_<Internal.WorldSectionElement>,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number
  ): void_;
  setBlocks(
    arg0: Internal.Selection_,
    arg1: Internal.BlockState_,
    arg2: boolean_
  ): void_;
  conductorBlaze(arg0: BlockPos_, arg1: boolean_): void_;
  modifyBlockEntityNBT(
    arg0: Internal.Selection_,
    arg1: typeof Internal.BlockEntity,
    arg2: Internal.Consumer_<Internal.CompoundTag>
  ): void_;
  setDisplayBoardText(
    arg0: BlockPos_,
    arg1: number,
    arg2: net.minecraft.network.chat.Component_
  ): void_;
  setFilterData(
    arg0: Internal.Selection_,
    arg1: typeof Internal.BlockEntity,
    arg2: Internal.ItemStack_
  ): void_;
  createEntity(
    arg0: Internal.Function_<Internal.Level, Internal.Entity>
  ): Internal.ElementLink<Internal.EntityElement>;
  modifyEntity(
    arg0: Internal.ElementLink_<Internal.EntityElement>,
    arg1: Internal.Consumer_<Internal.Entity>
  ): void_;
  moveDeployer(arg0: BlockPos_, arg1: number, arg2: number): void_;
  setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: boolean_): void_;
  destroyBlock(arg0: BlockPos_): void_;
  modifyKineticSpeed(
    arg0: Internal.Selection_,
    arg1: Internal.UnaryOperator_<number>
  ): void_;
  modifyEntities<T extends Internal.Entity>(
    arg0: T,
    arg1: Internal.Consumer_<T>
  ): void_;
}
type SceneBuilder$WorldInstructions_ = SceneBuilder$WorldInstructions;
```
