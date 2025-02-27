// Components
import { Button } from "@/components/Atoms/Button";

// Images
import { resetIcon } from "@/img/index";

export const ResetAnswersButton = ({ onClick }: { onClick: () => void }) => {
  return <Button imgSrc={resetIcon } imgAlt="Search icon" onClick={onClick} />;
};
