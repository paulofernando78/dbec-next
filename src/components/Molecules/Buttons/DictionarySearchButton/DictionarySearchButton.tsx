// Components
import { Button } from "@/components/Atoms/Button";
import { useState } from "react";

// Images
import { searchIcon } from "@/img/index";

export const DictionarySearchButton = () => {

  return (
    <Button
      imgSrc={searchIcon}
      imgAlt="Search icon"
    />
  );
};
