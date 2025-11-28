import React from "react";
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
      badge: 'New',
      badgeColor: 'heatlh',
      image: 'https://www.lequipe.fr/_medias/img-photo-jpg/le-parcours-complet-du-tour-de-france-2026-aso/1500000002298356/0:0,721:1013-828-1166-75/cf350.jpg',
     
    },
    {
      id: 3,
      name: 'Livre, collection limité',
      description: 'Livre photo collector en édition limitée sur le Tour de France.',
      price: 29,
      reviews: 52,
      rating: 5,
      badge: 'New',
      badgeColor: 'heatlh',
      image: 'https://m.media-amazon.com/images/I/71PbeDsyRGL._AC_UF894,1000_QL80_.jpg',
      
    }
  ];



export function Nouveaute({}) {
  return (
    <>
    <div className="flex flex-col justify-start items-baseline content-start pt-4">
        <h1>Nouveautés</h1>
        <p>Les dernières pièces fraîchement arrivés en stock</p>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 py-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <Badge variant={product.badgeColor} className="absolute top-4 left-4">{product.badge}</Badge>
                
              </div>

              <div className="p-6 -mb-2">
                <h3 className="text-m font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{product.description}</p>

                <div className="flex items-center justify-between mt-4 gap-4">
                    <span className="text-2m font-bold text-gray-900 ">${product.price}</span>
                    <a href="/produit"  className=" text-xs">
                        <Button variant="bondecommande"> Voir la fiche produit </Button>
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}
export default Nouveaute;

