<details>
  <summary>目录（单击展开）</summary>
  
1. [globals](#以下代码节录自-globalsdts)
2. [internal_1](#以下代码节录自-internal_1dts)
</details>

# 以下代码节录自 globals.d.ts

```ts
declare interface Facing {
    readonly south: Internal.Direction;
    readonly up: Internal.Direction;
    readonly UP: Internal.Direction;
    readonly NORTH: Internal.Direction;
    readonly east: Internal.Direction;
    readonly DOWN: Internal.Direction;
    readonly EAST: Internal.Direction;
    readonly west: Internal.Direction;
    readonly north: Internal.Direction;
    readonly down: Internal.Direction;
    readonly ALL: {"east": Internal.Direction, "south": Internal.Direction, "north": Internal.Direction, "west": Internal.Direction, "up": Internal.Direction, "down": Internal.Direction};
    readonly WEST: Internal.Direction;
    readonly SOUTH: Internal.Direction;
}
type Facing_ = Facing;
declare const Facing: Facing;
```

# 以下代码节录自 internal_1.d.ts

```ts
    class Direction extends Internal.Enum<Internal.Direction> implements Internal.StringRepresentable {
        static fromYRot(arg0: number): Internal.Direction;
        static valueOf(arg0: string): Internal.Direction;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getX(): number;
        getY(): number;
        getSerializedName(): string;
        getNormal(): Vec3i;
        getHorizontalIndex(): number;
        getIndex(): number;
        getAxis(): Internal.Direction$Axis;
        getClockWise(): this;
        static getNearest(arg0: number, arg1: number, arg2: number): Internal.Direction;
        static getRandom(arg0: Internal.RandomSource_): Internal.Direction;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static orderedByNearest(arg0: Internal.Entity_): Internal.Direction[];
        getClockWise(arg0: Internal.Direction$Axis_): this;
        static getFacingAxis(arg0: Internal.Entity_, arg1: Internal.Direction$Axis_): Internal.Direction;
        getPitch(): number;
        static values(): Internal.Direction[];
        static fromDelta(arg0: number, arg1: number, arg2: number): Internal.Direction;
        getName(): string;
        getZ(): number;
        static fromAxisAndDirection(arg0: Internal.Direction$Axis_, arg1: Internal.Direction$AxisDirection_): Internal.Direction;
        getOpposite(): this;
        static from2DDataValue(arg0: number): Internal.Direction;
        static stream(): Internal.Stream<Internal.Direction>;
        step(): Vec3f;
        getAxisDirection(): Internal.Direction$AxisDirection;
        static from3DDataValue(arg0: number): Internal.Direction;
        getCounterClockWise(arg0: Internal.Direction$Axis_): this;
        static rotate(arg0: Matrix4f_, arg1: Internal.Direction_): Internal.Direction;
        isFacingAngle(arg0: number): boolean_;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static getNearest(x: number, y: number, z: number): Internal.Direction;
        static byName(arg0: string): Internal.Direction;
        getYaw(): number;
        static allShuffled(arg0: Internal.RandomSource_): Internal.Collection<Internal.Direction>;
        getRotation(): Quaternionf;
        static get(arg0: Internal.Direction$AxisDirection_, arg1: Internal.Direction$Axis_): Internal.Direction;
        getCounterClockWise(): this;
        get x(): number
        get y(): number
        get serializedName(): string
        get normal(): Vec3i
        get horizontalIndex(): number
        get index(): number
        get axis(): Internal.Direction$Axis
        get clockWise(): Internal.Direction
        get pitch(): number
        get name(): string
        get z(): number
        get opposite(): Internal.Direction
        get axisDirection(): Internal.Direction$AxisDirection
        get yaw(): number
        get rotation(): Quaternionf
        get counterClockWise(): Internal.Direction
        static readonly UP: Internal.Direction;
        static readonly NORTH: Internal.Direction;
        static readonly DOWN: Internal.Direction;
        static readonly EAST: Internal.Direction;
        static readonly WEST: Internal.Direction;
        static readonly CODEC: Internal.StringRepresentable$EnumCodec<Internal.Direction>;
        static readonly SOUTH: Internal.Direction;
        static readonly VERTICAL_CODEC: Internal.Codec<Internal.Direction>;
    }
    type Direction_ = "west" | "east" | "south" | "up" | "down" | "north" | Direction;
```
