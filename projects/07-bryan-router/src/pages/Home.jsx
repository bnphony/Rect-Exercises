import { Link } from '../Link.jsx'

export function HomePage () {
    return (
      <>
        <h1>Home</h1>
        <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
        <Link to={'/about'}>Ir a Sobre nosotros</Link>
      </>
    )
  }
  