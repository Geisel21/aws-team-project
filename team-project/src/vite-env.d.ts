/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SAVE_URL?: string
  readonly VITE_RETRIEVE_URL?: string
  readonly VITE_REGION_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


