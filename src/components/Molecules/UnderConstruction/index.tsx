// Images
import Image from "next/image";
import { underConstruction1 } from "@/img/index";

export const UnderConstruction = () => {
  return (
    <div className="flex-8px">
      <Image
        src={underConstruction1}
        alt="Tools icon"
        className="icon-general"
      />
      <p>Under Construction!</p>
    </div>
  );
};
