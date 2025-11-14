import { useState } from 'react';
    import React from 'react';

function ColorCheckboxes() {
   const [selectedColor, setSelectedColor] = useState('');
  
  const prices = {
    jaune: 120,
    rose: 87,
    rouge: 99
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Choisissez l'édition</h2>
       
        {selectedColor && (
          <div className="text-center mb-6">
            <span className="text-2xl font-bold text-green-600">
              {prices[selectedColor]}€
            </span>
          </div>
        )}
        
      
      <div className="space-y-4">
        {}
        <label className="flex items-center space-x-3 cursor-pointer">
          <div 
            onClick={() => setSelectedColor(selectedColor === 'rouge' ? '' : 'rouge')}
            className={`w-10 h-10 rounded-full bg-red-500 flex items-center justify-center`}
          >
            {selectedColor === 'rouge' && (
              <svg className="w-5 h-6 text-white" fill="none" stroke="white">
                <path  strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className="text-lg">Edition Vuelta</span>
        </label>

        {}
        <label className="flex items-center space-x-3 cursor-pointer">
          <div 
            onClick={() => setSelectedColor(selectedColor === 'rose' ? '' : 'rose')}
            className={`w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center `}
          >
            {selectedColor === 'rose' && (
              <svg className="w-4 h-6 text-white" fill="none" stroke="white">
                <path  strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className="text-lg">Edition Giro</span>
        </label>

        {}
        <label className="flex items-center space-x-3 cursor-pointer">
          <div 
            onClick={() => setSelectedColor(selectedColor === 'jaune' ? '' : 'jaune')}
            className={`w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center `}
          >
            {selectedColor === 'jaune' && (
              <svg className="w-5 h-6 text-white" fill="none" stroke="white">
                <path  strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className="text-lg">Edition TDF</span>
        </label>
      </div>

    
    </div>
  );
}

export default ColorCheckboxes;
