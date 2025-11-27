import React from "react";
import clsx from 'clsx';
import Badge from './Badge.jsx';
import Button from './button.jsx';
import Input from './Input.jsx';
import Label from './label.jsx';
import Card, { CardHeader, CardBody } from './Card.jsx';
import { Link} from 'react-router-dom';
export function TtlesArticles() {

return (
<>
  <div>
  
  <h2 class="text-lg font-semibold text-gray-900 mb-6">Articles</h2>

  <div class="flex items-start justify-between py-6">
    
    <div class="flex gap-4">
      <img src="https://www.francebleu.fr/pikapi/images/78659422-1d95-44a6-9b60-09f525ebce24/1200x680?webp=false" 
           class="w-20 h-20 rounded-xl object-cover" />

      <div>
        <h3 class="font-semibold text-gray-900">Basic TDF Pack de 6 photos</h3>

        <div class="text-sm text-gray-500 flex gap-3 mt-1">
          <span>Édition Giro</span>
          <span>Fond <span class="text-gray-700 font-medium">Blanc</span></span>
        </div>

        <Button variant="lose">Supprimer</Button>
        
      </div>
    </div>

    <div class="text-right">
      <div class="flex items-center justify-end gap-2 text-gray-500 text-sm">
        <span>Quantité :</span>
        <div class="w-14 h-7 bg-white rounded-full flex items-center px-1">
          <div ><p>1</p></div>
        </div>
      </div>

      <div class="text-2xl font-semibold text-gray-900 mt-4">€ 87.00</div>
      <div class="text-sm text-gray-500 mt-1">
        Sous-total : <span class="font-medium text-gray-700">€ 87.00</span>
      </div>
    </div>
  </div>

  <div class="border-t border-gray-200"></div>

  <div class="flex items-start justify-between py-6">
    
    <div class="flex gap-4">
 
      <img src="https://m.media-amazon.com/images/I/71PbeDsyRGL._AC_UF894,1000_QL80_.jpg" 
           class="w-20 h-20 rounded-xl object-cover" />

      <div>
        <h3 class="font-semibold text-gray-900">Livre sur les meilleurs moments du Tour</h3>

        <div class="text-sm text-gray-500 flex gap-3 mt-1">
          <span>Édition collector</span>
          <span>Couleur <span class="text-gray-700 font-medium">Navy</span></span>
        </div>
        
        <Button variant="lose">Supprimer</Button>
        
      </div>
    </div>

    <div class="text-right">
      <div class="flex items-center justify-end gap-2 text-gray-500 text-sm">
        <span>Quantité :</span>
        <div class="w-14 h-7 bg-white rounded-full flex items-center px-1">
          <div ><p>1</p></div>
        </div>
      </div>

      <div class="text-2xl font-semibold text-gray-900 mt-4">€ 29.00</div>
      <div class="text-sm text-gray-500 mt-1">
        Sous-total : <span class="font-medium text-gray-700">€ 29.00</span>
      </div>
    </div>
  </div>

</div>

</>
);
}


    export default TtlesArticles;