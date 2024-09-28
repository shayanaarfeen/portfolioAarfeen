import { useState } from "react";
import ContactModal from "../contactModal/ContactModal";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContentWrapper>
      <section
        id="contactMe"
        className="relative z-0 flex bg-[#1E1E1E] px-12 mt-20 gap-28 h-64 items-center max-lg:flex-col max-lg:gap-5 max-lg:items-start max-lg:py-9 max-lg:h-auto max-sm:px-4 max-sm:py-7 max-sm:gap-10"
      >
        <div className="w-3/5 max-lg:w-full">
          <h2 className="text-5xl font-extrabold mb-4 max-md:text-4xl max-sm:text-4xl max-sm:mb-3">
            Let's work together on your next project
          </h2>
          <p className="text-sm text-neutral-400 max-sm:text-xs">
            I am currently seeking new career opportunities and welcome the
            chance to connect. For any inquiries or potential collaborations,
            please feel free to reach out through the contact form or email me
            directly at {" "}
            <span className="text-red-600 font-bold text-base">
              shayanar4@gmail.com
            </span>
            <br />
            I look forward to the opportunity to connect with you.
          </p>
        </div>
        <button
          className="bg-redButton px-16 py-4 text-xs max-sm:px-10 max-sm:py-3 hover:scale-105 duration-200 hover:bg-red-800"
          onClick={() => setIsOpen(true)}
        >
          CONTACT
        </button>
      </section>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </ContentWrapper>
  );
};

export default Contact;
