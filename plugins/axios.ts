import axios from "axios"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.BACKEND_API_BASE_URL as string

  const axiosInstance = axios.create({
    baseURL,
  })

  axiosInstance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios: axiosInstance,
    },
  }
})
