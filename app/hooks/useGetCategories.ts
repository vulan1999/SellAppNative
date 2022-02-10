import { useState } from 'react'
import categoriesAPI from '../api/categories'
import { Category } from '../screens/SearchScreen'

const useGetCategories = () => {
  const [data, setData] = useState<any>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const request = async () => {
    setLoading(true)
    const response = await categoriesAPI.getCategories()
    setLoading(false)
    if (!response.ok) {
      return setError(true)
    }
    setError(false)
    setData(response.data)
  }

  return { request, data, error, loading }
}

export default useGetCategories
