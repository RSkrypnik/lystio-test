import {
  type FetchOptions,
  type FetchRequest,
  ofetch
} from "ofetch"

export const myFetch = <T = any>(
  request: FetchRequest,
  options?: FetchOptions
) => {
  return   ofetch
  .raw<T, any>(request, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    },
    baseURL: "https://api.lystio.co",
    ...options
  })
  .then(res => res?._data ?? null)
}

export const postRequest = <T = any>(
  request: FetchRequest,
  options?: FetchOptions
) => myFetch(request, { ...options, method: "POST" })
