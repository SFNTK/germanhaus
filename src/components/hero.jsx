'use client'


import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
const Hero = () => {
    useEffect(()=>{
        const text = SplitType.create('#heroh1');
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top 50%",
                end: "top -50%",
                toggleActions: "play none none reverse",

            }
        });
        tls2.fromTo("#hero .char",{opacity:0,
            y:50
        },{
            y:0,
            opacity:1,
            duration:1,
            ease:"power1.inOut",
            stagger:.05})
            .fromTo("#hero p",{opacity:0,y:2},{opacity:1,y:0,duration:1,ease:"power1.inOut"},"heroanima")
            .fromTo("#hero button",{opacity:0,y:2},{opacity:1,y:0,duration:1,ease:"power1.inOut"},"heroanima")
    },[])
    return (
        <div id="hero" className="relative pb-10 pt-10 bg-black text-white">
        
   
        <div className="relative z-10 container px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 id="heroh1" className="text-4xl md:text-6xl font-bold mb-4">
            Apprenez l'allemand chez Germanhaus et brisez les barrières linguistiques !
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Prenez votre rendez-vous gratuit pour en savoir plus sur nos cours d'allemand.
          </p>
          <button onClick={()=>{
            var message = "Bonjour , je suis interéssé"; // Custom message
    
            var url = "https://wa.me/0751761346?text=" + encodeURIComponent(message);
            window.open(url, "_blank");
          }} className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300">
            Fixez un rendez-vous gratuit
          </button>
       
        </div>
      </div>
    );
}

export default Hero;
