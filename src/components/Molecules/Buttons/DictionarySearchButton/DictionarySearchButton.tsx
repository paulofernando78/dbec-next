// Components
import { Button } from "@/components/Atoms/Button";

// Images
import { searchIcon } from "@/img/index";

export const DictionarySearchButton = ({onClick}: {onClick: () => void}) => {
  return <Button imgSrc={searchIcon} imgAlt="Search icon" onClick={onClick}/>;
};
