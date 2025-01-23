import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: '!Hola! Me llamo Bryan y estoy creando un clon de React Router',
    button: 'Ir al Inicio'
  },
  en: {
    title: 'About us',
    description: 'Hi! My name is Bryan and I am creating a clone of React Router',
    button: 'Go to Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src='https://i1.sndcdn.com/artworks-iKw3HDGeUkL68vV7-Q7Y62Q-t500x500.jpg'
          alt='Foto de perfil'
        ></img>
        <p>{i18n.description}</p>
      </div>
      <Link to={'/'}>{i18n.button}</Link>
    </>
  )
}