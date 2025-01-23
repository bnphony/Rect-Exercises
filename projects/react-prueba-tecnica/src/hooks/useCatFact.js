import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/fact.js'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refresRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refresRandomFact, [])

  return { fact, refresRandomFact }
}
