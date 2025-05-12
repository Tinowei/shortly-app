export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    console.log('copy success:', text)
    return true
  } catch (err) {
    console.error('error:', err)
    return false
  }
}
