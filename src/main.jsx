import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StoreContextProvider from './component/Context/StoreContext.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>

<StoreContextProvider>
    <App />
</StoreContextProvider>

</BrowserRouter> 
    

  )