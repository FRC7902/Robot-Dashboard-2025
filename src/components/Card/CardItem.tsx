import { IconType } from "react-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const splitTitle = (title: string) => {
  const words = title.split(" ");

  if (words.length === 1) return title;

  if (words.length === 2) {
    return (
      <>
        <span>{words[0]}</span>
        <br />
        <span>{words[1]}</span>
      </>
    );
  }

  let firstLine = words[0];
  let secondLine = words.slice(1).join(" ");

  for (let i = 1; i < words.length - 1; i++) {
    const currentFirstLine = words.slice(0, i + 1).join(" ");
    const currentSecondLine = words.slice(i + 1).join(" ");

    if (currentFirstLine.length >= currentSecondLine.length) {
      firstLine = currentFirstLine;
      secondLine = currentSecondLine;
      break;
    }
  }

  return (
    <>
      <span>{firstLine}</span>
      <br />
      <span>{secondLine}</span>
    </>
  );
};

type CardItemProps = {
  title: string;
  icon: IconType;
  children: React.ReactNode;
  previewInfo?: string[];
};

const CardItem = ({
  title,
  icon: Icon,
  previewInfo,
  children,
}: CardItemProps) => {

  const [hovered, setHovered] = useState(false);
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
      className="shadow-lg rounded-lg overflow-hidden p-4 cursor-pointer flex justify-center items-center bg-radial-[at_0%_25%] from-[#2d4680] to-[#060f23] to-100%"
      initial={{ width: 200, height: 200 }}
      animate={{ width: hovered ? 300 : 200, height: hovered ? 300 : 200 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => {
        setContentVisible(false); // Hide content during animation
        setHovered(true);
      }}
      onMouseLeave={() => {
        setContentVisible(false); // Hide content during animation
        setHovered(false);
      }}
      onAnimationComplete={() => setContentVisible(true)} // Show new content when animation ends
    >
      {/* Content with fade-in animation */}
      <motion.div
        key={hovered ? "expanded" : "compact"} // Ensures new content is treated as different elements
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-center"
      >
        {hovered ? (
          <div className="p-4">
            <h3 className="text-xl font-bold">Expanded View</h3>
            <p className="text-gray-600">This is the larger content that appears when hovering.</p>
          </div>
        ) : (
          <div className="p-4">
            <h3 className="text-lg font-semibold">Compact View</h3>
            <p className="text-gray-500">Hover to expand</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CardItem;
