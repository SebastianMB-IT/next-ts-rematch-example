import { createModel } from "@rematch/core";
import type { RootModel } from ".";

export interface LogTypes {
	username : string;
	date: string;
}

export const log = createModel<RootModel>()({
  state: [] as LogTypes[],
  reducers: {
    addToLog: (state, payload: LogTypes) => {
			state.push(payload)
			return state
		},
  },
});
