// Components
import { Button } from "@/components/Atoms/Button";

// Images
import { xIcon } from "@/img/index";

export const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return <Button imgSrc={xIcon} imgAlt="Search icon" onClick={onClick} />;
};
