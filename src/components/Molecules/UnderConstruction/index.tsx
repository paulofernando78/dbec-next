// Images
import Image from "next/image";
import { tools } from "@/img/index";
import { Whiteboard } from "../Whiteboard";

import { UnderConstructionProps } from "./types";

export const UnderConstruction: React.FC<UnderConstructionProps> = ({
  title,
  subtitle,
  descriptions,
}) => {
  return (
    <>
      <Whiteboard
        title={title}
        subtitle={subtitle}
        descriptions={descriptions}
      />
      <div className="flex-8px">
        <Image
          src={tools}
          alt="Tools icnderConon"
          className="icon-general"
        />
        <p>Under Construction!</p>
      </div>
    </>
  );
};
