import { ReactNode } from "react";

export declare namespace IModalTemplate {
  export type Props = {
    id: string;
    title: ReactNode;
    description: ReactNode;
    cancelButtonText?: string;
    cancelButtonOnClick?: string;
    okButtonText?: string;
    okButtonOnClick: string;
  };
}
