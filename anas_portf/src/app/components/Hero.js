import React from "react";
// import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../utils/cn";
import { FaLocationArrow, FaFileDownload } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BentoGridThirdDemo } from "./ui/BentoGrid";

const spotlights = [
  { className: "-top-25 -left-10 md:-left-32 md:-top-20 h-screen", fill: "white" },
  { className: "h-[80vh] w-[50vw] top-10 left-full", fill: "purple" },
  { className: "left-80 top-23 h-[80vh] w-[50vw]", fill: "blue" },
];

const Hero = () => {
  return (
    <>
      <section className="Hero relative pb-20 pt-30">
        {/* Spotlight Effects */}
        <div>
          {spotlights.map((spotlight, idx) => (
            <Spotlight key={idx} className={spotlight.className} fill={spotlight.fill} />
          ))}
        </div>

        {/* Grid Lines Background */}
        <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319]">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:45px_45px]",
              "[background-image:linear-gradient(to_right,#000319_1px,transparent_1px),linear-gradient(to_bottom,#000319_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#064e5b_1px,transparent_0.4px),linear-gradient(to_bottom,#064e5b_1px,transparent_0.4px)]",
            )}
          />

          {/* Radial Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

          {/* Hero Text Content */}
          <div className="flex justify-center relative z-10 my-17">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Dynamic Web Magic Portfolio with Next.js
              </p>

              <TextGenerateEffect
                words="Transforming Concepts into Seamless User Experiences"
                className="text-center text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4 mb-6"
              />

              <p className="text-center md:tracking-wider mb-4 text-[18px]">
                Hi! I&apos;m Anas Mansuri, <br /> A Full-Stack Developer based in India.
              </p>

              <div className="flex flex-row gap-5">
                <a href="#about">
                  <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
                </a>
                <a href="/anas-mansuri-cv.pdf" download>
                  <MagicButton title="Download CV" icon={<FaFileDownload />} position="right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
