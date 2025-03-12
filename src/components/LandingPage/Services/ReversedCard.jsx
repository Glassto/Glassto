import { CheckCircleIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

const ReversedServiceCard = ({ card }) => {
  return (
    <div
      key={card.id}
      className="flex justify-between items-start w-full h-max"
    >
      <div className="flex w-6/12">
        <div className="bg-gray-500/20 w-max h-full p-2 rounded-3xl border border-gray-200/10">
          <img
            className="bg-cover size-130 rounded-2xl"
            src="images/services-image.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-7/12 h-134 py-4">
        <div>
          <div className="flex items-center gap-2 w-max px-4 py-1 bg-secondary/10 rounded-2xl">
            <BriefcaseIcon className="size-4 text-gray-300" />
            <p className="text-gray-300 text-xs font-medium tracking-widest pt-0.5 uppercase">
              Services
            </p>
          </div>
          <h3 className="py-2 h-max text-5xl font-extrabold bg-gradient-to-br from-gray-300 from-40% to-slate-400 bg-clip-text text-transparent">
            {card.title}
          </h3>
          <p className="paragraph-gradient bg-clip-text text-transparent pt-6 pb-6">
            {card.description}
          </p>
          <p className="paragraph-gradient bg-clip-text text-transparent font-bold">
            Investing in SEO is a long-term advantage:
          </p>
          <ul className="relative paragraph-gradient bg-clip-text text-transparent text-base/8">
            <div className="absolute -z-10 top-0 -left-80 w-60 h-full bg-slate-400/30 blur-3xl"></div>
            {card.points.map((point, index) => (
              <li className="flex items-center gap-2" key={index}>
                <CheckCircleIcon className="size-5 text-slate-600" />
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="flex items-center gap-2 px-6 py-2 rounded-md font-inter font-semibold bg-gradient-to-br from-gray-300 to-slate-400">
            <p>Learn More</p>
            <ArrowLongRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReversedServiceCard;
