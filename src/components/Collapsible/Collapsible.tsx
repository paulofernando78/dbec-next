"use client";
import { useState } from "react";
import { Card } from "../Card/Card";

import plusIcon from "@/img/icon/plus.png"
import minusIcon from "@/img/icon/minus.png"

interface CollapsibleProps {
  label?: string;
  labelBold?: string;
  children: React.ReactElement;
}

export const Collapsible = ({ label, labelBold, children }: CollapsibleProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Card>
        <span onClick={toggleCollapse} className="cursor-pointer">
        {isOpen ? "-" : "+"}
          {label}
          <b>{labelBold}</b>
        </span>
        <span>{isOpen && <p className="block margin-top">{children}</p>}</span>
      </Card>
    </>
  );
};
