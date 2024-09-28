// import frontend from "../assets/frontend.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import SkillCard from "../card/SkillCard";
import { backendSkill, techTools, frontendSkill } from "../../constants/Constant";
import { MdMonitor } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="aboutMe" className="flex relative">
      <div className="max-lg:hidden w-1/2 h-[63rem]  absolute z-0"></div>
      <ContentWrapper>
        <div className=" relative z-10 flex flex-col gap-20">
          
          {/* skill set  */}
          <div className="mt-32 flex gap-5 max-lg:flex-col ">
            <SkillCard
              skill={frontendSkill}
              title="Frontend Tech Stack"
              icon=<MdMonitor />
              bgColor="bg-[#1E1E1E]"
              textColor="text-redButton"
              hover="hover:text-red-600"
            />
            <SkillCard
              skill={backendSkill}
              icon={<AiFillDatabase />}
              title="Backend Tech Stack"
              bgColor="bg-redButton"
              textColor="text-white"
              hover="hover:text-[#181818]"
            />
            <SkillCard
              skill={techTools}
              icon=<FaTools />
              title="Tech Tools"
              bgColor="bg-[#1E1E1E]"
              textColor="text-redButton"
              hover="hover:text-red-600"
            />
          </div>

          {/* Expreince section  */}
          {/* <div className="flex mb-32 max-md:flex-col max-md:items-center max-md:gap-8">
            <div className="w-1/3 flex flex-col items-center justify-center text-center text-red-600 text-9xl font-extrabold">
              2
              <span className="text-white text-2xl font-extrabold">
                Years Experience
              </span>
            </div>
            <div className="w-full max-w-2xl grid grid-cols-2 grid-rows-2 gap-4 max-sm:grid-rows-1 max-sm:grid-cols-1">
              <div className="w-full bg-[#1E1E1E] flex flex-col items-center justify-center gap-2 px-8 py-6">
                <p className="text-red-600 font-extrabold text-4xl">3+</p>
                <p className="text-sm text-neutral-500">Happy Clients</p>
              </div>
              <div className="w-full bg-[#1E1E1E] flex flex-col items-center justify-center gap-2 px-8 py-6">
                <p className="text-red-600 font-extrabold text-4xl">50,000+</p>
                <p className="text-sm text-neutral-500 font-sm">
                  Lines of Code
                </p>
              </div>
              <div className="w-full bg-[#1E1E1E] flex flex-col items-center justify-center gap-2 px-8 py-6">
                <p className="text-red-600 font-extrabold text-4xl">12+</p>
                <p className="text-sm text-neutral-500 font-sm">
                  Completed projects
                </p>
              </div>
              <div className="w-full bg-[#1E1E1E] flex flex-col items-center justify-center gap-2 px-8 py-6">
                <p className="text-red-600 font-extrabold text-4xl">7</p>
                <p className="text-sm text-neutral-500 font-sm">Achievements</p>
              </div>
            </div>
          </div> */}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Skills;
