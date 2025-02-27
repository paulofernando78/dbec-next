// Components
import { Button } from "@/components/Atoms/Button";

// Images
import { closeIcon } from "@/img/index";

export const CloseButton = ({onClick}: {onClick: () => void}) => {
  return <Button imgSrc={closeIcon} imgAlt="Search icon" onClick={onClick}/>;
};
