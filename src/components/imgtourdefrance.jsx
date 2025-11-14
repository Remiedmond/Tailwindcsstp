    import React from 'react';
    
    function ImgTourDeFrance() {
    return (
        <div>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-yellow-500 text-white p-8 rounded -rotate-2 mx-auto   m-4"> <p className='rotate-3'>Photos Tour de France</p> <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Tour_de_France_logo.svg/1024px-Tour_de_France_logo.svg.png"
                alt="Image 1" 
                className="w-70 h-70 object-cover mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
            /> 
            </div>
             <div className="bg-red-500 text-white p-8 rounded  mx-auto   m-4"> <p className=''>Photos Vuelta de España</p> <img 
                src="https://play-lh.googleusercontent.com/QDzGJRu70cU1Rhyav4v7BhBNmJBlPL2mWrjRqnHTN0ZPxqKeUjXaNFEBX3kcay6dLtRKJXdQUD4IbN4tLvmyPg=w600-h300-pc0xffffff-pd"
                alt="Image 1" 
                className="w-70 h-70 object-covermx-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
            /> 
            </div>
             <div className="bg-rose-500 text-white p-8 rounded rotate-2 mx-auto   m-4"> <p className='-rotate-3'>Photos Giro de Italia</p> <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Giro_d%27Italia_-_Logo_2018.svg/2560px-Giro_d%27Italia_-_Logo_2018.svg.png"
                alt="Image 1" 
                className="w-70 h-70 object-cover mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
            /> 
            </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <div className="row-start-1 row-span-2 bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
                src="https://i.pinimg.com/736x/89/0c/55/890c558db19c92647931c879dd93c5b8.jpg"
                alt="Image 1" 
                className="w-full h-full object-cover"
            />
            </div>
            
            <div className="col-span-1  bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
                src="https://www.valenciennes.fr/wp-content/uploads-webpc/uploads/2025/02/800x600-AG-WEB-Tour-de-france-2025.jpg.webp" 
                alt="Image 2" 
                className="w-full h-full object-cover"
            />
            </div>
            
            <div className="row-span-1 col-start-2 row-start-2 bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
                src="https://images.sbs.com.au/dims4/default/7867651/2147483647/strip/true/crop/1024x576+0+32/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2F57%2F79%2F9b9b17864de6989490f668896f9e%2Ftp-tdf2022.jpg" 
                alt="Image 3" 
                className="w-full h-full object-cover"
            />
            </div>
            
            <div className="row-span-3 col-start-3 row-start-1 bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
                src="https://www.lequipe.fr/_medias/img-photo-jpg/folle-ambiance-rue-lepic-pour-le-passage-du-peloton-a-reau-l-equipe/1500000002244717/488:81,1463:1300-828-1035-75/d8960" 
                alt="Image 4 pfp" 
                className="w-full h-full object-cover"
            />
            </div> 
            <div className="col-span-2 row-span-1 row-start-3 bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
                src="https://asset-prod.france.fr/optimized_20190721_EDT_2021_A_S_O_Aurelien_Vialatte_b36c4f6241.jpg" 
                alt="Image 5 eglise" 
                className="w-full h-full object-cover"
            />
            </div> 
        </div>
        </div>
    );
    }

    export default ImgTourDeFrance;