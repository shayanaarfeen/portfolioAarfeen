import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiHostinger } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAppwrite } from "react-icons/si";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";


const navBarConst = [
  {
    name: "HOME",
    navLink: "home",
  },
  {
    name: "PROJECT",
    navLink: "project",
  },
  {
    name: "ABOUT ME",
    navLink: "aboutMe",
  },
  {
    name: "CONTACT ME",
    navLink: "contactMe",
  },
];

const frontendSkill = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "React JS",
    icon: <FaReact />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Next JS",
    icon: <RiNextjsLine />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
  // {
  //   name: "Bootstrap",
  //   icon: <FaBootstrap />,
  // },
];


const backendSkill = [
  {
    name: "MongoDB",
    icon: <DiMongodb />,
  },
  {
    name: "My SQL",
    icon: <SiMysql />,
  },
  {
    name: "Node JS",
    icon: <FaNodeJs />,
  },
  {
    name: "Firebase",
    icon: <IoLogoFirebase />,
  },
  {
    name: "Appwrite",
    icon: <SiAppwrite />,
  },
  {
    name: "Express JS",
    icon: <SiExpress />,
  },
  // {
  //   name: "Amazon Web Service",
  //   icon: <FaAws />,
  // },
  // {
  //   name: "Hostinger",
  //   icon: <SiHostinger />,
  // },
];

const techTools = [
  {
    name: "VS Code",
    icon: <VscVscode />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  // {
  //   name: "Photoshop",
  //   icon: <SiAdobephotoshop />,
  // },
  // {
  //   name: "WordPress",
  //   icon: <FaWordpress />,
  // },
];

const projectCardInfo = [
  {
    name: "SyncTalk (Chat Application)",
    img: project7,
    liveLink: "https://sync-talk.vercel.app/",
    codeLink: "https://github.com/shayanaarfeen/syncTalk",
  },
  {
    name: "E-Zey (Ecom Website)",
    img: project1,
    liveLink: "https://e-zey.vercel.app/",
    codeLink: "https://github.com/shayanaarfeen/E-Zey",
  },
  {
    name: " Infinite Ink (Blog Website)",
    img: project2,
    liveLink: "https://infinite-ink-mauve.vercel.app/",
    codeLink: "https://github.com/shayanaarfeen/Infinite-Ink",
  },
  {
    name: "Contact App",
    img: project3,
    liveLink: "https://contact-app-six-tawny.vercel.app/",
    codeLink: "https://github.com/shayanaarfeen/contact-app",
  },
  {
    name: "Currency Converter",
    img: project4,
    liveLink: "https://shayan-currency-converter.vercel.app/",
    codeLink: "https://github.com/shayanaarfeen/currency-converter",
  },
  {
    name: "Taskly (To-do App)",
    img: project5,
    liveLink: "https://taskly-pink.vercel.app/",
    codeLink: "https://github.com/shayanaarfeen/taskly",
  },
  {
    name: "Weather App",
    img: project6,
    liveLink: "https://weather-app-shayan.vercel.app/",
    codeLink: "https://github.com/shayanaarfeen/weather-app",
  },
];

const socials = [
  {
    icon: <FaSquareGithub />,
    link: "https://github.com/shayanaarfeen",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/merajul-aarfeen/",
    name: "Linkedin",
  },
  // {
  //   icon: <FaYoutube />,
  //   link: "https://www.youtube.com/@tubetalk007",
  //   name: "YouTube",
  // },
  {
    icon: <FaSquareXTwitter />,
    link: "https://x.com/shayanar4",
    name: "X",
  },
];

export { navBarConst, frontendSkill, backendSkill, techTools, projectCardInfo, socials };
