import { createModel } from '@rematch/core'
import type { RootModel } from '.'

export const count = createModel<RootModel>()({
	state: 0,
	reducers: {
		increment: (state, payload: number = 1) => state + payload,
	},
	effects: (dispatch) => ({
		async incrementAsync() {
			await setTimeout(() => console.log('timeout'), 1000)
			dispatch.count.increment()
		},
	}),
})