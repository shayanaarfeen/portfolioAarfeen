import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero"
import Project from "../components/projectSection/Project";
import Skill from "../components/skill/Skill"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Skill />
      <div className=" relative">
        <Project />
        <div className=" absolute  h-[32rem] w-full z-0 top-[84rem] max-lg:hidden"></div>
        <Contact />
      </div>
    </div>
  );
}

export default HomePage