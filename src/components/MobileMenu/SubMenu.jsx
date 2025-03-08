import {
  ChevronRightIcon,
  PresentationChartLineIcon,
  CodeBracketSquareIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";

const SubMenu = ({ isExpanded }) => {
  const subMenuItems = [
    {
      label: "S.E.O",
      icon: <PresentationChartLineIcon className="size-6 text-secondary" />,
    },
    {
      label: "Web Development",
      icon: <CodeBracketSquareIcon className="size-6 text-secondary" />,
    },
    {
      label: "Web Design",
      icon: <SwatchIcon className="size-6 text-secondary" />,
    },
  ];

  return (
    <div
      className={`flex flex-col gap-4 ml-12 px-4 overflow-y-hidden
    ${isExpanded ? "h-max mt-4" : "h-0 mt-0"}`}
    >
      {subMenuItems.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex items-center gap-2">
              <div className="w-max p-2 px-3 bg-secondary/5 rounded-3xl border border-secondary/5">
                {item.icon}
              </div>
              <div className="flex items-center justify-between w-full min-h-10 px-4 bg-secondary/5 rounded-3xl border border-secondary/5">
                <p className="font-inter font-semibold text-secondary truncate">
                  {item.label}
                </p>
                <ChevronRightIcon className="size-4 text-secondary/60" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubMenu;
