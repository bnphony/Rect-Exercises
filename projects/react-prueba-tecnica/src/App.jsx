import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refresRandomFact } = useCatFact()

  const { imageUrl } = useCatImage({ fact })


  const handleClick = async () => {
    refresRandomFact()
  }
  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Imagen extracted using the first three words for ${fact}`}
          />
        )}
      </section>
    </main>
  )
}
