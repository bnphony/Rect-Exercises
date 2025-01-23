export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

// * Forma #2: Utilizando un objeto
export const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      // * Forma #1: Utilizando structuredClone
      // const newState = structuredClone(state)
      // newState[productInCartIndex].quantity += 1

      // * Forma #2: Utilizando Map
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item, 
      //       quantity: item.quantity + 1
      //     }
      //   }
      //   return item
      // })

      // * Forma #3: Utilizando spred operator y slice
      const newState = [
        ...state.slice(0, productInCartIndex),
        {...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1},
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState =  [
      ...state,
      {
        ...action.payload, // product
        quantity: 1
      }
    ]

    updateLocalStorage(newState)

    return newState
  },
  [CART_ACTIONS.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTIONS.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export const cartReducer =(state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}


/*
* FORMA # 1 : Utilizando Switch
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        // Forma #1: Utilizando structuredClone
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      const newState =  [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1
        }
      ]

      updateLocalStorage(newState)

      return newState
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTIONS.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
  }
}
*/