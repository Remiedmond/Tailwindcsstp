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
      name: "Le Tour d'Italie Giro",
      description: 'success',
      price: 132,
      reviews: 87,
      rating: "Essentiels",
      badge: 'New',
      badgeColor: 'heatlh',
      image: 'https://play-lh.googleusercontent.com/ZxghMZ6Tldt7ZhyBliilD4DDbTJ8pATVxe5csqfR0Hh8mNsYqxEjICZn0DHjYRSNSTI-=w600-h300-pc0xffffff-pd',
      
    },
    {
      id: 2,
      name: "Le Tour de France magique",
      description: 'eco',
      price: 87,
      reviews: 99,
      rating: "confort",
      badge: 'New',
      badgeColor: 'eco',
      image: 'https://cdn.worldvectorlogo.com/logos/le-tour-de-france-5.svg',
     
    },
    {
      id: 3,
      name: "Le Tour d'Espagne vuelta",
      description: 'warning',
      price: 29,
      reviews: 52,
      rating: "Everyday",
      badge: 'New',
      badgeColor: 'heatlh',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2e/cf/d7/2ecfd7e8-de9d-9611-cc4a-6d430f48c7d8/AppIcon-0-0-1x_U007epad-0-1-0-0-85-220.png/1200x630wa.jpg',
      
    },
    {
      id: 4,
      name: 'Championnat du monde sur route',
      description: "fitness",
      price: 94,
      reviews: 19,
      rating: "Final Touch",
      badge: 'New',
      badgeColor: 'heatlh',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Jersey_rainbow.svg/langfr-250px-Jersey_rainbow.svg.png',
    }
  ];



export function Populaire({}) {
  return (
    <>
    <div className="flex flex-col justify-start items-baseline content-start pt-4">
        <h1>Catégories populaires</h1>
        <p>Navigue par type de produit pour trouver ton prochain essentiel.</p>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
                <div className="p-6 -mb-2">
                <h2 className="flex flex-col justify-start items-center content-center text-headers bg-headerss font-bold mb-2 w-3/7 rounded-l">CATÉGORIE</h2>
                <div className="flex items-center justify-between mt-4 gap-4">
                    <p className="text-2m font-bold text-gray-900 ">{product.name}</p>
                    <Badge variant={product.description}>{product.rating}</Badge>
                </div>
                
              </div>

              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />

                
              </div>

              
            </div>
          ))}
        </div>
    </>
  );
}
export default Populaire;
