import { IconType } from "react-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import SplitTitle from "../../utils/SplitTitle";
import { cn } from "@udecode/cn";

type ExpandableCardItemProps = {
  title: string;
  icon: IconType;
  children: React.ReactNode;
  previewInfo?: string[];
};

const ExpandableCardItem = ({
  title,
  icon: Icon,
  previewInfo,
  children,
}: ExpandableCardItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  return (
    // <div className="card-item group rounded-lg bg-radial-[at_0%_25%] from-[#2d4680] to-[#060f23] to-100% p-4 w-fit text-white">
    //   <div className="flex flex-col gap-y-4 group-hover:hidden">

    //     {/* Header */}
    //     <div className="flex flex-row items-center gap-x-12">
    //       <h3 className="text-xl">{splitTitle(title)}</h3>
    //       <Icon className="text-2xl" />
    //     </div>

    //     <div className="flex flex-row justify-between text-cyan-500 text-sm">
    //       {previewInfo?.map((item, index) => <div key={index}>{item}</div>)}
    //     </div>
    //   </div>

    //   <div className="hidden group-hover:block">{children}</div>
    // </div>

    <motion.div
      className={cn(["flex overflow-hidden rounded-lg bg-radial-[at_0%_25%] from-[#2d4680] to-[#060f23] to-100% p-6 text-white shadow-lg",
        !expanded && "cursor-pointer"
      ])}
      initial={{ width: 300, height: 200 }}
      animate={{ width: expanded ? 450 : 300, height: expanded ? 500 : 200 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      onMouseUp={() => {
        if (expanded) return;
        setContentVisible(false); // Hide content during animation
        setExpanded(true);
      }}
      onMouseLeave={() => {
        if (!expanded) return;
        setContentVisible(false); // Hide content during animation
        setExpanded(false);
      }}
      onAnimationComplete={() => setContentVisible(true)} // Show new content when animation ends
    >
      {/* Content with fade-in animation */}
      <motion.div
        key={expanded ? "expanded" : "compact"} // Ensures new content is treated as different elements
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="size-full"
      >
        {expanded ? (
          <div>{children}</div>
        ) : (
          <div className="flex size-full flex-col gap-y-4">
            {/* Header */}
            <div className="flex w-full flex-row items-center justify-between">
              <h3 className="text-xl">
                <SplitTitle title={title} />
              </h3>
              <Icon className="text-2xl" />
            </div>

            <div className="flex flex-row justify-between text-sm text-cyan-500">
              {previewInfo?.map((item, index) => <div key={index}>{item}</div>)}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ExpandableCardItem;
