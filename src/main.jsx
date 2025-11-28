import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'         
import Styleguide from './pages/Styleguide.jsx'  
import Editiongiro from './pages/editiongiro.jsx'  
import Editiontdf from './pages/editiontdf.jsx'
import Editionvuelta from './pages/editionvuelta.jsx'
import Achateffectue from './pages/achateffectue.jsx'
import Categorie from './pages/categorie.jsx'
import Produit from './pages/produit.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/home.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/editiongiro" element={<Editiongiro />} />
          <Route path="/editiontdf" element={<Editiontdf />} />
          <Route path="/editionvuelta" element={<Editionvuelta />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/achateffectue" element={<Achateffectue/>} />
          <Route path="/categorie" element={<Categorie/>} />
          <Route path="/produit" element={<Produit/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)