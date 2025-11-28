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
      
    },
    {
      id: 4,
      name: 'Veste rutBag',
      description: "Veste en toile renforcée, format S,M,L,XL,XXl avec logo discret.",
      price: 94,
      reviews: 19,
      rating: 5,
      badge: 'New',
      badgeColor: 'heatlh',
      image: 'https://evasion.lenord.fr/sites/default/files/styles/landscape_full_page_1920w/public/2024-05/Itin%C3%A9rance%20%C3%A0%20v%C3%A9lo_1.jpg?itok=siFsGLTg',
    },
    {
        id: 5,
        name: 'Casque de vélo aérodynamique',
        description: 'Casque léger et aérodynamique pour les cyclistes professionnels.',
        price: 150,
        reviews: 45,
        rating: 5,
        badge: 'New',
        badgeColor: 'heatlh',
        image: 'https://blog.ekosport.fr/wp-content/uploads/2021/04/Casque-velo-comment-le-choisir-pour-assurer-sa-securite.jpg',
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



export function Bestsellers({}) {
  return (
    <>
    <div className="flex flex-col justify-start items-baseline content-start pt-4">
        <h1>Best sellers</h1>
        <p>Les pièces les plus appréciées de la communauté</p>
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
export default Bestsellers;

