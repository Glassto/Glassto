import { portofolioCardsData } from "../../data/portfolioCardsData";
import {
  ArchiveBoxIcon,
  CalendarIcon,
  CpuChipIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

const Portfolio = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-12 mt-10 mb-10 bg-gradient-to-r from-transparent via-secondary/5 to-transparent">
        <div className="flex items-center justify-center gap-2 w-full">
          <ArchiveBoxIcon className="size-5 text-white/80" />
          <p className="text-white/80 text-[13px] font-semibold tracking-widest pt-0.25 uppercase">
            Portfolio
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {/*Container */}
        {portofolioCardsData.map((card) => (
          <div
            key={card.id}
            className="@container bg-gray-500/5 p-2 w-full h-full rounded-xl border border-gray-300/5"
          >
            {/* Image */}
            <div className="relative">
              <img
                className="object-cover object-top w-full h-10/12 rounded-lg opacity-70 hover:opacity-80 transition-all duration-300"
                src={card.image}
                alt=""
              />
            </div>

            {/* Information */}
            <div className="p-2">
              <div className="grow">
                {/* Header */}
                <div className="flex items-center justify-between px-2 py-2">
                  <p className=" font-extrabold text-2xl text-gray-300">
                    {card.title}
                  </p>
                  <div className="flex items-center gap-2 font-medium text-xs text-gray-500">
                    <CalendarIcon className="size-4 mb-0.5" />
                    {card.date}
                  </div>
                </div>

                {/* Description */}
                <p className="p-2 pb-0 text-gray-400 text-sm">
                  {card.description}
                </p>
              </div>

              {/* Button */}
              <div className="@sm:flex items-center justify-between bg-secondary/0 w-full h-full rounded-lg mt-6  text-gray-500 text-xs font-medium">
                <div className="flex items-center pt-1">
                  <CpuChipIcon className="size-4" />
                  <div className="flex items-center max-w-full overflow-x-hidden divide-x divide-gray-600 px-2">
                    {card.languages.map((language) => (
                      <p className="px-2">{language}</p>
                    ))}
                  </div>
                </div>
                <div className="@sm:py-0 pt-4">
                  <a
                    href={`https://glassto.github.io/${card.link}`}
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 py-2 rounded-md font-inter font-semibold text-gray-600 tracking-wider hover:drop-shadow-tertiary-2xl bg-gradient-to-br from-gray-300 to-slate-400 transition-all duration-300 cursor-pointer"
                  >
                    <p>Take a Look</p>
                    <EyeIcon className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
