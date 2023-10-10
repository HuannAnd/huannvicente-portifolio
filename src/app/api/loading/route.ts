import { cookies } from "next/headers";

import { CoookieLoadingValues, TData } from './type'

interface Response extends TData { }


export async function GET(request: Request) {
  const cookiesList = cookies()

  if (!cookiesList.has("loading")) {
    const isFirstTimeLoading = cookiesList.set("loading", CoookieLoadingValues.NOT_FIRST_TIME)

    // if (isFirstTimeLoading) return new Response({})
  }
}

export async function POST(request: Request) {
  const isFirstTime = await request.json()
}
