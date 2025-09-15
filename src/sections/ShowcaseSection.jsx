import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full ">
         <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/carePulse.png" alt="CarePulse App"/>
            </div>
            <div className="text-content">
              <h2>
                CarePulse – Scalable Healthcare SaaS Platform for Patient Registration, Scheduling.
              </h2>
              <p className="text-white-50 md:text-xl">
                A Healthcare SaaS platform built with Next.js, TypeScript & Twilio for fast, scalable, and user-friendly patient management.
              </p>
            </div>

            <br/>

            {/* second project*/}

            <div className="second-project-wrapper">
              <div className="image-wrapper">
                <img src="/images/metaversus.jpeg" alt="Metaversus App Interface"/>
              </div>
              <div className="text-content">
                <h2>
                  Metaversus - Powerful, User-Friendly Landing Page
                </h2>
                <p className="text-white-50 md:text-xl">
                  An app built with React, Three.js, & TailwindCSS for a fast,
                  user-friendly experience.
                </p>
              </div>
            </div>

            
          </div>

         
          {/* third project*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]" >
                <img
                  src="/images/weather.jpeg"
                  alt="Weather Forecasting App"
                />
              </div>
              <h2>The Weather Forecasting App</h2>
            </div>

            {/* fourth project*/}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/reunion.jpeg" alt="Alumni Reunion App" />
              </div>
              <h2>Alumni Reunion App</h2>
            </div>

            {/* fifth project*/}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/FashionStreet.png" alt="FashionStreet - A Fashion E-commerce App" />
              </div>
              <h2>FashionStreet - A Fashion E-commerce App</h2>
            </div>

            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AppShowcase;
