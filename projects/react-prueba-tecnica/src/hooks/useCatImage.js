import { useEffect, useState } from 'react' 

const PREFIX_IMAGE_URL = 'https://cataas.com'

// Custom Hook
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // Buscar la imagen
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join('-')
    const url = `${PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`
    setImageUrl(url)
  }, [fact])

  return { imageUrl }
}
