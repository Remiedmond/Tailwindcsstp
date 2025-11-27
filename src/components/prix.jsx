    import React from 'react';
    import ColorCheckboxes from './checkbox.jsx';
    import { Card, CardHeader, CardBody } from './Card.jsx';
    function Prix() {
    return (
        <div className="mt-4 flex flex-row flex-wrap justify-center items-center content-center max-w-[1200px] mx-auto">
    <div className="m-4 flex flex-row flex-wrap w-[62%]">
        <p className="text-4xl font-bold mb-4">Basic TDF Pack de 6 photos</p>
        <p className="text-lg mb-4">Achetez des photos exclusives du Tour de France capturant :</p>
        <ul className="list-disc list-inside text-left">
            <li className="mb-2">des moments innoubliables</li>
            <li className="mb-2">des paysages à couper le souffle</li>
            <li className="mb-2">des actions de course palpitantes</li>
            <li className="mb-2">des portraits de coureurs passionnés</li>
            <li className="mb-2">des scènes de foule animées</li>
            <li className="mb-2">des détails uniques du Tour de France ou autres</li>
            <li className="mb-2">des souvenirs durables de l'événement cycliste le plus célèbre au monde</li>
        </ul>
    </div>
    <div className="w-[35%] text-left">
         <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold mb-6 flex justify-center">Choisissez l'édition</h2>
                    </CardHeader>
                    <CardBody>
                      <ColorCheckboxes />
                    </CardBody>
                  </Card>
        
        
    </div>
</div>

    );
    }

    export default Prix;