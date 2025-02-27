"use client";

// Components
import { Button } from "@/components/Atoms/Button";

// Images
import { btnIcon } from "@/img/index";

export const HeaderMenuButton = ({
  toggle,
  isActive,
}: {
  toggle: () => void;
  isActive: boolean;
}) => {
  return (
    <Button
      imgSrc={btnIcon}
      imgAlt="Button icon"
      onClick={toggle}
      isActive={isActive}
    />
  );
};
