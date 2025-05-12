import { ref } from 'vue'
import { shortenUrl } from '@/api/tinyUrl'
export function useShortener() {
  const inputLink = ref('')
  const historyLink = ref([])
  const isInValid = ref(false)
  const isApiError = ref(false)

  function isValidUrl(url) {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  async function handleShortenUrl() {
    const trimmedLink = inputLink.value.trim()

    if (!isValidUrl(trimmedLink)) {
      isInValid.value = true
      return
    }

    isInValid.value = false
    try {
      const shortUrl = await shortenUrl(trimmedLink)

      historyLink.value.push({
        originalUrl: trimmedLink,
        shortUrl: shortUrl,
        copied: false,
      })

      inputLink.value = ''
      isApiError.value = false
    } catch (error) {
      isApiError.value = true
      console.error('API error', error)
    }
  }

  return {
    inputLink,
    historyLink,
    isInValid,
    isApiError,
    handleShortenUrl,
  }
}
