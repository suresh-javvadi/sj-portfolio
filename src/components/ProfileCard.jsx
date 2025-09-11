import React from "react";
import profilePic from "../assets/profile.png";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdLocationOn, MdDateRange, MdMail } from "react-icons/md";
import { FaPhoneAlt, FaFileDownload } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <aside className="w-3/12 relative">
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-lg object-cover border-4 border-[#B7A261] dark:border-[#4B3D10] absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="p-6 flex flex-col items-center bg-white border-2 border-[#B7A261] shadow-lg rounded-2xl dark:bg-black mt-16 dark:border-[#4B3D10]">
        <h1 className="mt-16 text-2xl font-bold dark:text-[#CCC0C0]">
          Suresh Javvadi
        </h1>
        <h2 className="bg-[#FEF6DD] dark:bg-[#272522] border border-[#B7A261] dark:border-[#4B3D10] dark:text-[#CCC0C0] py-2 px-8 mt-2 rounded-md font-semibold">
          React Developer
        </h2>
        <div className="flex gap-6 mt-3">
          <a
            href="https://www.linkedin.com/in/sureshjavvadi/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin className="w-10 h-10 text-[#3662E3] border-2 border-[#3662E3] rounded-lg p-2 hover:scale-110 transition" />
          </a>
          <a
            href="https://github.com/sureshjavvadi24"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="w-10 h-10 text-black dark:text-white border-2 border-black dark:border-[#CCC0C0] rounded-lg p-2 hover:scale-110 transition" />
          </a>
        </div>
        <div className="mt-4 w-full space-y-3 text-sm bg-[#F9F6EA] dark:bg-[#3B3729] p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="w-8 h-8 bg-[#D9D9D9] dark:bg-black p-2 rounded-lg text-black dark:text-white flex-shrink-0" />
            <span className="break-words text-sm">+91 9959130026</span>
          </div>

          <div className="flex items-center gap-3">
            <MdMail className="w-8 h-8 bg-[#D9D9D9] dark:bg-black p-2 rounded-lg text-black dark:text-white flex-shrink-0" />
            <span className="break-words text-sm">
              sureshjavvadi24@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MdLocationOn className="w-8 h-8 bg-[#D9D9D9] dark:bg-black p-2 rounded-lg text-black dark:text-white flex-shrink-0" />
            <span className="break-words text-sm">Vizag, India</span>
          </div>

          <div className="flex items-center gap-3">
            <MdDateRange className="w-8 h-8 bg-[#D9D9D9] dark:bg-black p-2 rounded-lg text-black dark:text-white flex-shrink-0" />
            <span className="break-words text-sm">24 Apr, 2001</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E0CE93] dark:bg-[#C2B293] text-black font-semibold text-lg p-2 border-2 rounded-lg border-[#B7A261] dark:border-[#4B3D10] hover:scale-105 transition-transform flex items-center gap-2"
          >
            <span>View Resume</span>
            <FaFileDownload
              className="text-[#B7A261] dark:text-[#4B3D10] hover:text-black dark:hover:text-white transition"
              onClick={(e) => {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Suresh_Javvadi_Resume.pdf";
                link.click();
              }}
            />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ProfileCard;
