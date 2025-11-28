import clsx from 'clsx';
import Badge from '../components/Badge.jsx';
import Button from '../components/button.jsx';
import Input from '../components/Input.jsx';
import Label from '../components/label.jsx';
import Card, { CardHeader, CardBody } from '../components/Card.jsx';
import { Link} from 'react-router-dom';
import Bondecommande from '../components/Bondecommande.jsx';
import TtlesArticles from '../components/ttlesarticles.jsx';
import Newsletter from '../components/newsletter.jsx';
import Description from '../components/desc.jsx';
import ImgTourDeFrance from '../components/ImgTourDeFrance.jsx';
import Prix from '../components/prix.jsx';

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../img/Logo fond blanc.png';





function Headerq() {
  return <nav className="w-full bg-headerss border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-3 px-4">
        
        <div className="flex items-center gap-2">
          <a className="flex items-center gap-2" href='/'>
          <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center font-bold text-sm">
             <img src={logo} alt="Logo" className="w-8 h-8"/>
            </div>
            <span className='text-headers font-medium '>Boutique BET'N RIDE</span>
            </a>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-headers font-medium hover:border-b-2 border-red-600 pb-1">
            Tous les produits
          </a>
          <a href="#" className="text-headers font-medium hover:border-b-2 border-red-600 pb-1">
            Styleguide
          </a>
        </div>

        <Button variant="primary">
          Se connecter
        </Button>
       
      </div>
    </nav>
    }

function Footerq() {
  return (
    <footer className="bg-headerss text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Boutique <span className="text-primary">BET'N RIDE</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              La référence pour les passionnés de cyclisme. Retrouvez les équipements officiels des plus grands tours : France, Espagne, Italie.
            </p>
            <div className="flex  space-x-4">
              <SocialIcon path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              <SocialIcon path="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <SocialIcon path="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Nos Univers</h3>
            <ul className="space-y-3">
              <li><Link to="/produit" className="hover:text-primary transition-colors">Maillots TDF</Link></li>
              <li><Link to="/editionvuelta" className="hover:text-primary transition-colors">Édition Vuelta</Link></li>
              <li><Link to="/editiongiro" className="hover:text-primary transition-colors">Édition Giro</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Aide & Infos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary transition-colors">Nous contacter</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Livraison & Retours</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Conditions Générales</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Restez informé</h3>
            <p className="text-sm text-slate-400 mb-4">
              Inscrivez-vous pour recevoir les nouveautés et offres exclusives.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>

        </div>
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-900">
          <p>&copy; 2025 Boutique BET'N RIDE. Tous droits réservés.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <span>Développé en React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Petit composant helper pour les icônes (évite de répéter le SVG)
function SocialIcon({ path }) {
  return (
    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary hover:text-black transition-all duration-300">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}

function Layout() {
  return (
    <>
    <div>
      <Headerq />
     <main>
     <Outlet />
     </main>


       
      <Footerq />
    </div>    
    </>
  )
}

export default Layout;