import { FaArrowRight } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const SkillCard = ({ skill, title, icon, bgColor, textColor, hover }) => {
  return (
    <div className={`w-1/2  ${bgColor} p-12 flex flex-col gap-4 max-lg:w-full`}>
      <div className={`frontend ${textColor} text-6xl`}>{icon}</div>
      <p className="text-3xl font-extrabold">{title}</p>
      <div className="flex text-4xl flex-wrap gap-8 my-7 ">
        {skill?.map((item, k) => (
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={item.name}
            key={k}
            className={`${hover} cursor-pointer`}
          >
            {item.icon}
          </div>
        ))}
        <Tooltip
          id="my-tooltip"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            color: "#000000",
            fontSize: "20px",
            padding: "4px 8px",
            lineHeight: "1.2",
            borderRadius: "2px",
          }}
          arrowColor="red"
        />
      </div>
      <p
        className={`${textColor} font-extrabold flex items-center gap-4 text-base cursor-pointer`}
      >
        KNOW MORE {<FaArrowRight />}
      </p>
    </div>
  );
};

export default SkillCard;
