'use client'

import React, { useEffect } from 'react';
import "./gallery.css"
import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    useEffect(() => {
    //Runs only on the first render

    const tls2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#gallery",
            start: "top 80%",
            end: "top 5%",
           
            toggleActions: "play none none reverse",
        }
    });
    tls2.to("#img1", {
        opacity: 1,
        x:0,

        duration: 2,
        ease: "power1.inOut"
    },"anim5").to("#img4", {
        opacity: 1,
x:0,
        duration: 2,
        ease: "power1.inOut",
        stagger:.4
    },"anim5").to("#img2", {
        opacity: 1,
y:0,
        duration: 2,
        ease: "power1.inOut",
        stagger:.4
    },"anim5").to("#img3", {
        opacity: 1,
y:0,
        duration: 2,
        ease: "power1.inOut",
        stagger:.4
    },"anim5")

}, []);
    return (
        <div id='gallery'>
            <img src='./gallery2.jpg' id='img1'/>
            <div>
                <img src='./gallery1.jpg' id='img2'/>
                <img src='./gallery3.jpg' id='img3'/>
            </div>
            <img src='./gallery4.jpg' id='img4'/>
        </div>
    );
}

export default Gallery;
