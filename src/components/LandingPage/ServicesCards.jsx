import React from "react";
import { CheckCircleIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

const ServicesCards = () => {
  return (
    <>
      <div className="flex justify-between items-start w-full h-max">
        <div className="flex flex-col justify-between w-7/12 h-134 py-4">
          <div>
            <h3 className="py-2 h-max text-5xl/16 font-extrabold bg-gradient-to-br from-gray-300 from-40% to-slate-400 bg-clip-text text-transparent">
              S.E.O <br /> (Search Engine Optimization)
            </h3>
            <p className="paragraph-gradient bg-clip-text text-transparent pt-6 pb-6">
              Unlike short-term advertising solutions, SEO delivers sustainable
              growth, builds long-term authority, and maximizes return on
              investment. Transform your online platform into a powerful tool
              for business growth and success with professional SEO services.
            </p>
            <p className="paragraph-gradient bg-clip-text text-transparent font-bold">
              Investing in SEO is a long-term advantage:
            </p>
            <ul className=" paragraph-gradient bg-clip-text text-transparent text-base/8">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="size-5 text-accent" />
                <p>Consistent organic traffic, with no cost per click.</p>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="size-5 text-accent" />
                <p>Niche authority (increased trust and brand awareness).</p>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="size-5 text-accent" />
                <p>
                  Perfect compatibility with other digital strategies (PPC,
                  Social Media).
                </p>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="size-5 text-accent" />
                <p>
                  Higher conversion rates (targets users with specific search
                  intent).
                </p>
              </li>
            </ul>
          </div>
          <div>
            <button className="flex items-center gap-2 px-6 py-2 rounded-md font-inter font-semibold bg-gradient-to-br from-gray-300 to-slate-400">
              <p>Learn More</p>
              <ArrowLongRightIcon className="size-5" />
            </button>
          </div>
        </div>
        <div className="flex justify-end w-6/12">
          <div className="bg-gray-500 w-max h-full p-2 rounded-3xl">
            <img
              className="bg-cover size-130 rounded-2xl"
              src="images/services-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start w-full h-max mt-28">
        <div className="flex w-6/12">
          <div className="bg-gray-500/40 w-max h-full p-2 rounded-3xl border border-gray-200/10">
            <img
              className="bg-cover size-130 rounded-2xl"
              src="images/services-image.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-between w-7/12 h-134 py-4">
          <div>
            <h3 className="py-2 h-max text-5xl font-extrabold bg-gradient-to-br from-gray-300 from-40% to-slate-400 bg-clip-text text-transparent">
              Web Development
            </h3>
            <p className="paragraph-gradient bg-clip-text text-transparent pt-6 pb-6">
              Unlike short-term advertising solutions, SEO delivers sustainable
              growth, builds long-term authority, and maximizes return on
              investment. Transform your online platform into a powerful tool
              for business growth and success with professional SEO services.
            </p>
            <p className="paragraph-gradient bg-clip-text text-transparent font-bold">
              Investing in SEO is a long-term advantage:
            </p>
            <ul className=" paragraph-gradient bg-clip-text text-transparent text-base/8">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="size-5 text-accent" />
                <p>Consistent organic traffic, with no cost per click.</p>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="size-5 text-accent" />
                <p>Niche authority (increased trust and brand awareness).</p>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="size-5 text-accent" />
                <p>
                  Perfect compatibility with other digital strategies (PPC,
                  Social Media).
                </p>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="size-5 text-accent" />
                <p>
                  Higher conversion rates (targets users with specific search
                  intent).
                </p>
              </li>
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
    </>
  );
};

export default ServicesCards;
