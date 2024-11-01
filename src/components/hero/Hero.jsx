import ContentWrapper from "../contentWrapper/ContentWrapper";
import banner from "../../assets/Bannerpic1.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import myCv from "../../assets/myCV.pdf";
const Hero = () => {
  return (
    <ContentWrapper>
      <div
        id="home"
        className="flex w-full mt-6 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5"
      >
        <div className="w-2/5 ">
          <img src={banner} className="w-964" />
        </div>
        <div className="flex flex-col  justify-center w-3/5 gap-4 max-lg:w-full max-lg:items-center">
          <p className="text-red-600 font-bold max-lg:text-2xl">
            Hello Im Merajul Aarfeen
          </p>
          <h1 className="text-5xl font-bold max-lg:text-4xl">
            <Typewriter
              words={[
                "Software Developer",
                "Full-Stack Developer",
                "React JS Developer",
                // "Freelance Developer",
                // "Travel Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              cursorColor="#9E101A"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-gray-500 max-lg:text-center">
            I am a skilled software developer from India, specializing in
            building high-performance, dynamic web applications using React.
            With a deep understanding of front-end architecture, I create
            responsive and intuitive user interfaces that enhance user
            experience. Passionate about clean code and scalable solutions, I
            thrive in collaborative environments, bringing creativity and
            precision to every project. Let's build the future of the web
            together!
          </p>
          <div className="flex gap-5">
            <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="w-32 px-4 py-2 bg-red-600 hover:bg-redButton text-sm text-center cursor-pointer"
            >
              ABOUT ME
            </Link>
            <a
              href={myCv}
              download
              className="w-32 px-4 py-2  border border-red-600 text-sm text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Hero;
