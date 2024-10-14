import React from 'react';
import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/navigation'
const Partership = () => {
  const perterpara="  Nous avons des collaborations avec des hôpitaux allemands pour offrir des opportunités uniques à nos étudiants. Vous bénéficierez d'un accompagnement personnalisé pour vos démarches administratives et professionnelles."
  const router = useRouter()
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{   
        const tls3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#partership",
            start: "top 50%",
            end: "top -50%",
            toggleActions: "play none none reverse",
    
        }
    
    });
    tls3.fromTo("#parterimg",{x:25,opacity:0},{x:0,opacity:1,ease:"power1.inOut",duration:1,stagger:.5},"animparter")
    .fromTo("#partertxt",{x:-25,opacity:0},{x:0,opacity:1,ease:"power1.inOut",duration:1,stagger:.5},"animparter")
    },[])
    return (
        <section id="partership" className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tirez parti de nos partenariats avec des institutions allemandes
          </h2>
          <div id="partercon" className="flex flex-col md:flex-row items-center ">
          
            <div id="partertxt">
              <p id="partership" className="text-lg mb-6">
                {perterpara}
              </p>
              <button  onClick={()=>{
                        router.push('/#contact')
                    }} className="bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-500 transition duration-300">
                Découvrir nos partenariats
              </button>
            </div>
            <img id="parterimg"
              src="./collab.png"
              alt="Partenariat hospitalier"
              className=" rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

    );
}

export default Partership;
