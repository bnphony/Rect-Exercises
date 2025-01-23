import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer, CART_ACTIONS } from '../reducers/cart'

// 1. Crear contexto
export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product =>
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: product
    })
  const removeFromCart = product =>
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: product
    })

  const clearCart = () => dispatch({ type: CART_ACTIONS.CLEAR_CART })

  return { state, addToCart, removeFromCart, clearCart }
}


// 2. Crear provider
export function CartProvider ({ children }) {
  /*
  * FORMA ANTES DE PASAR A 'useReducer'
  const addToCart = product => {
    // Check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      // Metodo 1
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // Cuando el producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }
  
  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }
  
  const clearCart = () => {
    setCart([])
  }
  */

  // * UTILIZANDO useReducer
 
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
