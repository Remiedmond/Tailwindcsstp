import React from "react";
import clsx from 'clsx';
import Badge from './Badge.jsx';
import Button from './button.jsx';
import Input from './Input.jsx';
import Label from './label.jsx';

export function Newsletter({}) {
  return (
    <>
    <div className="w-full bg-white rounded-2xl  p-8 flex flex-col items-center">
  
  <h2 className="text-2xl font-semibold text-gray-900 text-center">
    Abonnez-vous à notre Newsletter
  </h2>

  <p className="text-gray-600 text-center max-w-2xl mt-2">
    Recevez des mises à jour, des offres exclusives et des nouveautés directement dans ta boîte mail.
  </p>

  <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 mt-6 mx-auto">
    <div className="flex-1 px-4 py-3 
             focus:ring-2 focus:ring-indigo-500 focus:outline-none">
        <Input id="email" type="email" placeholder="john@example.com" />
    </div>
   

    <Button type="submit">Envoyer</Button>
  </form>

  <p className="text-xs text-gray-500 mt-3">
    En vous inscrivant, vous acceptez de recevoir nos emails. Vous pouvez vous désabonner à tout moment.
  </p>
</div>


    </>
  );
}
export default Newsletter;
