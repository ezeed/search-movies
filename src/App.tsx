import { useEffect, useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { AutoComplete } from './components/auto-complete'
import './App.css'

const DEFAULT_QUERY = ''

function App() {
  const [query, setQuery] = useState(DEFAULT_QUERY)
  const [movies, getMovies, loading, error] = useMovies()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event?.target
    const newValue = value || DEFAULT_QUERY
    setQuery(newValue)
  }

  function handleReset() {
    setQuery(DEFAULT_QUERY)
  }

  useEffect(() => {
    const debouncedGetMovies = setTimeout(() => getMovies(query), 500);
    return () => clearTimeout(debouncedGetMovies);
  }, [query])

  return (
    <main>
      <div className="container">
        <input className='search-box' placeholder='search movie' value={query} onChange={handleChange} autoFocus />
        {error !== null && <span className='error'>{error}</span>}
        <AutoComplete
          movies={movies}
          query={query}
          loading={loading}
          handleReset={handleReset}
        />
      </div>
    </main>
  )
}

export default App
