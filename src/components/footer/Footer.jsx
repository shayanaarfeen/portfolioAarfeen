
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { socials } from "../../constants/Constant";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] py-6">
      <ContentWrapper>
        <div className="flex items-center justify-between ">
          <ul className="flex gap-10 text-xl text-[#515458] max-sm:gap-5">
            {socials.map((item, k) => (
              <a
                href={item.link}
                target="_blank"
                className="hover:text-redHover cursor-pointer"
                key={k}
              >
                <li>{item.icon}</li>
              </a>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-2">
            <span className="text-red-500 text-xs">
              <FaHeart />
            </span>
            <p className="text-[#606B7B] text-sm font-base">
              Created by Merajul Aarfeen
            </p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
