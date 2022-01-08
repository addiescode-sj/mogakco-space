export const BASE_API_URL = ''

export const BASE_URL_CONFIG = process.env.NEXT_PUBLIC_FIREBASE_BASE_URL_CONFIG
export const DEVELOPMENT = process.env.NEXT_PUBLIC_DEPLOYMENT

export const isDevelopment = DEVELOPMENT === 'develop'
