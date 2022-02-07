import { getDocs } from 'firebase/firestore'
import { useState } from 'react'
import { listingsColRef } from '../firebase/firebase'

const useGetListing = () => {
  const [data, setData] = useState<any>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const request = async () => {
    let datas: any[] = []
    setLoading(true)
    await getDocs(listingsColRef)
      .then(snapshot => {
        snapshot.docs.forEach(doc => datas.push({ id: doc.id, ...doc.data() }))
        setError(false)
        setLoading(false)
        setData(datas)
      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
  }

  return { request, data, error, loading }
}

export default useGetListing
