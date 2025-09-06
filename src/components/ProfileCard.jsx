import React from "react";
import profilePic from "../assets/profile.png";
import linkedinDark from "../assets/dark/linkedin.png";
import githubDark from "../assets/dark/github.png";
import mobileDarkIcon from "../assets/dark/mobile.png";
import emailDarkIcon from "../assets/dark/email.png";
import locationDarkIcon from "../assets/dark/location.png";
import dateDarkIcon from "../assets/dark/date.png";
import linkedinLight from "../assets/light/linkedin.png";
import githubLight from "../assets/light/github.png";
import mobileLightIcon from "../assets/light/mobile.png";
import emailLightIcon from "../assets/light/email.png";
import locationLightIcon from "../assets/light/location.png";
import dateLightIcon from "../assets/light/date.png";
import { useTheme } from "../context/ThemeContext";

const ProfileCard = () => {
  const { isDark } = useTheme();
  const linkedinIcon = isDark ? linkedinDark : linkedinLight;
  const githubIcon = isDark ? githubDark : githubLight;
  const mobileIcon = isDark ? mobileDarkIcon : mobileLightIcon;
  const emailIcon = isDark ? emailDarkIcon : emailLightIcon;
  const locationIcon = isDark ? locationDarkIcon : locationLightIcon;
  const dateIcon = isDark ? dateDarkIcon : dateLightIcon;

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
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-10 h-10 border-2 border-[#3662E3] dark:border-[#3662E3] rounded-lg p-2 hover:scale-110 transition"
            />
          </a>
          <a
            href="https://github.com/sureshjavvadi24"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-10 h-10 border-2 border-black dark:border-[#CCC0C0] rounded-lg p-2 hover:scale-110 transition"
            />
          </a>
        </div>

        <div className="mt-4 w-full space-y-3 text-sm bg-[#F9F6EA] dark:bg-[#3B3729] p-6 rounded-lg">
          <div className="flex items-center gap-4">
            <img
              src={mobileIcon}
              alt="Mobile"
              className="w-8 bg-[#D9D9D9] dark:bg-black p-2 rounded-lg"
            />
            <span>+91 9959130026</span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={emailIcon}
              alt="Email"
              className="w-8 bg-[#D9D9D9] dark:bg-black p-2 rounded-lg"
            />
            <span>sureshjavvadi24@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={locationIcon}
              alt="Location"
              className="w-8 bg-[#D9D9D9] dark:bg-black p-2 rounded-lg"
            />
            <span>Vizag, India</span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={dateIcon}
              alt="DOB"
              className="w-8 bg-[#D9D9D9] dark:bg-black p-2 rounded-lg"
            />
            <span>24 Apr, 2001</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileCard;
