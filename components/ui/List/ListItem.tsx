import { ReactNode } from "react";
import { IconBase } from "react-icons/lib";
import cn from "classnames";

const colorToClassNames = {
  green: "bg-green-100 fill-green-400",
  blue: "bg-blue-100 fill-blue-400",
  red: "bg-red-100 fill-red-400",
  orange: "bg-orange-100 fill-orange-400",
  purple: "bg-purple-100 fill-purple-400",
} as const;

interface ListItemProps {
  Icon: typeof IconBase;
  color: "green" | "blue" | "red" | "orange" | "purple";
  text: string;
  description: string;
  rightSlot?: ReactNode;
}

export function ListItem({
  Icon,
  color,
  text,
  description,
  rightSlot,
}: ListItemProps) {
  return (
    <li className="flex py-4 mx-4 border-b border-gray-100 ">
      <div className="mr-4">
        <Icon
          className={cn("w-10 h-10 p-2 rounded-2xl", colorToClassNames[color])}
        />
      </div>
      <div className="flex items-center justify-between w-full min-w-0">
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-sm font-semibold truncate">{text}</span>
          <span className="text-sm text-gray-500 truncate">{description}</span>
        </div>
        {rightSlot && <div className="flex-shrink-0 ml-2">{rightSlot}</div>}
      </div>
    </li>
  );
}
