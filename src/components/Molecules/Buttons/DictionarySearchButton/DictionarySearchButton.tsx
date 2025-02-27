// Components
import { Button } from "@/components/Atoms/Button";

// Images
import { searchIcon } from "@/img/index";

export const DictionarySearchButton = () => {
  return <Button toggle imgSrc={searchIcon} imgAlt="Search icon" isActive={true}/>;
};
