"use client";
import { useState } from "react";
import Image from "next/image";

// CSS
import styles from "./styles.module.css"

// Images Icons
import plusIcon from "@/img/icon/plus.png"
import minusIcon from "@/img/icon/minus.png"
import { Card } from "../Card/Card";

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
          <Image src={isOpen ? minusIcon : plusIcon} alt="Icons" className={styles["plus-minus-icons"]}/>
            <p className={`${"inline-block user-select-none margin-left user-select-none"} ${styles["label"]}`}>{label}</p>
            <p className={`${"inline-block user-select-none margin-left user-select-none"} ${styles["label"]}`}><b>{labelBold}</b></p>
          </span>
          <span>{isOpen && <p className="block margin-top">{children}</p>}</span>
        </Card>
    </>
  );
};
