import { Listing } from '../config/types'
import client from './client'

const endpoint = '/listings'

const getListings = () => client.get(endpoint)

const addListing = (listing: Listing, onUploadProgress: any) => {
  const data = new FormData()
  data.append('title', listing.title)
  data.append('price', listing.price.toString())
  data.append('categoryId', listing.category.value.toString())
  data.append('description', listing.description)

  listing.images.forEach((image, index) => {
    data.append('images', {
      name: 'image ' + index,
      type: 'image/jpeg',
      uri: image,
    })
  })

  return client.post(endpoint, data, {
    onUploadProgress: progress =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

export default { getListings, addListing }
