const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 mx-auto max-w-[812px] overflow-y-hidden">
      {/* CTA Button */}
      <div className="CTAbutton flex gap-2 px-3 py-0.5 bg-primary/15 border border-secondary/15 rounded-2xl">
        <h5 className="text-white text-sm">
          Get Your Custom Website NOW -{" "}
          <span className="font-semibold">10% off</span>
        </h5>
        <img src="images/chevron-right.svg" alt="" />
      </div>

      {/* Heading */}
      <div className="heading flex flex-col text-center mt-10">
        <h1 className="md:text-8xl/tight sm:text-7xl/tight text-6xl/tight text-balance font-bold bg-gradient-to-br from-white/80 from-40% to-gray-800/20 bg-clip-text text-transparent ">
          Your Business,
          <br /> Our{" "}
          <span className=" font-black  bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
            Web Solutions
          </span>
        </h1>
      </div>

      {/* Paragraph */}
      <div className="sm:text-base text-sm text-gray-500 text-center text-pretty max-w-2xl mt-4">
        Turn your idea into a modern and functional website, crafted by experts
        in web design and development. We offer customized solutions optimized
        for performance, security, and maximum conversion.
      </div>

      {/* Hero Buttons */}
      <div className="flex items-center justify-center sm:gap-6 gap-3 w-full my-12 text-white font-semibold">
        <button className="px-5 py-1 sm:w-30 w-max rounded-md border border-accent font-inter text-sm/7 shadow-inner shadow-accent-light/10 cursor-pointer">
          Portfolio
        </button>
        <button className="flex items-center justify-center gap-2 px-5 py-1 sm:w-30 w-full rounded-md bg-radial-[at_-50%_-75%] from-accent-light to-accent font-inter text-sm/7 text-white shadow-inner shadow-white/10">
          <p>Services</p>
          <img src="images/chevron-right.svg" alt="" className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
