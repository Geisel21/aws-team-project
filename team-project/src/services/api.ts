import axios from 'axios'

export type SavePayload = Record<string, unknown>

function getEnvUrl(name: string): string | null {
  const v = (import.meta.env as Record<string, string | undefined>)[name]
  return v && typeof v === 'string' && v.trim() ? v.trim() : null
}

export async function saveData(payload: SavePayload) {
  const url = getEnvUrl('VITE_SAVE_URL')
  if (!url) {
    throw new Error('VITE_SAVE_URL is not configured. Please set it in your .env.local file.')
  }
  const { data } = await axios.post(url, payload, {
    headers: { 'Content-Type': 'application/json' },
  })
  return data
}

export async function retrieveData() {
  const url = getEnvUrl('VITE_RETRIEVE_URL')
  if (!url) {
    throw new Error('VITE_RETRIEVE_URL is not configured. Please set it in your .env.local file.')
  }
  const { data } = await axios.get(url)
  return data
}

export async function fetchRegion() {
  const url = getEnvUrl('VITE_REGION_URL')
  if (!url) {
    throw new Error('VITE_REGION_URL is not configured. Please set it in your .env.local file.')
  }
  const { data } = await axios.get(url)
  return data
}


