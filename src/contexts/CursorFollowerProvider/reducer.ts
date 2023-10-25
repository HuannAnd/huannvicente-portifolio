import { ICursor, ICursorAction } from "./types";

export default function reducer(
  action: ICursorAction,
  state: ICursor
) {
  switch (action.type) {
    case "Set":
    default:
      const { type, ...rest } = action;
      return { ...state, ...rest } as ICursor
  }
}