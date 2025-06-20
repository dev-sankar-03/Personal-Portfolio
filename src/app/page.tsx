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
                Identify quality issues from the 
                <br></br>
                earliest warning signs
              </h1>
            </div>
            <div className="hero-description">
              <h2>
                 With automatic issue detection and prioritization, your team can 
                 <br></br>
                focus on identifying root causes and implementing countermeasures to 
                <br></br>
                increase customer satisfaction and profitability.
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
