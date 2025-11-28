    import React from 'react';
    
    function ImgTourDeFrance() {
    return (
        <div>
        <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-8">
        <div className="bg-yellow-500 text-white p-6 md:p-8 rounded-xl -rotate-2 hover:rotate-0 transition-all duration-300 shadow-lg mx-auto w-full max-w-sm cursor-pointer group">
          <p className="rotate-2 text-xl font-bold text-center mb-4 group-hover:rotate-0 transition-transform">
            Photos Tour de France
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Tour_de_France_logo.svg/1024px-Tour_de_France_logo.svg.png"
            alt="Tour de France"
            className="w-full h-48 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="bg-red-600 text-white p-6 md:p-8 rounded-xl  hover:rotate-0 transition-all duration-300 shadow-lg mx-auto w-full max-w-sm cursor-pointer group">
          <p className="text-xl font-bold text-center mb-4">
            Photos Vuelta de España
          </p>
          <img
          
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/La_Vuelta_Logo.svg/1200px-La_Vuelta_Logo.svg.png"
            alt="Vuelta"
            className="w-full h-48 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="bg-rose-500 text-white p-6 md:p-8 rounded-xl rotate-2 hover:rotate-0 transition-all duration-300 shadow-lg mx-auto w-full max-w-sm cursor-pointer group">
          <p className="-rotate-2 text-xl font-bold text-center mb-4 group-hover:rotate-0 transition-transform">
            Photos Giro de Italia
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Giro_d%27Italia_-_Logo_2018.svg/2560px-Giro_d%27Italia_-_Logo_2018.svg.png"
            alt="Giro"
            className="w-full h-48 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
          />
        </div>

      </div>
    </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-[1200px] mx-auto">
            <div className="row-start-1 row-span-2 bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
                src="https://i.pinimg.com/736x/89/0c/55/890c558db19c92647931c879dd93c5b8.jpg"
                alt="Image 1" 
                className="w-full h-full object-cover"
            />
            </div>
            
            <div className="col-span-1  bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
                src="https://www.leparisien.fr/resizer/DAVFr2TULfPPfs0MeEkLjAeSaRw=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/NCSTAYDXNREBPMCQBL6E5A3VQM.jpg" 
                alt="Image 2" 
                className="w-full h-full object-cover"
            />
            </div>
            
            <div className="row-span-1 col-start-2 row-start-2 bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
                src="https://www.lequipe.fr/_medias/img-photo-jpg/jonas-vingegaard-maillot-rouge-de-la-vuelta-lors-de-la-3e-etape-lundi-luis-angel-gomez-sprintcycling/1500000002258024/0:0,2000:1333-828-552-75/edb2f.jpg" 
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