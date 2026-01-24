<script setup lang="ts">
import { computed, ref } from 'vue'
import { fetchRegion, retrieveData, saveData } from '../services/api'

const rawJson = ref<string>('{\n  "message": "Hello from Team Project"\n}')
const status = ref<string>('')
const output = ref<string>('')
const isBusy = ref(false)

const parsedPayload = computed(() => {
  try {
    return JSON.parse(rawJson.value)
  } catch {
    return null
  }
})

function setResult(title: string, data: unknown) {
  status.value = title
  output.value = JSON.stringify(data, null, 2)
}

function setError(title: string, err: unknown) {
  status.value = title
  const msg =
    err instanceof Error
      ? err.message
      : typeof err === 'string'
        ? err
        : 'Unknown error'
  output.value = msg
}

async function onSave() {
  if (!parsedPayload.value) {
    setError('Save failed', 'Payload must be valid JSON.')
    return
  }
  isBusy.value = true
  try {
    const data = await saveData(parsedPayload.value)
    setResult('Saved', data)
  } catch (e) {
    setError('Save failed', e)
  } finally {
    isBusy.value = false
  }
}

async function onRetrieve() {
  isBusy.value = true
  try {
    const data = await retrieveData()
    setResult('Retrieved', data)
  } catch (e) {
    setError('Retrieve failed', e)
  } finally {
    isBusy.value = false
  }
}

async function onRegion() {
  isBusy.value = true
  try {
    const data = await fetchRegion()
    setResult('EC2 Region', data)
  } catch (e) {
    setError('Region lookup failed', e)
  } finally {
    isBusy.value = false
  }
}
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-2">
    <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-base font-semibold text-slate-900 dark:text-white">Aurora via API Gateway</h3>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Use <code class="rounded bg-slate-100 px-1 py-0.5 text-xs dark:bg-slate-800">VITE_SAVE_URL</code> and
            <code class="rounded bg-slate-100 px-1 py-0.5 text-xs dark:bg-slate-800">VITE_RETRIEVE_URL</code>.
          </p>
        </div>
      </div>

      <label class="mt-4 block text-sm font-medium text-slate-800 dark:text-slate-200" for="payload">Payload (JSON)</label>
      <textarea
        id="payload"
        v-model="rawJson"
        rows="9"
        class="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2 font-mono text-xs text-slate-900 shadow-sm outline-none ring-sky-500/30 transition focus:ring-4 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
        spellcheck="false"
      />
      <p v-if="!parsedPayload" class="mt-2 text-sm text-rose-600 dark:text-rose-400">Invalid JSON — fix before saving.</p>

      <div class="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          class="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
          :disabled="isBusy || !parsedPayload"
          @click="onSave"
        >
          Save
        </button>
        <button
          type="button"
          class="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
          :disabled="isBusy"
          @click="onRetrieve"
        >
          Retrieve
        </button>
        <button
          type="button"
          class="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
          :disabled="isBusy"
          @click="onRegion"
        >
          Get EC2 Region
        </button>
      </div>
    </div>

    <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-base font-semibold text-slate-900 dark:text-white">Result</h3>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">Status: <span class="font-medium">{{ status || '—' }}</span></p>
        </div>
      </div>

      <pre
        class="mt-4 max-h-[360px] overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
      ><code>{{ output || 'No output yet.' }}</code></pre>

      <p class="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Tip: API Gateway must enable CORS for your site origin.
      </p>
    </div>
  </div>
</template>


