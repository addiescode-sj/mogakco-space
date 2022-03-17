import { AxiosRequestConfig } from 'axios'
import useSWR from 'swr'

interface DataResponse<T> {
  data?: T
}

export function useRequest<T>(args: AxiosRequestConfig) {
  const { data: result, error } = useSWR<DataResponse<T>>({ ...args })

  // error exception
  if (error) console.error(error)

  return { data: result?.data }
}
