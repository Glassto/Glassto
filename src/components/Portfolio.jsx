import {
  ArchiveBoxIcon,
  CalendarIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";

const Portfolio = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-12 mt-20 mb-10 bg-gradient-to-r from-transparent via-secondary/5 to-transparent">
        <div className="flex items-center justify-center gap-2 w-full">
          <ArchiveBoxIcon className="size-5 text-white/80" />
          <p className="text-white/80 text-[13px] font-semibold tracking-widest pt-0.25 uppercase">
            Portfolio
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="@container relative bg-gray-500/5 p-2 w-full h-full rounded-xl border border-gray-300/5">
          <div className="relative">
            <img
              className="object-cover object-top w-full h-10/12 rounded-lg opacity-80"
              src="images/portfolio/image.webp"
              alt=""
            />
          </div>

          <div className="p-2">
            <div className="flex items-center justify-between px-2 py-2">
              <p className=" font-semibold text-2xl text-gray-300">Quartz</p>
              <div className="flex items-center gap-2 font-medium text-xs text-gray-500">
                <CalendarIcon className="size-4 mb-0.5" />
                12 July 2023
              </div>
            </div>

            <p className="p-2 text-gray-400 text-sm">
              A sophisticated digital experience mirroring the refined
              atmosphere of Quartz – a modern fine-dining restaurant
              specializing in artisanal cuisine. This project combines aesthetic
              minimalism with intuitive functionality to create an online
              presence that reflects the restaurant's commitment to luxury and
              attention to detail.
            </p>
            <div className="@[16rem]:flex items-center justify-between bg-secondary/0 w-full h-max rounded-lg mt-6  text-gray-500 text-xs font-medium">
              <div className="flex items-center w-6/12">
                <CpuChipIcon className="size-4" />
                <div className="flex items-center max-w-full overflow-x-hidden divide-x divide-gray-600 px-2">
                  <p className="px-2">HTML</p>
                  <p className="px-2">CSS</p>
                  <p className="px-2">Javascript</p>
                </div>
              </div>
              <div>
                <button className="flex items-center gap-2 px-6 py-2 rounded-md font-inter font-semibold text-gray-600 tracking-wider hover:drop-shadow-tertiary-2xl bg-gradient-to-br from-gray-300 to-slate-400 transition-all duration-300 cursor-pointer">
                  <p>Take a Look</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*Container */}
        <div className="@container relative bg-gray-500/5 p-2 w-full h-full rounded-xl border border-gray-300/5">
          {/* Image */}
          <div className="relative">
            <img
              className="object-cover object-top w-full h-10/12 rounded-lg opacity-80"
              src="images/portfolio/image.webp"
              alt=""
            />
          </div>

          {/* Information */}
          <div className="p-2">
            {/* Header */}
            <div className="flex items-center justify-between px-2 py-2">
              <p className=" font-semibold text-2xl text-gray-300">Quartz</p>
              <div className="flex items-center gap-2 font-medium text-xs text-gray-500">
                <CalendarIcon className="size-4 mb-0.5" />
                12 July 2023
              </div>
            </div>

            {/* Description */}
            <p className="p-2 text-gray-400 text-sm">
              A sophisticated digital experience mirroring the refined
              atmosphere of Quartz – a modern fine-dining restaurant
              specializing in artisanal cuisine. This project combines aesthetic
              minimalism with intuitive functionality to create an online
              presence that reflects the restaurant's commitment to luxury and
              attention to detail.
            </p>

            {/* Button */}
            <div className="@[16rem]:flex items-center justify-between bg-secondary/0 w-full h-max rounded-lg mt-6  text-gray-500 text-xs font-medium">
              <div className="flex items-center w-6/12">
                <CpuChipIcon className="size-4" />
                <div className="flex items-center max-w-full overflow-x-hidden divide-x divide-gray-600 px-2">
                  <p className="px-2">HTML</p>
                  <p className="px-2">CSS</p>
                  <p className="px-2">Javascript</p>
                </div>
              </div>
              <div>
                <button className="flex items-center gap-2 px-6 py-2 rounded-md font-inter font-semibold text-gray-600 tracking-wider hover:drop-shadow-tertiary-2xl bg-gradient-to-br from-gray-300 to-slate-400 transition-all duration-300 cursor-pointer">
                  <p>Take a Look</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-600/5 p-2 w-full h-20 rounded-xl border border-gray-300/5"></div>
      </div>
    </>
  );
};

export default Portfolio;
