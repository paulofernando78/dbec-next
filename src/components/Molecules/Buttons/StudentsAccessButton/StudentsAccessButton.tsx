// Components
import { Button } from "@/components/Atoms/Button";

// Hooks
import { useState } from "react";

// Images
import { studentsAccessIcon } from "@/img/index";

// Add onClick prop to the component
export const StudentsAccessButton = ({ onClick }: { onClick?: () => void }) => {
  return <Button imgSrc={studentsAccessIcon} imgAlt="Search icon" onClick={onClick} />;
};
