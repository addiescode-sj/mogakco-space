import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { BASE_API_URL } from '@constants/baseUrls'

export const apiInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 100000,
})

export const BASE_URL = BASE_API_URL

export const request = <T>(
  config: AxiosRequestConfig,
  onSuccess?: (value: AxiosResponse<T>) => void,
  onError?: (reason: any) => void
) => {
  const client = apiInstance
  return client(config).then(onSuccess).catch(onError)
}

const fetcher = async (args: AxiosRequestConfig) => await request({ ...args })

export default fetcher
