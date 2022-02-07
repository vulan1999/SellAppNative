import { addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { listingsColRef } from '../firebase/firebase'

const usePostListing = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const request = async (listing: any) => {
    setLoading(true)
    await addDoc(listingsColRef, {
      title: listing.title,
      price: listing.price,
      categoryId: listing.category.value,
      description: listing.description,
      images: listing.images,
    })
      .then(() => {
        setError(false)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        console.log(err)
      })
  }

  return { loading, error, request }
}

export default usePostListing
