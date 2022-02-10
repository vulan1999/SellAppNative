export type Image = {
  id: number
  uri: any
}

export type Listing = {
  title: string
  price: number
  category: {
    label: string
    value: number
  }
  description: string
  images: any[]
}
