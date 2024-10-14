"use client"
import React from 'react';
import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/navigation'
const Courses = () => {
  const router = useRouter()
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{   
    const tls3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#sectioncourses",
        start: "top 50%",
        end: "top -50%",
        toggleActions: "play none none reverse",

    }

});
tls3.fromTo(".cardfirst",{y:15,opacity:0},{y:0,opacity:1,ease:"power1.inOut",duration:1,stagger:.5})
},[])

    return (
        <section className="py-16 bg-gray-100" id="sectioncourses">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nos Cours Spécialisés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {name:"Coiffure",image:"./coiffure.png"},
              { name:"Soins aux personnes âgées",image:"./untitle.png"},
               {name:"Infirmerie",image:"./infirmier.png"},
                {name:"Cuisine",image:"./cuisibe.png"},
              {name:"Hôtellerie",image:"./hottelerie.png"},
              { name:"Conduite",image:"./conduite.png"},
               { name:"Mécanique automobile",image:"./mecanique.png"},
                 {name:"Garde d'enfants",image:"./Gardeenfants.png"},
                  {name:"Langue allemande",image:"./german.png"}
            ].map((course, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg cardfirst">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-100 transition duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold">{course.name}</h3>
                </div>
              
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button  onClick={()=>{
                        router.push('/#contact')
                    }}  className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300">
              En savoir plus sur nos cours
            </button>
          </div>
        </div>
      </section>
    );
}

export default Courses;
