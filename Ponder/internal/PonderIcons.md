> 调用 picon 使用 `PonderIcons.你要的PonderIcons` 即可
>
> 例如 : PonderIcons.I_WHITELIST_AND

<details>
  <summary>目录（单击展开）</summary>
  
1. [globals](#以下代码节录自-globalsdts)
</details>

# 以下代码节录自 globals.d.ts

```ts
declare class PonderIcons implements Internal.ScreenElement {
  constructor(arg0: number, arg1: number);
  asStencil(): Internal.DelegatedStencilElement;
  bind(): void_;
  render(
    arg0: Internal.PoseStack_,
    arg1: Internal.MultiBufferSource_,
    arg2: number
  ): void_;
  render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void_;
  static readonly I_WHITELIST_AND: PonderIcons;
  static readonly I_ARM_ROUND_ROBIN: PonderIcons;
  static readonly I_SEQ_REPEAT: PonderIcons;
  static readonly I_PATTERN_CHECKERED: PonderIcons;
  static readonly VALUE_BOX_HOVER_8PX: PonderIcons;
  static readonly I_MTD_REPLAY: PonderIcons;
  static readonly I_TOOL_MOVE_Y: PonderIcons;
  static readonly I_PRIORITY_HIGH: PonderIcons;
  static readonly I_PATTERN_CHANCE_50: PonderIcons;
  static readonly I_CONFIG_PREV: PonderIcons;
  static readonly I_ATTACHED: PonderIcons;
  static readonly I_SCHEMATIC: PonderIcons;
  static readonly I_CONFIG_OPEN: PonderIcons;
  static readonly I_FX_FIELD_OFF: PonderIcons;
  static readonly I_FX_FIELD_ON: PonderIcons;
  static readonly I_REFRESH: PonderIcons;
  static readonly I_PLACE: PonderIcons;
  static readonly I_OVERLAY: PonderIcons;
  static readonly I_MOVE_PLACE_RETURNED: PonderIcons;
  static readonly I_CONFIG_SAVE: PonderIcons;
  static readonly I_CONFIRM: PonderIcons;
  static readonly I_ROLLER_FILL: PonderIcons;
  static readonly I_MOVE_NEVER_PLACE: PonderIcons;
  static readonly I_TUNNEL_FORCED_ROUND_ROBIN: PonderIcons;
  static readonly I_PATTERN_SOLID: PonderIcons;
  static readonly I_DISABLE: PonderIcons;
  static readonly I_TOOL_MOVE_XZ: PonderIcons;
  static readonly I_PATTERN_CHANCE_75: PonderIcons;
  static readonly ICON_ATLAS_SIZE: 256;
  static readonly I_SCROLL: PonderIcons;
  static readonly I_TUNNEL_FORCED_SPLIT: PonderIcons;
  static readonly I_CONFIG_UNLOCKED: PonderIcons;
  static readonly I_PASSIVE: PonderIcons;
  static readonly I_CONFIG_LOCKED: PonderIcons;
  static readonly I_PRIORITY_VERY_HIGH: PonderIcons;
  static readonly I_MTD_LEFT: PonderIcons;
  static readonly I_TOOLBOX: PonderIcons;
  static readonly I_MTD_SLOW_MODE: PonderIcons;
  static readonly I_OPEN_FOLDER: PonderIcons;
  static readonly I_MINUTE_HAND_FIRST: PonderIcons;
  static readonly I_ROTATE_PLACE: PonderIcons;
  static readonly I_PATTERN_CHECKERED_INVERSED: PonderIcons;
  static readonly I_HOUR_HAND_FIRST_24: PonderIcons;
  static readonly I_ARM_FORCED_ROUND_ROBIN: PonderIcons;
  static readonly I_REPLACE_ANY: PonderIcons;
  static readonly I_CONFIG_BACK: PonderIcons;
  static readonly I_MOVE_PLACE: PonderIcons;
  static readonly I_TARGET: PonderIcons;
  static readonly I_TUNNEL_SYNCHRONIZE: PonderIcons;
  static readonly I_FOLLOW_DIAGONAL: PonderIcons;
  static readonly I_ROLLER_PAVE: PonderIcons;
  static readonly I_REPLACE_EMPTY: PonderIcons;
  static readonly I_ROTATE_CCW: PonderIcons;
  static readonly I_CLEAR: PonderIcons;
  static readonly I_WHITELIST_NOT: PonderIcons;
  static readonly I_FLATTEN: PonderIcons;
  static readonly I_MTD_CLOSE: PonderIcons;
  static readonly I_CENTERED: PonderIcons;
  static readonly I_SKIP_BLOCK_ENTITIES: PonderIcons;
  static readonly I_BLACKLIST: PonderIcons;
  static readonly I_WHITELIST: PonderIcons;
  static readonly I_MTD_RIGHT: PonderIcons;
  static readonly I_CONFIG_DISCARD: PonderIcons;
  static readonly I_FX_BLEND_OFF: PonderIcons;
  static readonly I_WHITELIST_OR: PonderIcons;
  static readonly I_TOOL_DEPLOY: PonderIcons;
  static readonly I_CONFIG_RESET: PonderIcons;
  static readonly I_ADD: PonderIcons;
  static readonly I_CART_ROTATE: PonderIcons;
  static readonly I_REPLACE: PonderIcons;
  static readonly VALUE_BOX_HOVER_4PX: PonderIcons;
  static readonly I_TOOL_MIRROR: PonderIcons;
  static readonly I_CLEAR_CHECKED: PonderIcons;
  static readonly I_ADD_INVERTED_ATTRIBUTE: PonderIcons;
  static readonly ICON_ATLAS: ResourceLocation;
  static readonly I_3x3: PonderIcons;
  static readonly I_RMB: PonderIcons;
  static readonly I_PAUSE: PonderIcons;
  static readonly I_TOOL_ROTATE: PonderIcons;
  static readonly I_FLIP: PonderIcons;
  static readonly I_PRIORITY_LOW: PonderIcons;
  static readonly I_INSERTED: PonderIcons;
  static readonly I_FX_SURFACE_ON: PonderIcons;
  static readonly I_TUNNEL_PREFER_NEAREST: PonderIcons;
  static readonly I_ROLLER_WIDE_FILL: PonderIcons;
  static readonly I_CONFIG_NEXT: PonderIcons;
  static readonly I_DONT_REPLACE: PonderIcons;
  static readonly I_FX_SURFACE_OFF: PonderIcons;
  static readonly I_VIEW_SCHEDULE: PonderIcons;
  static readonly I_DICE: PonderIcons;
  static readonly I_NONE: PonderIcons;
  static readonly I_ACTIVE: PonderIcons;
  static readonly I_ROTATE_PLACE_RETURNED: PonderIcons;
  static readonly I_CART_ROTATE_PAUSED: PonderIcons;
  static readonly I_FX_BLEND: PonderIcons;
  static readonly VALUE_BOX_HOVER_6PX: PonderIcons;
  static readonly I_PLAY: PonderIcons;
  static readonly I_FILL: PonderIcons;
  static readonly I_SKIP_MISSING: PonderIcons;
  static readonly I_HOUR_HAND_FIRST: PonderIcons;
  static readonly I_REPLACE_SOLID: PonderIcons;
  static readonly I_TUNNEL_ROUND_ROBIN: PonderIcons;
  static readonly I_TUNNEL_RANDOMIZE: PonderIcons;
  static readonly I_PLACEMENT_SETTINGS: PonderIcons;
  static readonly I_MTD_USER_MODE: PonderIcons;
  static readonly I_LMB: PonderIcons;
  static readonly I_TUNNEL_SPLIT: PonderIcons;
  static readonly I_ARM_PREFER_FIRST: PonderIcons;
  static readonly I_TRASH: PonderIcons;
  static readonly I_PRIORITY_VERY_LOW: PonderIcons;
  static readonly I_PATTERN_CHANCE_25: PonderIcons;
  static readonly I_CART_ROTATE_LOCKED: PonderIcons;
  static readonly I_STOP: PonderIcons;
  static readonly I_RESPECT_NBT: PonderIcons;
  static readonly I_FOLLOW_MATERIAL: PonderIcons;
  static readonly I_IGNORE_NBT: PonderIcons;
  static readonly I_ROTATE_NEVER_PLACE: PonderIcons;
  static readonly I_MTD_SCAN: PonderIcons;
}
type PonderIcons_ = PonderIcons;
```
