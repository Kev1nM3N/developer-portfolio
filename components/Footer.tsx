'use client'
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-blue-600">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:mendez.kevin44@yahoo.com" title="Email me directly!">
          <MagicButton
            title="Let's get in touch!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kevin Mendez
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-9 sm:mt-0">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center 
            backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 
            rounded-lg border border-black-300 hover:scale-125"
          >
            {info.title === "Back to the top!" ? (
              <button
                title={info.title}
                onClick={handleBackToTop}
                className="flex items-center justify-center w-full h-full"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </button>
            ) : (
              <a
                href={info.href}
                title={info.title}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            )}
          </div>
        ))}
      </div>
      </div>
    </footer>
  );
};

export default Footer;