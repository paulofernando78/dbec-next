// Components
import { Button } from "@/components/Atoms/Button";

// Images
import { checkIcon } from "@/img/index";

export const CheckAnswersButton = ({ onClick }: { onClick: () => void }) => {
  return <Button imgSrc={checkIcon} imgAlt="Search icon" onClick={onClick} />;
};
