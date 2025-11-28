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
import Nouvellecollection from '../components/nouvellecollection.jsx';
import Bestsellers from '../components/Bestsellers.jsx';
import Nouveaute from '../components/nouveaute.jsx';
import Populaire from '../components/populaire.jsx';
import React, { useState } from 'react';






function Header() {
  return <header>
 
<nav className="flex px-5 py-3" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center">
      <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
  </ol>
</nav></header>;
}


function home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen bg-yellow-200 p-8'>
      <Header />
      <main>
       <Nouvellecollection /> <Populaire /> <Bestsellers /> <Nouveaute/> 
    
    
    
    </main>
     


      <Newsletter />
      
    </div>    
    </>
  )
}

export default home;