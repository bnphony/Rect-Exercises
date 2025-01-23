import './App.css'
import { Router } from './components/Router.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import { Route } from './components/Route.jsx'
import { lazy, Suspense } from 'react'
import { AboutPage } from './pages/About.jsx'


const LazyHomePage = lazy(() => import('./pages/Home.jsx').then(module => ({ default: module.HomePage })))
const LazyAboutPage = lazy(() => import('./pages/About.jsx').then(module => ({ default: module.AboutPage}))) 

const routes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]




function App () {
  
  return (
    <main>

      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage}/>
          <Route path='/about' Component={LazyAboutPage}/>
        </Router>
      </Suspense>
    </main>
  )
}

export default App
