import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons.jsx'
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden/>

      <aside className='cart'>
      <ul>
        <li>
          <img src='https://cdn.dummyjson.com/product-images/2/1.jpg' alt='iphone'/>
        </li>
        <div>
          <strong>iPhone</strong> - $1499
        </div>

        <footer>
          <small>
            Cantidad: 1
          </small>
          <button>+</button>
        </footer>
      </ul>

      <button>
        <ClearCartIcon/>
      </button>
      </aside>
    </>
  )
}
