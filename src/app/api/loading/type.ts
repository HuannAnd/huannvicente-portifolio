export enum CoookieLoadingValues {
  NONE = "no",
  NOT_FIRST_TIME = "not-first-time"

}

type TStatusCode = 401 | 400 | 200

export type TData = {
  data: any
  message: string
  error?: boolean
  status: TStatusCode
}