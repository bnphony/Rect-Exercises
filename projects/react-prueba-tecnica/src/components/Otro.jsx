import { useCatImage } from "../hooks/useCatImage.js"

export function Otro() {
  const { imageUrl } = useCatImage({ fact: "hola" })
  return (
    <>
      <img src={imageUrl}/>
    </>
  )
}