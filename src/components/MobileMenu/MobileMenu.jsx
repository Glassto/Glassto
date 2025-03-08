import SubMenu from "./SubMenu";
import { useEffect, useState } from "react";
import {
  HomeIcon,
  ChevronRightIcon,
  BriefcaseIcon,
  ArchiveBoxIcon,
  InformationCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

const MobileMenu = ({ isOpen }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    {
      label: "Home",
      icon: <HomeIcon className="h-6 w-6 text-secondary" />,
      rotate: false,
    },
    {
      label: "Services",
      icon: <BriefcaseIcon className="h-6 w-6 text-secondary" />,
      rotate: true,
    },
    {
      label: "Portfolio",
      icon: <ArchiveBoxIcon className="h-6 w-6 text-secondary" />,
      rotate: false,
    },
    {
      label: "About Us",
      icon: <InformationCircleIcon className="h-6 w-6 text-secondary" />,
      rotate: false,
    },
    {
      label: "Blog",
      icon: <DocumentTextIcon className="h-6 w-6 text-secondary" />,
      rotate: false,
    },
  ];

  useEffect(() => {
    const handleSubMenu = () => {
      setIsExpanded(!isExpanded);
    };

    const subMenu = document.querySelectorAll(".sub-menu");

    subMenu[1].addEventListener("click", handleSubMenu);
    return () => {
      subMenu[1].removeEventListener("click", handleSubMenu);
    };
  }, [isExpanded]);

  return (
    <div
      className={`fixed lg:hidden inset-x-0 sm:mt-5.5 bottom-0 border-t border-secondary/40 bg-primary backdrop-blur-md text-white transition-all ease-in-out duration-200
        ${isOpen ? "inset-y-26" : "inset-y-full"}`}
    >
      <div className="wrapper flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4 overflow-x-auto hide-scrollbar">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div className="sub-menu flex items-center justify-between w-full bg-secondary/5 px-4 py-3 rounded-lg border border-secondary/5 active:border-secondary/20">
                <div className="flex items-center gap-6">
                  {item.icon}
                  <p className="font-inter font-semibold text-lg text-secondary">
                    {item.label}
                  </p>
                </div>
                <ChevronRightIcon
                  className={`size-5 text-secondary/60 transition-all duration-200 ${
                    item.label === "Services" && isExpanded
                      ? "-rotate-90"
                      : item.rotate
                      ? "rotate-90"
                      : ""
                  }`}
                />
              </div>
              {item.label === "Services" && <SubMenu isExpanded={isExpanded} />}
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-4">
          <div className="mb-6 border-t border-secondary/20" />
          <button className="flex items-center justify-center gap-3 w-full px-4 py-1.5 bg-radial-[at_-50%_-75%] drop-shadow-accent-2xl from-accent-light to-accent font-inter transition-all duration-300 truncate text-white font-semibold rounded-lg">
            <p>Contact Us</p>
            <img src="./images/arrow-top-right.svg" alt="Arrow Top Right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
