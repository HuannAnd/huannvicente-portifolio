import {
  useLayoutEffect,
  useState
} from "react"

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

export default function useAsyncService<
  TService extends { [key in keyof TService]: (...args: any[]) => Promise<any> },
  TMethodsOfService extends keyof TService,
  TMethodArguments extends Parameters<TService[TMethodsOfService]>,
  TReturn extends UnwrapPromise<ReturnType<TService[TMethodsOfService]>>
>(
  service: TService,
  method: TMethodsOfService,
  ...args: TMethodArguments
): TReturn {
  const [data, setData] = useState<TReturn | null>(null)
  console.log("useAsyncService was render")
  useLayoutEffect(() => {
    async function getData() {
      try {
        console.log("Trying to catch data")
        const newData = await service[method](...args)
        setData(newData)
        console.log("Success to catch data")
      } catch (error) {
        console.error("Error to catch data")
        throw error
      }
    }

    getData()
  }, [])

  return data as TReturn
}