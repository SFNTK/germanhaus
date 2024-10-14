import React from 'react';
import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/navigation'
const Consultation = () => {
  const router = useRouter()
  const consulpara="Prenez rendez-vous gratuitement avec notre équipe pour discuter de vos besoins et commencer votre cours d'allemand."
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{   
        const tls3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#consulacon",
            start: "top 80%",
            end: "top -50%",
            toggleActions: "play none none reverse",
    
        }
    
    });
    tls3.fromTo("#consultationpara",{x:25,opacity:0},{x:0,opacity:1,ease:"power1.inOut",duration:1,stagger:.5},"animconsu")
    .fromTo("#imageconsultation",{x:-25,opacity:0},{x:0,opacity:1,ease:"power1.inOut",duration:1,stagger:.5},"animconsu")
    },[])
    return (
        <section className="py-6 bg-yellow-400 text-black">


          <div id="consulacon" className="flex flex-col md:flex-row items-center gap-8">
            <img id="imageconsultation"
              src="./logo.png"
              alt="Consultation gratuite"
             
            />
            <div className=" text-center" id="consultationpara">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Prêt à commencer ?</h2>
              <p className="text-xl mb-6">
                {consulpara}
              </p>
              <button  onClick={()=>{
                        router.push('/#contact')
                    }}  className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
                Fixez un rendez-vous gratuit maintenant
              </button>
            </div>
          </div>
  
      </section>
    );
}

export default Consultation;
