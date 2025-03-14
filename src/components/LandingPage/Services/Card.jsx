import React from "react";
import { CheckCircleIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

const Card = ({ card }) => {
  return (
    <div className="@container flex justify-between items-stretch gap-10 w-full h-full ">
      {/* Text */}

      <div className="flex-2 flex flex-col justify-between gap-12 mb-8 py-4 bg-gray-400/0">
        <div>
          <div className="flex items-center gap-2 w-max px-3 py-0.5 opacity-50 bg-secondary/10 border border-white/10 rounded-2xl">
            <BriefcaseIcon className="size-3 text-gray-100" />
            <p className="text-gray-100 text-[10px] font-medium tracking-widest pt-0.75 uppercase">
              Services
            </p>
          </div>
          <h3 className="py-2 h-max text-5xl/16 font-black bg-gradient-to-br from-gray-300 to-slate-400 bg-clip-text text-transparent">
            {card.title} <br />
            {card.subtitle}
          </h3>
          <p className="paragraph-gradient bg-clip-text text-transparent font-medium @5xl:max-w-11/12 pt-6 pb-6">
            {card.description}
          </p>
          <p className="paragraph-gradient py-2 bg-clip-text text-transparent font-bold">
            {card.pointsTitle}
          </p>
          <ul className="relative paragraph-gradient space-y-4 bg-clip-text text-transparent text-base/6">
            <div className="@5xl:block hidden absolute top-0 -z-10 -right-60 w-60 h-full bg-secondary/30 blur-3xl"></div>
            <div className="absolute top-0 -z-10 -left-60 w-60 h-full bg-slate-400/30 blur-3xl"></div>
            {card.points.map((point, index) => (
              <li className="flex items-start gap-2" key={index}>
                <span className="flex items-center h-[1lh]">
                  <CheckCircleIcon className="size-5 text-slate-600" />
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="flex items-center gap-2 px-6 py-2 rounded-md font-inter font-semibold hover:drop-shadow-tertiary-2xl bg-gradient-to-br from-gray-300 to-slate-400 transition-all duration-300 cursor-pointer">
            <p>Learn More</p>
            <ArrowLongRightIcon className="size-5" />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 @5xl:flex hidden bg-gray-500/0">
        <div className="relative bg-gray-500/20 p-2 w-full h-max rounded-3xl border border-gray-300/5">
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none rounded-3xl ">
            <div className="absolute -left-40 -top-80 w-1/2 h-200 animate-glow-sweep rotate-45 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-20" />
          </div>
          <img
            className="object-cover w-full h-136 rounded-2xl"
            src={card.id === 1 ? "S.E.O.webp" : "Web Design.webp"}
            alt={`${card.title} image`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
