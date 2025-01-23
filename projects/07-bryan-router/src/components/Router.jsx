import { EVENTS } from '../consts.js'
import { useState, useEffect, Children } from 'react'

import { match } from 'path-to-regexp'
import { getCurrentPath } from '../utils.js'

export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  // Add routes from children <Route /> Components
  const routesFromChildren = Children.map(children, ({ props, type}) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  // Concatenar las URLS del objeto 'routes' con las URLs children del 
  // Componente Router
  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true
    
    // Utilizamos path-to-regexp
    // para detectar rutas dinamicas -> /search/:query
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // Guardar los parametros de la ruta dinamica
    // /search/:query
    routeParams = matched.params // { query: 'javascript' } -> /search/javascript
    return true

  })?.Component

  return Page 
    ? <Page routeParams={routeParams}/> 
    : <DefaultComponent routeParams={routeParams}/>
}