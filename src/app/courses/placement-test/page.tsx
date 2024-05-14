import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import styles from "./PlacementTest.module.css";

interface PlacementTestProps {
  levels: string[]
  taskNumber: string
  taskType: string
  languageFocus: string
  examples: string
}

export default function PlacementTest({levels, taskNumber, taskType, languageFocus, examples}: PlacementTestProps) {
  return (
    <>
      <Whiteboard title="Courses" subtitle="Placement Test" />
      {levels.map((level, index) => (
      <div className="line-break" key={index}>
        <div className={styles["main-container"]}>
            <p className={styles["main-container-level"]}>{level}</p>
          <div>
          </div>
          <div className={styles["inner-container"]}>
            <div>
              <p className={styles["bold"]}>TASK #</p>
              {taskNumber}
            </div>
            <div>
              <p className={styles["bold"]}>TASK TYPE</p>
              {taskType}
            </div>
            <div>
              <p className={styles["bold"]}>LANGUAGE FOCUS</p>
              <p>{languageFocus}</p>
            </div>
            <div>
              <p className={styles["bold"]}>EXAMPLES</p>
              <p>{examples}</p>
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  );
}
