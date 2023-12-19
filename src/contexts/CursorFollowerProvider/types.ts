import { AnimationScope } from "framer-motion"

type TCursorActionType = "Set"
export type TCursorMode =
  "hovered"
  | "invisible"
  | "pressed"
  | "normal"


export interface ICursor {
  isLoading: boolean,
  projectId: number,
  title: string | null,
  mode: TCursorMode
}

export interface ICursorAction
  extends Partial<ICursor> {
  type: TCursorActionType,
}

export type TCursorModeContext = TCursorMode | null
export type TCursorTitleContext = string | null
export type TCursorIsLoadingContext = boolean | null
export type TCursorProjectIdContext = number | null
export type TCursorAnimationScopeContext = AnimationScope<any> | null
