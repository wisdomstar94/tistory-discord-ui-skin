import { ReactNode } from "react";

export declare namespace ISmallDatetimeInline {
  export type Props = {
    dataTitle?: string;
    replacer?: {
      yearReplacer: string;
      monthReplacer: string;
      dayReplacer: string;
      hourReplacer: string;
      minuteReplacer: string;
    };
    children?: ReactNode;
    datetimeFullReplacer?: string;
  };
}
