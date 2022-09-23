import { Models } from '@rematch/core'
import { count } from './count'
import { log } from './log'

export interface RootModel extends Models<RootModel> {
	count: typeof count,
  log: typeof log
}

export const models: RootModel = { count, log }