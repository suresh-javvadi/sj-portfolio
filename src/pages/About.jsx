import React from "react";
import webFrontendDev from "../assets/web-front-end-dev.png";

const About = () => {
  return (
    <section className="p-6 space-y-12 bg-white dark:bg-black border border-[#B7A261] dark:[#4B3D10] rounded-lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          nihil temporibus officiis quisquam cum. Nulla neque inventore, non
          rerum illo incidunt sint, repellat distinctio illum, repudiandae
          expedita odit facere. Perspiciatis, qui deserunt atque repudiandae, ex
          repellat nam dicta reprehenderit commodi ab, natus excepturi! Corporis
          ratione quo deleniti a officia quibusdam possimus eveniet id nostrum
          error optio reiciendis iste aliquam nihil cumque exercitationem
          laudantium sit, ipsam soluta itaque totam. Voluptatum blanditiis sequi
          sapiente eveniet fugit laborum debitis, aliquam explicabo aliquid,
          ipsa officiis corrupti necessitatibus totam aut nostrum vero atque
          quisquam repudiandae laudantium magni obcaecati esse eligendi deserunt
          temporibus. Autem, provident atque?
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">What I Do</h1>

        <div className="flex flex-col md:flex-row items-center border-2 border-[#625839] rounded-lg p-6 gap-6 dark:bg-[#60594B]">
          <img
            src={webFrontendDev}
            alt="Web Front-End Development"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Web Front-End Development
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit recusandae fugiat, asperiores mollitia molestiae
              non, magni sint suscipit eaque corporis, tempora placeat amet
              ipsam eligendi assumenda deleniti ullam soluta impedit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
