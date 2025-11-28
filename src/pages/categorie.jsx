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

import React, { useState } from 'react';

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Popularité');


function Header() {
 <header>
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
        <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Catégorie</span>
      </div>
    </li>
  </ol>
</nav> </header>;
}





  const products = [
    {
      id: 1,
      name: 'Le compteur Giro magique',
      description: 'Compteur de vélo avec fonctions avancées pour les passionnés.',
      price: 132,
      reviews: 87,
      rating: 5,
      badge: 'New',
      badgeColor: 'heatlh',
      image: 'https://i.pinimg.com/736x/ab/1d/a1/ab1da1822a52eec51200f21d438071e2.jpg',
      
    },
    {
      id: 2,
      name: 'TDF Pack de 6 photos',
      description: 'Pack de 6 photos haute résolution du TDF, Giro ou Vuelta.',
      price: 87,
      reviews: 99,
      rating: 5,
      badge: 'Best seller',
      badgeColor: 'fitness',
      image: 'https://www.lequipe.fr/_medias/img-photo-jpg/le-parcours-complet-du-tour-de-france-2026-aso/1500000002298356/0:0,721:1013-828-1166-75/cf350.jpg',
     
    },
    {
      id: 3,
      name: 'Livre, collection limité',
      description: 'Livre photo collector en édition limitée sur le Tour de France.',
      price: 29,
      reviews: 52,
      rating: 5,
      badge: 'Limited',
      badgeColor: 'limitede',
      image: 'https://m.media-amazon.com/images/I/71PbeDsyRGL._AC_UF894,1000_QL80_.jpg',
      
    },
    {
      id: 4,
      name: 'Veste rutBag',
      description: "Veste en toile renforcée, format S,M,L,XL,XXl avec logo discret.",
      price: 94,
      reviews: 19,
      rating: 5,
      badge: 'Eco',
      badgeColor: 'success',
      image: 'https://evasion.lenord.fr/sites/default/files/styles/landscape_full_page_1920w/public/2024-05/Itin%C3%A9rance%20%C3%A0%20v%C3%A9lo_1.jpg?itok=siFsGLTg',
    }
  ];

  const categories = ['All', 'T-Shirts', 'Hoodies', 'Accessories'];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 fill-current text-gray-900"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
    <Header />
    <main>
    <div className="min-h-screen bg-yellow-200 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Catalogue produits</h1>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Explore la collection et teste les composants du design system sur une page de listing.
            </p>
            <p className="text-sm text-gray-500">{products.length} produit(s) affiché(s)</p>
          </div>
        </div>

        <div className="bg-headers rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex gap-2 wrap">
              {categories.map((category) => (
                 <Button
                  key={category}
                  variant={selectedCategory === category ? 'selected' : 'bondecommande'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 text-sm">Trier par :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option>Popularité</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Nouveautés</option>
              </select>
            </div>
          </div>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
                <Badge variant={product.badgeColor} className="absolute top-4 left-4">{product.badge}</Badge>
                
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <div className="flex items-center gap-2">
                    <StarRating rating={product.rating} />
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      {product.reviews} reviews
                    </a>
                  </div>
                </div>

               
                <a href="/produit">
                <Button variant="bondecommande" className="w-full py-3">
                  Voir la fiche produit
                  
                </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
       <Newsletter />
    </div>
    
    </main>
    </>
  );
}