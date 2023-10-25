type TCursorActionType = "Set"
type TCursorState =
  "hovered"
  | "invisible"
  | "pressed"
  | "normal"

type TCursorIcon =
  "none"
  | "arrow"
  | "home"
  | "externalLink"
  | null


export interface ICursor {
  isLoading: boolean,
  icon: TCursorIcon,
  title: string | null,
  state: TCursorState
}

export interface ICursorAction
  extends Partial<ICursor> {
  type: TCursorActionType,
}

