"use client";
import { useState } from "react";
import Image from "next/image";

// CSS
import styles from "./styles.module.css";

// Images Icons
import plusIcon from "@/img/icon/plus.png";
import minusIcon from "@/img/icon/minus.png";
import { Card } from "../Cards/Card";

interface CollapsibleProps {
  label?: string;
  labelBold?: string;
  children: React.ReactElement;
}

export const Collapsible = ({
  label,
  labelBold,
  children,
}: CollapsibleProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Card>
        <span onClick={toggleCollapse} className="cursor-pointer user-select-none">
          <span className={`bold ${styles["plus-minus-position"]}`}>
            {isOpen ? "-" : "+"}{" "}
          </span>
            <b>
              {/* <Image
                src={isOpen ? minusIcon : plusIcon}
                alt="Icons"
                className={` ${"margin-right"} ${styles["plus-minus-icons"]}`}
              /> */}
              {labelBold}
            </b>
          </span>
        {isOpen && <span className="block margin-top">{children}</span>}
      </Card>
    </>
  );
};
