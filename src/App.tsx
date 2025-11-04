import { useEffect, useState } from 'react'

// Typescript model
type Place = {
  city: string
  country: string
  latitude: number
  longitude: number
}

// API's response
type ApiResponse<T> = {
  status: string
  code: number
  total: number
  data: T[]
}

export default function App() {
  const [places, setPlaces] = useState<Place[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const res = await fetch('https://fakerapi.it/api/v1/places?_quantity=10')
        const json: ApiResponse<Place> = await res.json()
        setPlaces(json.data)
      } catch (e) {
        setError('Failed to fetch places')
      } finally {
        setLoading(false)
      }
    }

    fetchPlaces()
  }, [])

  if (loading) return <p>Loading destinations...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <main style={{ maxWidth: 720, margin: '40px auto', fontFamily: 'system-ui' }}>
      <h1>🌍 Travel Explorer</h1>
      <p>Explore random destinations around the world.</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {places.map((place, i) => (
          <li
            key={i}
            style={{
              border: '1px solid #ddd',
              borderRadius: 8,
              marginBottom: 12,
              padding: 12,
            }}
          >
            <h3 style={{ margin: '4px 0' }}>{place.city}</h3>
            <p style={{ margin: 0, color: '#555' }}>{place.country}</p>
            <p style={{ margin: 0, fontSize: 12 }}>
              📍 {place.latitude.toFixed(3)}, {place.longitude.toFixed(3)}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
