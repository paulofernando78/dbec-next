"use client"
import  { useState } from 'react';
import style from './Button.module.css';

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
      <button className={style.pushable} onClick={handleClick}>
        <span className={style.shadow}></span>
        <span className={style.edge}></span>
        <span className={style.front}>{label}</span>
      </button>
      {toggle && show && <p>...</p>}
    </>
  );
};
