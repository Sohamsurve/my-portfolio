import { aboutMe } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="About Me"
          sub="⭐️ Who am I?"
        />

        <div className="lg:columns-1 md:columns-3 columns-2 mt-16">
          {aboutMe.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>              
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" width="170px" height="170px" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>

              </div>
              
            </GlowCard>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AboutMe;
