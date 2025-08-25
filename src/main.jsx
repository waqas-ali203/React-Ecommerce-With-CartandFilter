import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataState from './context/DataState'

createRoot(document.getElementById('root')).render(
  <DataState>
    <App />
  </DataState>,
)
