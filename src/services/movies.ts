import { EmptyMovies, Movies } from "../hooks/types"

// TODO: In a production app this value must be a Secret
const API_KEY = 'f63cf2bb'

export async function searchMovies({ search = '' }): Promise<Movies | EmptyMovies | null> {
  if (search === '') return null
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`)
    return await response.json()
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String('Ops! an error ocurred, please try again.')
    throw new Error(message)
  }
}