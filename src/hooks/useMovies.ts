import { useCallback, useState } from "react";
import { Movie, ResponseStatus } from './types'
import { searchMovies } from "../services/movies";

const DEFAULT_ERROR_MESSAGE = 'Ops! Something goes wrong, please try again.'

export function useMovies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null)
  const [movies, setMovies] = useState<Movie[] | []>([])

  const getMovies = useCallback(
    async (search = ''): Promise<void> => {
      if (!search || search.length < 3) {
        setMovies([])
        return;
      }
      try {
        setLoading(true)
        setError(null)
        const response = await searchMovies({ search })
        if (response !== null) {
          if (response.Response === ResponseStatus.TRUE) {
            setMovies(response.Search)
          } else {
            setError(response.Error)
            setMovies([])
          }
        }
      } catch (error) {
        const reportError = error || DEFAULT_ERROR_MESSAGE
        setMovies([])
        setError(reportError as string)
      } finally {
        setLoading(false)
      }
    }
    , [])

  return [
    movies,
    getMovies,
    loading,
    error
  ] as const

}
