Ponder.registry(e => {
	e.create('kubejs:submarine_core')
		.scene(
			'kubejs:submarine',
			'潜水艇 ',
			'kubejs:submarine',
			(scene, utils) => {
				// 显示底盘
				scene.showBasePlate()
				scene.idle(20)
				scene.scaleSceneView(0.8)
				// 
				scene.addKeyframe()
				const blocks_1 = [
					[5, 1, 5], [4, 1, 5], [3, 1, 5],
					[5, 1, 4], [4, 1, 4], [3, 1, 4],
					[6, 1, 3], [5, 1, 3], [3, 1, 3], [2, 1, 3],
					[6, 1, 2], [5, 1, 2], [4, 1, 2], [3, 1, 2], [2, 1, 2]
				]
				for (let block of blocks_1) {
					scene.world.showSection(block, Direction.down)
					scene.idle(2)
				}
				scene.world.showSection([4, 1, 3], Direction.down)
				scene.idle(20)
				//
				scene.addKeyframe()
				const blocks_2 = [
					[6, 2, 2], [6, 2, 3], [6, 2, 4], [6, 2, 5],
					[2, 2, 2], [2, 2, 3], [2, 2, 4], [2, 2, 5],
					// 
					[6, 3, 2], [6, 3, 4], [6, 3, 5],
					[2, 3, 2], [2, 3, 4], [2, 3, 5],
					// 
					[6, 4, 2], [6, 4, 3], [6, 4, 4], [6, 4, 5],
					[2, 4, 2], [2, 4, 3], [2, 4, 4], [2, 4, 5]
				]
				for (let block of blocks_2) {
					scene.world.showSection(block, Direction.down)
					scene.idle(2)
				}
				scene.world.showSection([6, 3, 3], Direction.west)
				scene.world.showSection([2, 3, 3], Direction.east)
				scene.idle(20)
				//
				scene.rotateCameraY(45)
				scene.idle(20)
				//
				scene.addKeyframe()
				const blocks_3 = [
					[4, 2, 3], [4, 2, 2],
					[4, 3, 3], [4, 3, 2]
				]
				for (let block of blocks_3) {
					scene.world.showSection(block, Direction.down)
					scene.idle(2)
				}
				//
				scene.text(40, '§b列车驾驶台', [4.5, 3.5, 2])
				scene.idle(40)
				scene.rotateCameraY(-180)
				scene.idle(20)
				scene.text(40, '§b蓄电池', [4.5, 2.5, 3.5])
				scene.idle(40)
				scene.rotateCameraY(-180)
				scene.idle(40)
				// 
				scene.addKeyframe()
				const blocks_4 = [
					[5, 3, 1], [4, 3, 1], [3, 3, 1],
					[5, 4, 1], [4, 4, 1], [3, 4, 1]
				]
				for (let block of blocks_4) {
					scene.world.showSection(block, Direction.south)
					scene.idle(2)
				}
				scene.idle(20)
				//
				scene.world.showSection([5, 2, 1], Direction.west)
				scene.world.showSection([3, 2, 1], Direction.east)
				scene.idle(5)
				scene.world.showSection([4, 2, 1], Direction.up)
				scene.text(30, '§b铝板金属', [4, 2.5, 1.5])
				scene.idle(30)
				scene.idle(20)
				// 
				const blocks_5 = [
					[6, 2, 1], [2, 2, 1]
				]
				for (let block of blocks_5) {
					scene.world.showSection(block, Direction.down)
				}
				scene.world.showSection([6, 1, 1], Direction.west)
				scene.world.showSection([2, 1, 1], Direction.east)
				scene.idle(20)
				// 
				scene.addKeyframe()
				const blocks_6 = [
					[5, 5, 5], [4, 5, 5], [3, 5, 5],
					[5, 5, 4], [3, 5, 4],
					[5, 5, 3], [3, 5, 3],
					[5, 5, 2], [4, 5, 2], [3, 5, 2]
				]
				for (let block of blocks_6) {
					scene.world.showSection(block, Direction.down)
					scene.idle(2)
				}
				scene.world.showSection([4, 5, 4], Direction.down)
				scene.world.showSection([4, 5, 3], Direction.down)
				scene.idle(20)
				//
				scene.addKeyframe()
				scene.rotateCameraY(180)
				scene.idle(20)
				const blocks_7 = [
					[3, 2, 6], [4, 2, 6], [5, 2, 6],
					[3, 3, 6], [5, 3, 6],
					[3, 4, 6], [4, 4, 6], [5, 4, 6]
				]
				for (let block of blocks_7) {
					scene.world.showSection(block, Direction.north)
					scene.idle(2)
				}
				scene.world.showSection([4, 3, 6], Direction.north)
				scene.idle(20)
				scene.rotateCameraY(150)
				scene.idle(20)
				// 锤子
				scene.addKeyframe()
				scene.text(30, '§b用工程师锤右击正前方的铝板金属')
				// 右键
				scene.showControls(
					30,
					utils.grid.at(4, 2, 1),
					'down'
				)
					.rightClick()
					.withItem('immersiveengineering:hammer')
				scene.idle(30)
				//
				scene.world.setBlocks([6, 1, 1, 2, 5, 6], 'minectaft:air')
				scene.world.createEntity('alexscaves:submarine', [4, 2, 3])
				scene.idle(20)
			}
		)
})