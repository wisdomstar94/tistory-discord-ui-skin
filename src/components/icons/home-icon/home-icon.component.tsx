import { House } from "lucide-react";
import { IHomeIcon } from "./home-icon.type";
import { cn } from "@/utils/cn";

export function HomeIcon(props: IHomeIcon.Props) {
  return (
    <div
      className={cn(
        "bg-fuchsia-400 p-0.5 rounded-full w-4 h-4 flex items-center justify-center relative",
        props.className
      )}
    >
      <House className="w-2.5 h-2.5 text-white fill-white" />
    </div>
  );
}
