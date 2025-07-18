"use client";

import '@/app/styles/home.scss'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import StarCanvas from './components/Starcanvas';
import { useEffect } from 'react';

export default function Home() {

  return (
   <>
      <div className="home-container">
          <div className="bg-arc-wrapper">
              <Image 
                src='/arc.png'
                fill={true}
                alt='arc'
              />
          </div>
          <div className="bg-interaction-wrapper">
              <StarCanvas />
          </div>
          <div className="home-content">
            <div className="hero-content">
              <h1>
                Building softwares that solves 
                <br></br>
                problems and scales fast
              </h1>
            </div>
            <div className="hero-description">
              <h2>
                 Full stack developer focused on clean, scalable web solutions. Experienced in modern
                 <br></br>
                  web development across front-end and back-end. Skilled in REST API design
                <br></br>
                 and background job processing.
              </h2>
            </div>
            <div className="resume-btn">
              <Link className="resume-link" href="#">
                View my resume
              </Link>
              <ArrowRight color='#000000' />
            </div>
          </div>
      </div>
   </>
  );
}
