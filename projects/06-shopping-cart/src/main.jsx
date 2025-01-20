import { createRoot } from 'react-dom/client'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
