"use client"
import  { useState } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  onClick: () => void
  toggle?: boolean
}

export const Button = ({ label, onClick, toggle }: ButtonProps) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (toggle) {
      setShow(!show);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button className={styles.pushable} onClick={handleClick}>
        <span className={styles.shadow}></span>
        <span className={styles.edge}></span>
        <span className={styles.front}>{label}</span>
      </button>
      {toggle && show && <p>...</p>}
    </>
  );
};
