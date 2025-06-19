import '@/app/styles/home.scss'
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
   <>
      <div className="home-container">
          <div className="bg-arc-wrapper">

          </div>
          <div className="bg-interaction-wrapper">

          </div>
          <div className="home-content">
            <div className="hero-content">
              Identify quality issues from the earliest warning signs
            </div>
            <div className="hero-description">
              With automatic issue detection and prioritization, your team can 
              focus on identifying root causes and implementing countermeasures to 
              increase customer satisfaction and profitability.
            </div>
            <div className="resume-btn">
               <span>View my resume</span>
               <ArrowRight />
            </div>
          </div>
      </div>
   </>
  );
}
