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
  return <header><h1>site de vente de photos du TDF</h1>
 
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
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Photos</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Photos TDF</a>
      </div>
    </li>
     <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="/editiongiro" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Édition Giro</a>
      </div>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Achat</span>
      </div>
    </li>
  </ol>
</nav></header>;
}

function Footer() {
  return <footer className='text-red-400'><p>© 2025</p> <p>Site développé en React & Tailwind</p></footer>;
}


// Composant principal
export default function Achateffectue() {
  return (
    <>
    
      <Header />
  
      
      <main>
        <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Achat effectué" className="mx-auto my-10 w-32 h-32"/>
        <h2 className="text-center text-2xl font-semibold mb-4">Achat effectué avec succès !</h2>
        <img src="https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif" alt="Célébration" className="mx-auto w-48 h-48 mb-6"/> 
        <img src="https://as1.ftcdn.net/v2/jpg/06/08/77/18/1000_F_608771898_zO4nsYPWMNduNi8X5XKADS6ZJ4QLDYpx.jpg" alt="Merci pour votre achat" className="mx-auto w-100 h-100 mb-6"/>
        <p className="text-center mb-6">Merci pour votre achat. Un email de confirmation vous a été envoyé.</p>
        <img src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif" alt="Merci" className="mx-auto w-48 h-48"/>
      </main>
      <Footer />
    </>
  );
}