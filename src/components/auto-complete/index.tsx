import { Movie } from "../../hooks/types";
import { HighlightedText } from "../highlighted-text";
import './auto-complete.css'

interface AutoCompleteProps {
  movies: Movie[],
  query: string,
  loading: boolean
  handleReset: () => void
}

export function AutoComplete({ movies, query, loading, handleReset }: AutoCompleteProps): JSX.Element {
  if (!movies.length || !query) return <></>
  if (loading) return <span>Loading...</span>

  return (
    <ul className='auto-complete'>
      {
        movies.map(({ imdbID, Title }) => (
          <li key={imdbID}>
            <HighlightedText baseText={Title} highlight={query} />
          </li>
        ))
      }
      <li>
        <button onClick={handleReset}>clear</button>
      </li>
    </ul>
  )
}