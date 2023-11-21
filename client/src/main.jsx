import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ApplyForm from './components/ApplyForm/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApplyForm />
    <App />
  </React.StrictMode>,
)
