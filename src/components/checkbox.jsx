import { useState } from 'react';
import React from 'react';
import Badge from './Badge.jsx';
import clsx from 'clsx';
import Button from './button.jsx';

function ColorCheckboxes() {
  const [selectedColor, setSelectedColor] = useState('');
  
  const editions = {
    rouge: {
      name: 'Edition Vuelta',
      price: 99,
      color: 'bg-red-500',
      stock: 'success',
      stockLabel: 'En stock',
      variantcolor:"text-green-800",
      variantsavoirplus: 'outline',
      link: '/editionvuelta'
    },
    rose: {
      name: 'Edition Giro',
      price: 87,
      color: 'bg-pink-500',
      stock: 'warning',
      stockLabel: 'Stock limité',
      variantcolor:"text-yellow-800",
      variantsavoirplus: 'limitede',
      link: '/editiongiro'
    },
    jaune: {
      name: 'Edition TDF',
      price: 120,
      color: 'bg-yellow-400',
      stock: 'danger',
      stockLabel: 'Rupture',
      variantcolor:"text-red-800",
      variantsavoirplus: 'lose',
      link: '/produit'
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      
       
      {selectedColor && (
        <>
        <div className="text-center mb-6">
          <span className={`text-2xl font-bold ${editions[selectedColor].variantcolor}`}>
            {editions[selectedColor].price}€
          </span>
        </div>
        {selectedColor && (
        <div className="flex justify-center mb-6 space-x-4">
           <a className="no-underline" href={editions[selectedColor].link}>
          <Button variant={editions[selectedColor].variantsavoirplus}>
          
            En savoir plus
          
          </Button>
          </a>
        </div>
      )}

        
        </>

      )}
      
      <div className="space-y-4">
        {Object.entries(editions).map(([key, edition]) => (
          <label key={key} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div 
              onClick={() => setSelectedColor(selectedColor === key ? '' : key)}
              className={`w-10 h-10 rounded-full ${edition.color} flex items-center justify-center flex-shrink-0`}
            >
              {selectedColor === key && (
                <svg className="w-5 h-6 text-white" fill="none" stroke="white">
                  <path strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <span className="text-lg font-medium">{edition.name}</span>
            </div>
            {selectedColor === key && (
              <>
              <Badge variant={edition.stock}>{edition.stockLabel}</Badge>
              
              </>
            )}
            
          </label>
        ))}
      </div>
    </div>
  );
}

export default ColorCheckboxes;