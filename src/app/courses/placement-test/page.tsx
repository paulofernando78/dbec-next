import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import styles from "./PlacementTest.module.css";

const defaultLevels: Level[] = [
  {
    level: "Beginner (A1)",
    bgColor: "#FB923C",
    tasks: [
      {
        taskNumber: "1",
        taskType: "Greetings, \nIntroductions",
        languageFocus: "• Simple present of be\n• Subject pronouns \n• Possessive adjectives",
        examples: "• Hello. How are you?\n• What's your name?\n• Where are you from?",
      },
      {
        taskNumber: "2",
        taskType: "Talk about yourself",
        languageFocus: "• Simple Present\n• Present continuous",
        examples: "• Tell me a little about yourself.\n• Why are you studying English?\n• What's your schedule like?\n• Do you have a job?\n• Do you study?",
      },
      {
        taskNumber: "3",
        taskType: "Talk about your free time",
        languageFocus: "• Simple present\n• Can for ability",
        examples: "• What do you do in your free time?\n• Do you like sports?\n• Can you play tennis (volleyball/soccer, etc.)",
      },
    ],
  },
  {
    level: "Elementary (A2)",
    bgColor: "red",
    tasks: [
      {
        taskNumber: "4",
        taskType: "Talk about likes and dislikes",
        languageFocus: "Simple present",
        examples: "• Do you like movies (TV, music, etc.)\n• What kinds of movies (TV shows, music, etc.) do you like?\n• What's your favorite movie (TV show/type of music, etc.)?",
      },
      {
        taskNumber: "5",
        taskType: "Talk about the past",
        languageFocus: "• Simple past\n•Past be",
        examples: "• Where did you grow up?\n• Did you study English in elementary school (middle school/high school)?\n• What other languages did you study?\n• What was your favorite class?",
      },
      {
        taskNumber: "6",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
    ],
  },
  {
    level: "Pre-Intermediate (A2-B1)",
    bgColor: "#1F8EEB",
    tasks: [
      {
        taskNumber: "7",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
      {
        taskNumber: "8",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
      {
        taskNumber: "9",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
    ],
  },
  {
    level: "Intermediate (B1)",
    bgColor: "#82C122",
    tasks: [
      {
        taskNumber: "10",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
      {
        taskNumber: "11",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
      {
        taskNumber: "12",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
    ],
  },
  {
    level: "Upper-Intermediate (B2-C1)",
    bgColor: "#1F8EEB",
    tasks: [
      {
        taskNumber: "13",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
      {
        taskNumber: "14",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
      {
        taskNumber: "15",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
    ],
  },
  {
    level: "Advanced (C1)",
    bgColor: "#1F8EEB",
    tasks: [
      {
        taskNumber: "16",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
      {
        taskNumber: "17",
        taskType: "...",
        languageFocus: "...",
        examples: "...",
      },
    ],
  },
];

interface PlacementTestProps {
  levels: Level[];
}

interface Level {
  level: string;
  tasks: Task[];
  bgColor: string;
}

interface Task {
  taskNumber: string;
  taskType: string;
  languageFocus: string;
  examples: string;
}

export default function PlacementTest({
  levels = defaultLevels,
}: PlacementTestProps) {
  return (
    <>
      <Whiteboard title="Courses" subtitle="Placement Test" />
      {levels.map((level, levelIndex) => (
        <div className={styles["main-container"]} key={levelIndex}>
          <p
            className={styles["main-container-level"]}
            style={{ backgroundColor: level.bgColor }}
          >
            {level.level}
          </p>
          {level.tasks.map((task, taskIndex) => (
            <div className={styles["inner-container"]} key={taskIndex}>
              <div className={styles["inner-container-text"]}>
                <p className={styles["bold"]}>TASK # {task.taskNumber}</p>
              </div>
              <div className={styles["inner-container-text"]}>
                <p className={styles["bold"]}>TASK TYPE</p>
                <p className="white-space-pw">{task.taskType}</p>
              </div>
              <div className={styles["inner-container-text"]}>
                <p className={styles["bold"]}>LANGUAGE FOCUS</p>
                <p className="white-space-pw">{task.languageFocus}</p>
              </div>
              <div className={styles["inner-container-text"]}>
                <p className={styles["bold"]}>EXAMPLES</p>
                <p className="white-space-pw">{task.examples}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
