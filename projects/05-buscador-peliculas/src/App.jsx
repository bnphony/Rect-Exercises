import './App.css'
import { useRef, useState, useEffect, useCallback } from 'react'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import debounce from 'just-debounce-it'

// Custom HOOK
function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }
    if (search === '') {
      setError('La pelicula no puede ser vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('La pelicula no puede ser solo numeros')
      return
    }
    if (search.length < 3) {
      setError('La pelicula debe tener mas de 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 500),
    [getMovies]
  )

  const handleSubmit = event => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = event => {
    const newValue = event.target.value
    setSearch(newValue)
    debounceGetMovies({ newValue })
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name='query'
            value={search}
            placeholder='Avengers, Star Wars, The Matrix ...'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>{loading ? 'Cargando...' : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
