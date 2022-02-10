import { Listing } from '../config/types'
import client from './client'

const endpoint = '/categories'

const getCategories = () => client.get(endpoint)

export default { getCategories }
