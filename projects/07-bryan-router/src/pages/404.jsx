import { Link } from '../Link.jsx'

export default function Page404 () {
  return (
    <>
      <h1>This is NOT fine</h1>
      <img src='https://midu.dev/images/this-is-fine-404.gif' alt='gif del perro de This is fine.'/>
      <br/>
      <Link to='/'>Go to home</Link>
    </>
  )
}