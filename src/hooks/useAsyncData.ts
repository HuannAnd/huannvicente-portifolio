import {
  useEffect,
  useLayoutEffect,
  useState
} from "react"

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

export default function useAsyncService<
  TService extends { [key in keyof TService]: (...args: any[]) => Promise<any> },
  TMethods extends keyof TService,
  TMethodArguments extends Parameters<TService[TMethods]>,
  TReturn extends UnwrapPromise<ReturnType<TService[TMethods]>>
>(
  service: TService,
  method: TMethods,
  ...args: TMethodArguments
): TReturn {
  const [data, setData] = useState<TReturn | null>(null)
  console.log("useAsyncService was render")
  useLayoutEffect(() => {
    async function getData() {
      try {
        console.log("trying catch data")
        const newData = await service[method](...args)
        setData(newData)
      } catch (error) {
        console.error("error to catch data")
        throw error
      }
    }

    getData()
  }, [])

  return data as TReturn
}