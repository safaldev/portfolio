import React from "react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { PixelImage } from "@/components/ui/pixel-image";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Mouse } from "lucide-react";
import {HashLink} from "react-router-hash-link"


function Hero() {
  return (
    // <div className="relative h-dvh w-full overflow-hidden">
    //   <GridPattern />
    // </div>
    <div className="relative h-dvh w-full overflow-hidden">
      <DotPattern />
      <InteractiveGridPattern />

      <div className="w-[130%] h-30 -left-10 absolute bg-background -bottom-10 blur-xl"></div>
      <section className="relative w-full max-w-8xl mx-auto flex lg:gap-12 flex-col-reverse lg:flex-row pt-8 lg:pt-20">
        <div className="lg:w-3/5 mx-auto">
          <h1 className="text-3xl text-primary lg:text-7xl text-center drop-shadow-accent-foreground font-sans font-bold lg:text-right">
            <TypingAnimation typeSpeed={100}>
              👋 Hi! I'm Safal Chhetri
            </TypingAnimation>
          </h1>
          <h2 className="text-5xl lg:text-7xl text-center lg:text-right font-extrabold text-cyan-400">
            <TypingAnimation
              pauseDelay={800}
              typeSpeed={150}
              blinkCursor={true}
              cursorStyle={"underscore"}
              words={[
                "Developer",
                "Designer",
                "Programmer",
                "Researcher",
                "Tutor",
              ]}
              loop
            />
          </h2>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 lg:pl-40 py-4 lg:pt-24">
            <NeonGradientCard>
              <div className=" text-center text-cyan-500 text-lg font-semibold">
                <p className="text-xl font-bold pb-1">2+</p>
                <span className="text-sm text-primary">Years Experience</span>
              </div>
            </NeonGradientCard>
            <NeonGradientCard>
              <div className=" text-center text-cyan-500 text-lg font-semibold">
                <p className="text-xl font-bold pb-1">2+</p>
                <span className="text-sm text-primary">Industry Projects</span>
              </div>
            </NeonGradientCard>
            <NeonGradientCard>
              <div className=" text-center text-cyan-500 text-lg font-semibold">
                <p className="text-xl font-bold pb-1">4+</p>
                <span className="text-sm text-primary">IOT Projects</span>
              </div>
            </NeonGradientCard>
            <NeonGradientCard>
              <div className=" text-center text-cyan-500 text-lg font-semibold">
                <p className="text-xl font-bold pb-1">125+</p>
                <span className="text-sm text-primary">Commits Per Year</span>
              </div>
            </NeonGradientCard>
          </div>
        </div>
        <div className="lg:w-2/5 mx-auto">
          <PixelImage
            className="w-full justify-center rounded-full"
            src="/me.jpg"
          />
        </div>
      </section>

      <HashLink smooth to='#timeline' >
      <ShimmerButton className="shadow-2xl absolute mx-auto left-0 right-0 w-48 lg:bottom-30">
        <span className="text-center text-sm leading-none font-medium tracking-tight flex flex-row align-middle items-center gap-2 px-4 text-white lg:text-lg dark:from-white dark:to-slate-900/10">
          <Mouse /> | &nbsp; Scroll To View
        </span>
      </ShimmerButton>
      </HashLink>
      
    </div>
  );
}

export default Hero;
