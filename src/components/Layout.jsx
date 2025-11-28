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
  return <nav className="w-full bg-black border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-3 px-4">
        
        <div className="flex items-center gap-2">
          <a className="flex items-center gap-2" href='/'>
          <div className="w-12 h-12 rounded-full bg-blue-600 text-black flex items-center justify-center font-bold text-sm">
             <img src={logo} alt="Logo" className="w-8 h-8"/>
            </div>
            <span className='text-headers'>Boutique BET'N RIDE</span>
            </a>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-headerss font-medium hover:border-b-2 border-red-600 pb-1">
            Tous les produits
          </a>
          <a href="#" className="text-headerss font-medium hover:border-b-2 border-red-600 pb-1">
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
  return <footer className='bg-black text-red-400'><p>© 2025</p> <p>Site développé en React & Tailwind</p></footer>;
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