import ServicesCards from "./ServicesHandler";

const Services = () => {
  return (
    <>
      {/* <div className="flex items-center justify-center w-full h-12 bg-gradient-to-r from-primary via-secondary/5 to-primary">
        <div className="flex items-center justify-center gap-2 w-full">
          <BriefcaseIcon className="size-4 text-white/80" />
          <p className="text-white/80 text-xs font-medium tracking-widest pt-0.25 uppercase">
            Services
          </p>
        </div>
      </div> */}

      <div className="bg-secondary/0 space-y-28 w-full h-max mt-4 px-12 py-8">
        <ServicesCards />
      </div>
    </>
  );
};

export default Services;
