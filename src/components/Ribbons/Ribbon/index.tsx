import styles from "../styles.module.css";

interface RibbonProps {
  label: string;
  bgColor?: string;
  textColor?: string;
}

export const Ribbon = ({ label, bgColor, textColor }: RibbonProps) => {
  return (
    <div
      className={styles["ribbon"]}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <p className="bold">{label}</p>
    </div>
  );
};
