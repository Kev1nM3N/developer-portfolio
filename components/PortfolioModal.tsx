import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const successSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (success) {
      successSound.current = new Audio("/my-notification-sound.mp3");
      successSound.current.play();
    }
  }, [success]);

  const contact = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        event.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_PUBLIC_ID!
      );

      console.log("Service ID:", process.env.NEXT_PUBLIC_SERVICE_ID);
      console.log("Template ID:", process.env.NEXT_PUBLIC_TEMPLATE_ID);
      console.log("Public ID:", process.env.NEXT_PUBLIC_PUBLIC_ID);

  
      setLoading(false);
      setSuccess(true);
  
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
  
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setLoading(false);
      alert("The email service is temporarily unavailable. At the bottom of this website, click 'Let's get in touch!' to contact me directly.");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal bg-white dark:bg-gray-800 w-[90%] max-w-2xl p-8 rounded-xl relative flex overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ type: "spring", stiffness: 75, damping: 20 }}
          >
            <div className="w-full bg-gray-800 text-white p-6">
              <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
                &times;
              </button>
              <div className="text-center">
                <h3 className="text-lg sm:text-2xl font-bold mb-2">Let&apos;s Chat! 👨🏻‍💼</h3>
                <h4 className="text-sm sm:text-lg mb-4">I&apos;m Currently Open To New Opportunities</h4>
              </div>
              
              {/* Contact Form */}
              <form onSubmit={contact} id="contact__form" className="space-y-4">
                <div className="form__item flex flex-col">
                  <label className="form__item--label mb-1 text-sm">Your name:</label>
                  <input type="text" ref={nameRef} name="user_name" title="Name required" className="input p-2 rounded-md bg-gray-700 text-white" required />
                </div>
                <div className="form__item flex flex-col">
                  <label className="form__item--label mb-1 text-sm">Your email:</label>
                  <input type="email" ref={emailRef} name="user_email" title="Email required" className="input p-2 rounded-md bg-gray-700 text-white" required />
                </div>
                <div className="form__item flex flex-col">
                  <label className="form__item--label mb-1 text-sm">Your message:</label>
                  <textarea name="user_message" ref={messageRef} title="Message required" className="input p-2 rounded-md bg-gray-700 text-white h-[100px]" required />
                </div>
                <button type="submit" className="form__submit bg-blue-600 text-white px-8 py-2 rounded-full font-bold hover:bg-transparent border border-blue-500 hover:text-blue-500 transition duration-100">
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
  
              {/* Loading and Success Overlays */}
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-900 text-6xl text-white">
                  <FontAwesomeIcon className="animate-spinner" icon={faSpinner} />
                </div>
              )}
              {success && (
                <div className="absolute inset-0 flex items-center justify-center flex-col bg-green-500 text-3xl font-bold text-white text-center p-8 rounded-lg">
                  Thank you! 👨‍💻 <br /> Looking forward to speaking with you soon
                  <button className="border-[4px] border-white py-8 px-10 rounded-full mt-8 text-8xl cursor-default">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;