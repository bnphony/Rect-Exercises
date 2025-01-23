import { BUTTONS, EVENTS } from './consts.js'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado
  const navigateEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigateEvent)
}

export function Link ({ target, to , ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary // Boton primario del raton
    const isModifiedevent = event.metaKey || event.altkey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedevent) {
      event.preventDefault()
      navigate(to) // Navegacion con SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props}></a>
}