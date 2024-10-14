'use client'
import React, { useEffect, useRef } from 'react';
import "./nav.css";
import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


const Nav = () => {
    const phonenav = useRef(null);
    const router = useRouter()
    
    useEffect(()=>{
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#nav",
                start: "top 50%",
                end: "top -50%",
                toggleActions: "play none none reverse",

            }
        });
        tls2.fromTo(".livl",{
            y:2,
            opacity:0
        },{y:0,opacity:1,duration:.4,stagger:.5})

    },[])
    return (
        <div id='navcontainer' >
            <div className="bg-yellow-400">
                <a href='https://www.facebook.com/GermanHaus.Meknas?_rdr'><img src='./facebook.png' /></a>
                <a href='mailto:germanhaus.meknes@gmail.com'><img src='./footermail.png' /></a>
                <a href='tel:0751-761346'><img src='./footerphone.png' /> 0751-761346</a>
            </div>

            <div id='nav'>
                <img src='./logowhite.png' />
                <ul>
                    <li className='livl' onClick={()=>{
                        router.push('/')
                    }}>Accueil</li>
                    <li className='livl' onClick={()=>{
                        router.push('/#sectionavantage')
                    }}>Vos Avantages</li>
                    <li className='livl' onClick={()=>{
                        router.push('/#sectioncourses')
                    }}>Nos Cours</li>
                    <li className='livl' onClick={()=>{
                        router.push('/#contact')
                    }}> Contactez Nous</li>
                </ul>
                <img src='./menu.png' id='burger' onClick={() => {

                    phonenav.current.style.transform = "scaleY(1)";

                }} />
            </div>
            <div id='navphone' ref={phonenav}>
                <img src="./close.png" alt="" onClick={() => {
                    phonenav.current.style.transform = "scaleY(0)";
                }} />
                
                <ul>
                    <li className='livl' onClick={()=>{
                        router.push('/')
                        phonenav.current.style.transform = "scaleY(0)";
                    }}>Accueil</li>
                    <li className='livl' onClick={()=>{
                        router.push('/#sectionavantage')
                        phonenav.current.style.transform = "scaleY(0)";
                    }}>Vos Avantages</li>
                    <li className='livl' onClick={()=>{
                        router.push('/#sectioncourses')
                        phonenav.current.style.transform = "scaleY(0)";
                    }}>Nos Cours</li>
                    <li className='livl' onClick={()=>{
                        router.push('/#contact')
                        phonenav.current.style.transform = "scaleY(0)";
                    }}> Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
