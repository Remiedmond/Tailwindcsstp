import React from "react";
import clsx from 'clsx';
import Badge from './Badge.jsx';
import Button from './button.jsx';
import Input from './Input.jsx';
import Label from './label.jsx';

export function Nouvellecollection({}) {
  return (
    <>

      <div className="max-w-7xl bg-headers mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p:5 mb:8 lg:mb-8  lg:p-6 rounded-3xl">
        <div className="flex flex-col items-start space-y-6">
          
          <Badge variant="default" className="rounded-full px-4 py-1 bg-gray-headers text-gray-600 font-medium">
            Nouvelle collection PDM25
          </Badge>
           
          <h1 className="text-l md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
            Des essentiels pensés pour <span className="text-primary">tous les Cyclistes</span>.
          </h1>
           
          <p className="text-xs md:text-2xs lg:text-xs text-headerss max-w-lg p-4">
            Des coupes simples, des matières confortables, des couleurs faciles à porter. Construisez-vous une garde-robe minimaliste, durable et élégante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto ">
            <a href="/categorie">
            <Button variant="primary">
              Découvrir les nouveautés
            </Button>
            </a>
            <a href="/categorie">
            <Button variant="secondary">
              Voir tous les produits
            </Button>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-4 w-full border-t border-gray-100 lg:border-none">
            
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-green-400 flex-shrink-0"></span>
              <span className="text-xs font-medium text-gray-600">Livraison offerte dès 80€</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-blue-600 flex-shrink-0"></span>
              <span className="text-xs font-medium text-gray-600">Retour sous 30 jours</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-yellow-200 flex-shrink-0"></span>
              <span className="text-xs font-medium text-gray-600">Qualité contrôlée</span>
            </div>

          </div>
        </div>

        <div className="relative h-full w-full">
          <img 
            className="w-full h-auto object-cover rounded-3xl shadow-xl"
            src="https://img.hardloop.com/image/upload/v1658912944/articles/id-629-comment-bien-choisir-son-casque-de-velo/velo-casque_gx6x2k.jpg" 
            alt="Collection Cycliste" 
          />
        </div>

      </div>
    </>
  );
}
export default Nouvellecollection;

