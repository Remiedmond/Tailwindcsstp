import React from 'react';
import clsx from 'clsx';
import Badge from './Badge.jsx';
import Button from './button.jsx';
import Input from './Input.jsx';
import Label from './label.jsx';
import Card, { CardHeader, CardBody } from './Card.jsx';
import { Link} from 'react-router-dom';
export function Bondecommande({ children, variant = 'primary', disabled = false }) {

return (
<>
  
  <div class="space-y-3">
    <div class="flex justify-between text-gray-700">
      <span>Articles (3)</span>
      <span class="font-medium">€ 143.00</span>
    </div>

    <div class="flex justify-between text-gray-700">
      <span>Livraison</span>
      <Badge variant="success">offerte</Badge>
    </div>
  </div>

 <Badge variant="default">La livraison est offerte sur cette commande</Badge>


  
  <div class="border-t border-gray-200"></div>

  
  <div class="space-y-1">
    <div class="flex justify-between text-gray-900 text-lg font-semibold">
      <span>Total TTC</span>
      <span>€ 143.00</span>
    </div>
    <p class="text-xs text-gray-500">
      TVA et frais applicables inclus, calculés sur la base des informations fournies.
    </p>
  </div>

  <div class="space-y-3">
    <Link to="/achateffectue">
      <Button variant="bondecommande">
        Passer au paiement
        
      </Button>
    </Link>
    <Link to="/styleguide">
      <Button variant="bondecommande2">
        Continuer vos achats
      </Button>
    </Link>
  </div>
</>
);
}


    export default Bondecommande;