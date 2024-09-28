import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { projectCardInfo } from "../../constants/Constant";
import ProjectCard from "../card/ProjectCard";
import { toast, ToastContainer } from "react-toastify";

const Project = () => {
  const notify = () =>
    toast.info("Project page is under development", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className: "text-sm",
    });
  return (
    <ContentWrapper>
      <div id="project" className="mt-12 relative z-10">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2 max-md:text-center max-md:w-full">
            <p className="text-4xl font-extrabold max-lg:text-3xl max-sm:text-2xl">
              FEATURED PROJECTS
            </p>
            <span className="text-sm font-normal text-neutral-500">
              These projects will showcase my expertise of my current skills and
              experience
            </span>
          </div>
          <button
            className="bg-redButton px-7 py-3 max-md:hidden"
            onClick={() => {
              notify();
            }}
          >
            VIEW ALL
          </button>
        </div>
        <div className="mt-12">
          <div className="w-full grid grid-cols-2 grid-rows-2 max-sm:grid-rows-1 max-sm:grid-cols-1 gap-7">
            {projectCardInfo?.map((item, k) => (
              <React.Fragment key={k}>
                <ProjectCard
                  name={item.name}
                  img={item.img}
                  live={item.liveLink}
                  code={item.codeLink}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </ContentWrapper>
  );
};

export default Project;
