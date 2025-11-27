import React from 'react';
import clsx from 'clsx';
import Badge from '../components/Badge.jsx';
import Button from '../components/button.jsx';
import Input from '../components/Input.jsx';
import Label from '../components/label.jsx';
import Card, { CardHeader, CardBody } from '../components/Card.jsx';
import { Link} from 'react-router-dom';
import Bondecommande from '../components/Bondecommande.jsx';
import TtlesArticles from '../components/ttlesarticles.jsx';


function Header() {
  return <header>
 
<nav class="flex px-5 py-3" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="/categorie" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Categories</a>
      </div>
    </li>
   <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="/produit" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Photos TDF</a>
      </div>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Édition TDF</span>
      </div>
    </li>
  </ol>
</nav></header>;
}

function Footer() {
  return <footer className='text-red-400'><p>© 2025</p> <p>Site développé en React & Tailwind</p></footer>;
}


// Composant principal
export default function StyleTDF() {
  return (
    <>
    
    
      <Header />
  
      
      <main>
        <div className="max-w-7xl my-auto ">
          <p className="text-4xl font-bold mb-4">Mon Panier</p>
          <p className="text-lg mb-4">Vérifiez vos articles avant de passer au paiement.</p>
        </div>
          

          
  <h2 class="text-lg font-semibold text-gray-900">
    Résumé de la commande
  </h2>

<div class="flex flex-row w-full gap-6 mt-6">

  <div class="basis-[72%] bg-white rounded-2xl shadow-md p-6 space-y-6">
    <TtlesArticles />
  </div>
  <div class="basis-[25%] bg-white rounded-2xl shadow-md p-6 space-y-6">
    <Bondecommande />
  </div>

</div>

      </main>
    </>
  );
}