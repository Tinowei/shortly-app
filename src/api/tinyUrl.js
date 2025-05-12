// api / POST /

export async function shortenUrl(longUrl) {
  try {
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`,
    )
    const result = await response.text()

    if (result.toLowerCase().includes('error')) {
      throw new Error('Api error')
    }

    return result
  } catch (error) {
    console.error('API error', error)
    throw error
  }
}
