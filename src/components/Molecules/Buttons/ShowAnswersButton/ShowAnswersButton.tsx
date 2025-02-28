// Components
import { Button } from "@/components/Atoms/Button";

// Images
import { eyeIcon, eyeIcon2 } from "@/img/index";

interface ShowAnswersButtonProps {
  onClick: () => void;
  showAnswer: boolean;
}

export const ShowAnswersButton = ({ onClick, showAnswer }: ShowAnswersButtonProps) => {
  return (
    <Button 
      imgSrc={showAnswer ? eyeIcon2 : eyeIcon} 
      imgAlt={showAnswer ? "Hide answers icon" : "Show answers icon"} 
      onClick={onClick} 
    />
  );
};
