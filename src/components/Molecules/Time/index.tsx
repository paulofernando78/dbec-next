// Component
import Image from "next/image";

// Image
import { timeIcon } from "@/img/index";

// TypeScript
import "./type"

export const Time = ({ time }: TimeProps) => {
  return (
    <div className="flex-8px-center-wrap">
      <Image src={timeIcon} alt="Time icon" className="icon-general" />
      <p>{time}</p>
    </div>
  );
};
