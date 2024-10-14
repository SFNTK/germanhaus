"use client"
import React from 'react';
import { ChevronRight, Book, Users, Hospital, ClipboardList, Globe, GraduationCap } from 'lucide-react'
import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/navigation'
const Why = () => {
    gsap.registerPlugin(ScrollTrigger);
    const router = useRouter()
    useEffect(()=>{   
        const tls4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#sectionavantage",
            start: "top 80%",
            end: "top -50%",
            toggleActions: "play none none reverse",
    
        }
    
    });
    tls4.fromTo(".cardfirst2",{y:15,opacity:0},{y:0,opacity:1,ease:"power1.inOut",duration:1,stagger:.5})
    },[])
    return (
        <section id="sectionavantage" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Vos avantages chez Germanhaus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Book, text: "Cours dispensés par des professionnels qualifiés" },
              { icon: Users, text: "Pratique active de la langue en groupe" },
              { icon: Hospital, text: "Partenariats avec des hôpitaux allemands" },
              { icon: ClipboardList, text: "Assistance pour les démarches administratives" },
              { icon: Globe, text: "Brisez les barrières linguistiques" },
              { icon: GraduationCap, text: "Tous niveaux, du débutant à l'avancé" },
            ].map((item, index) => (
              <div key={index} className=" cardfirst2 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl ">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="bg-red-100 rounded-full p-3 mb-4">
                    <item.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-lg font-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button  onClick={()=>{
                        router.push('/#contact')
                    }} className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-500 transition duration-300">
              Commencez dès maintenant
            </button>
          </div>
        </div>
      </section>
    );
}

export default Why;
