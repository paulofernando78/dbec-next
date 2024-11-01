import { ReactNode } from "react";
import Image from "next/image";

import { exclamationIcon } from "@/img/index";

interface ExclamationIconSignProps {
  children: ReactNode;
}

export const ExclamationIcon = ({ children }: ExclamationIconSignProps) => {
  return (
    <>
      <div className="line-break">
        <div className="flex-8px-center-wrap">
          <Image
            src={exclamationIcon}
            alt="Exclamation icon"
            className="icon-general"
          />
          <p className="bold">Notes</p>
        </div>
        <span className="p-font">{children}</span>
      </div>
    </>
  );
};
