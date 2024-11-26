// Images
import Image from "next/image";
import { underConstruction1 } from "@/img/index";
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
          src={underConstruction1}
          alt="Tools icon"
          className="icon-general"
        />
        <p>Under Construction!</p>
      </div>
    </>
  );
};
