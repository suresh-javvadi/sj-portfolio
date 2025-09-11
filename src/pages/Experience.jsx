import React from "react";
import scutoidLogo from "../assets/scutoid_logo.jpeg";

const formatDate = (date) => {
  return date.toLocaleString("default", { month: "short", year: "numeric" });
};

const getDuration = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let duration = "";
  if (years > 0) duration += `${years} yr${years > 1 ? "s" : ""} `;
  if (months > 0) duration += `${months} mo${months > 1 ? "s" : ""}`;

  return duration.trim() || "Just started";
};

const Experience = () => {
  const startDate = "2024-05-01";

  return (
    <div className="bg-white dark:bg-black border-2 border-[#4B3D10] p-6 space-y-10 rounded-lg">
      {/* Education */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Education</h1>
        <div className="p-6 border-2 border-[#4B3D10] rounded-lg">
          <h2 className="text-lg font-semibold">
            B.Tech in Computer Science and Engineering
          </h2>
          <p>
            Avanthi Institute Of Engineering and Technology <br />
            2019 – 2023
          </p>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Experience</h1>
        <div className="flex items-center gap-6 p-6 border-2 border-[#4B3D10] rounded-lg">
          <img
            src={scutoidLogo}
            alt="Scutoid Technologies Logo"
            className="w-20 h-20 rounded-lg object-cover border border-[#4B3D10] p-2"
          />
          <div>
            <h3 className="text-lg font-semibold">
              Scutoid Technologies PVT. LTD
            </h3>
            <p>
              <span className="font-semibold">Role:</span> React Developer
            </p>
            <p>
              <span className="font-semibold">Duration:</span>{" "}
              {formatDate(new Date(startDate))} – Present (
              {getDuration(startDate)})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
