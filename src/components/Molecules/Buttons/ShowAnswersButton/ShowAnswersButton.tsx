// Components
import { Button } from "@/components/Atoms/Button";

// Images
import { eyeIcon } from "@/img/index";

export const ShowAnswersButton = ({ onClick }: { onClick: () => void }) => {
  return <Button imgSrc={eyeIcon} imgAlt="Search icon" onClick={onClick} />;
};
