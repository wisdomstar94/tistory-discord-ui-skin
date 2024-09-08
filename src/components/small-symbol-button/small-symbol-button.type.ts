import { ReactNode } from "react";

export declare namespace ISmallSymbolButton {
  export type Props = {
    id: string;
    href: string;
    className?: string;
    aClassName?: string;
    icon: ReactNode;
    hoverTitle: ReactNode;
    isActive?: boolean;
    isRoundedActive?: boolean;
    isHoverMinimumActive?: boolean;
  };
}
