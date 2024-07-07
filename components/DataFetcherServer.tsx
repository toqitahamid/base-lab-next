import { cache } from 'react'

const fetchData = cache(async (url: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const fullUrl = new URL(url, baseUrl).toString()
    const res = await fetch(fullUrl, { cache: 'no-store' }) // Disable caching
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const text = await res.text() // Get the response as text
    try {
      return JSON.parse(text) // Try to parse the text as JSON
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError)
      console.error('Raw response:', text)
      throw new Error('Invalid JSON response')
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
})

export default fetchData