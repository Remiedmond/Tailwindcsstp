import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.jsx'; 

export default function NotFound() {
  return (
    <main className="min-h-[80vh] w-full bg-white flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-center lg:text-left">
          <p className="text-base font-semibold text-primary">404</p>
          
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Oups ! Vous êtes sorti de la <strong className='text-primary'>piste</strong>.
          </h1>
          
          <p className="mt-6 text-lg leading-7 text-gray-600">
            Il semblerait que vous ayez perdu le peloton. La page que vous cherchez a peut-être pris un raccourci, a crevé en route, ou n'existe tout simplement pas.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link to="/">
              <Button variant="primary">
                Retourner à l'accueil
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="outline">
                Signaler un problème
              </Button>
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100">
             <p className="text-sm text-gray-400">Code erreur : CREVAISON_LENTE</p>
          </div>
        </div>

        <div className="relative w-full mt-10 lg:mt-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Cycliste seul sur la route" 
            className="relative rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover max-h-[500px]"
          />
        </div>

      </div>
    </main>
  );
}