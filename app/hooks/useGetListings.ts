import { useState } from 'react'
import listingAPI from '../api/listings'

const useGetListings = () => {
  const [data, setData] = useState<any>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const request = async () => {
    setLoading(true)
    const response = await listingAPI.getListings()
    setLoading(false)
    if (!response.ok) {
      return setError(true)
    }
    setError(false)
    setData(response.data)
  }

  return { request, data, error, loading }
}

export default useGetListings
