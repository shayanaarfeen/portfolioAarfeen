import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross2 } from "react-icons/rx";

const ContactModal = ({ isOpen, setIsOpen }) => {
  const handleClose = (e) => {
    // Close the modal if clicked outside the content
    if (e.target.id === "modal-backdrop") {
      setIsOpen(false);
    }
  };
  if (isOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  //------------------  This section is for chatBot -----------------------------------------//

  if (isOpen) {
    const messenger = document.querySelector("df-messenger");
    if (messenger) {
      messenger.remove(); // Removes the df-messenger element if it exists
    }
  } else {
    if (!document.querySelector("df-messenger")) {
      const messenger = document.createElement("df-messenger");
      messenger.setAttribute("intent", "WELCOME");
      messenger.setAttribute("chat-title", "Your_Bot Name");
      messenger.setAttribute("agent-id", "Replace it with your agent-id");
      messenger.setAttribute("language-code", "en");
      document.body.appendChild(messenger); // Adds the df-messenger element
    }
  }

  //--------------------------- for notification ----------------------------------------------//
  const notify = () =>
    toast.success("Message Sent Successfully", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const errorNotify = () => {
    toast.error("Something Went Wrong! Try Again Later", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("Your_service_key", "template_gkyrans", form.current, {
        publicKey: "Your_public_key",
      })
      .then(
        () => {
          notify();
        },
        (error) => {
          errorNotify();
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      {isOpen && (
        <section
          id="modal-backdrop"
          onClick={handleClose}
          className="fixed inset-0 bg-darkGrey bg-opacity-80 backdrop-blur-md flex items-center justify-center z-50"
        >
          <div className="max-w-6xl mx-auto p-4 md:p-16 xl:p-20 relative">
            <span
              onClick={() => setIsOpen(false)}
              className="absolute right-3 text-3xl text-red-600 cursor-pointer"
            >
              <RxCross2 />
            </span>
            <div className="lg:w-2/3 space-y-5 text-center mx-auto ">
              <h1 className="text-white uppercase tracking-widest text-4xl font font-extrabold">
                Get in touch
              </h1>
              <div className="h-0.5 bg-red-600 w-14 mx-auto"></div>
              <p className="text-gray-400 text-base leading-6">
                We excel at generating innovative ideas while recognizing that a
                smart concept must be backed by measurable results.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
              <div>
                <address>
                  <div className="mb-6">
                    <h2 className="text-base font-medium mb-2 text-white">
                      Email:
                    </h2>
                    <p className="text-gray-400 text-sm font-medium leading-5">
                      shayanar4@gmail.com
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-base font-medium mb-2 text-white">
                      WhatsApp
                    </h2>
                    <p className="text-gray-400 text-sm font-medium leading-5">
                      +91 xxxxxxxxx
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-base font-medium mb-2 text-white">
                      Location:
                    </h2>
                    <p className="text-gray-400 text-sm font-medium leading-5">
                      New Delhi
                    </p>
                  </div>
                </address>
              </div>
              <div className="lg:col-span-2">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label htmlFor="user_name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        className="form-input"
                        placeholder="Enter your name"
                      />
                      <label htmlFor="user_email" className="sr-only">
                        Enter your email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                    {/* Subject Input */}
                    <label htmlFor="user_subject" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_subject"
                      id="name"
                      className="form-input"
                      placeholder="Enter your subject"
                    />
                    <textarea
                      name="message"
                      id="comments"
                      className="form-input"
                      placeholder="Enter your message"
                      rows="3"
                    ></textarea>
                    <div className="text-right">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="inline-block px-5 py-2.5 rounded text-sm cursor-pointer select-none outline-none transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-offset-0 hover:translate-y-1.5 bg-red-600 text-white"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
      <ToastContainer />
    </div>
  );
};

export default ContactModal;
