"use client"

// Components
import { Button } from "@/components/Atoms/Button";

// Images
import { btnIcon } from "@/img/index";

export const HeaderMenuButton = ({ toggle, isActive }: { toggle: () => void, isActive: boolean }) => {
  return <Button onClick={toggle} imgSrc={btnIcon} imgAlt="Button icon" isActive={isActive}/>;
};
