

const ProjectCard = ({ img, name, live, code }) => {
  return (
    <div className="w-full">
      <div className="bg-[#1e1e1e] px-9 py-16 max-sm:px-7 max-sm:py-11">
        <div className="shadow-lg shadow-black">
          <img src={img} className="w-full h-auto" />{" "}
          {/* Ensure image scales properly */}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl mt-4 font-semibold">{name}</p>
        <div className=" text-xs font-bold flex items-center gap-2 text-center">
          <a
            href={live}
            target="_blank"
            className="w-20 px-4 py-1  bg-red-600 hover:bg-red-800 duration-300"
          >
            LIVE
          </a>
          <a
            href={code}
            target="_blank"
            className="w-20 px-4 py-1  border border-red-600 hover:bg-white hover:text-red-600 duration-300 hover:border-black"
          >
            CODE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
