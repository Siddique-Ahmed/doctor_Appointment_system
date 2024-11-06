import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
            DOCTOR APPOINTMENT SYSTEM
            <br className="hidden lg:inline-block" />
            World Best Doctors
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex gap-5 justify-center">
            <Button variants="destrective">Button</Button>
            <Button>Button</Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            width={400}
            height={400}
            src="https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
