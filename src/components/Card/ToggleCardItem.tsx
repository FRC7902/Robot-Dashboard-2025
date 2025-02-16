import { IconType } from "react-icons";
import SplitTitle from "../../utils/SplitTitle";
import { cn } from "@udecode/cn";

type ToggleCardItemProps = {
  title: string;
  description: string;
  icon: IconType;
  isEnabled: boolean;
  onToggle: () => void;
};

const ToggleCardItem = ({
  title,
  description,
  icon: Icon,
  isEnabled,
  onToggle,
}: ToggleCardItemProps) => {
  return (
    <div
      onClick={onToggle}
      className={cn([
        "flex h-[200px] w-[300px] cursor-pointer flex-col overflow-hidden rounded-lg bg-radial-[at_0%_25%] to-100% p-6 text-white shadow-lg gap-y-4 transition-colors",
        !isEnabled
          ? "from-[#2d4680] to-[#060f23]"
          : "from-[#2d8046] to-[#0f2306]",
      ])}
    >
      <div className="flex w-full flex-row items-center justify-between">
        <h3 className="text-xl">
          <SplitTitle title={title} />
        </h3>
        <Icon className="text-2xl" />
      </div>
      <div className="flex flex-row justify-between text-sm text-cyan-500">
        {description}
      </div>
    </div>
  );
};

export default ToggleCardItem;
