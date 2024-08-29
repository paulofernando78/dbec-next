import { Whiteboard } from "@/components/Whiteboard";
import styles from "./PlacementTest.module.css";

const defaultLevels: Level[] = [
  {
    level: "Beginner (A1)",
    bgColor: "#FB923C",
    tasks: [
      {
        taskNumber: "1",
        taskType: "Greetings, \nIntroductions",
        languageFocus:
          "• Simple present of be\n• Subject pronouns \n• Possessive adjectives",
        examples:
          "• Hello. How are you?\n• What's your name?\n• Where are you from?",
      },
      {
        taskNumber: "2",
        taskType: "Talk about yourself",
        languageFocus: "• Simple Present\n• Present continuous",
        examples:
          "• Tell me a little about yourself.\n• Why are you studying English?\n• What's your schedule like?\n• Do you have a job?\n• Do you study?",
      },
      {
        taskNumber: "3",
        taskType: "Talk about your free time",
        languageFocus: "• Simple present\n• Can for ability",
        examples:
          "• What do you do in your free time?\n• Do you like sports?\n• Can you play tennis (volleyball/soccer, etc.)",
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
        examples:
          "• Do you like movies (TV, music, etc.)\n• What kinds of movies (TV shows, music, etc.) do you like?\n• What's your favorite movie (TV show/type of music, etc.)?",
      },
      {
        taskNumber: "5",
        taskType: "Talk about the past",
        languageFocus: "• Simple past\n•Past be",
        examples:
          "• Where did you grow up?\n• Did you study English in elementary school (middle school/high school)?\n• What other languages did you study?\n• What was your favorite class?",
      },
      {
        taskNumber: "6",
        taskType: "Talk about plans",
        languageFocus: "Future with present continuous and be going to",
        examples:
          "• What are you doing later today?\n• Are you doing anything special tonight?\n• What are you going to do this weekend?",
      },
    ],
  },
  {
    level: "Pre-Intermediate (A2-B1)",
    bgColor: "#1F8EEB",
    tasks: [
      {
        taskNumber: "7",
        taskType: "Talk about foods",
        languageFocus: "• Simple past vs. present perfect",
        examples:
          "• Have you ever eaten Thai (Vietnamese/ Mexican, etc.) food?\n• Where did you eat it?\n• How did you like it?\n• What kinds of unusual foods have you eaten?",
      },
      {
        taskNumber: "8",
        taskType: "Talk about your home",
        languageFocus: "• Descriptive adjectives\n• Comparisons",
        examples:
          "• Do you live in a house or an apartment?\n• What is it like?\n• Compare your home with someone else’s home.",
      },
      {
        taskNumber: "9",
        taskType: "Give advice",
        languageFocus: "• Present modals",
        examples:
          "• What advice would you give to tourists visiting your country/city?\n• What do they need to do to be prepared?\n• What places should they visit?",
      },
    ],
  },
  {
    level: "Intermediate (B1)",
    bgColor: "#82C122",
    tasks: [
      {
        taskNumber: "10",
        taskType: "Describe the past/tell a story",
        languageFocus: "• Simple past\n• Past continuous",
        examples:
          "• Describe a difficult event in your life.\n• What happened?\n• What were you doing at the time?",
      },
      {
        taskNumber: "11",
        taskType: "Talk about learning preferences",
        languageFocus: "• Would rather and would prefer",
        examples:
          "• If you could study anything you wanted, what would you study?\n• Would you rather study in the day or at night?\n• Would you prefer to take an art class or a photography class?",
      },
      {
        taskNumber: "12",
        taskType: "Speculate about the future",
        languageFocus: "• Future tenses",
        examples:
          "• What will you be doing a year from now?\n• How do you think it will be different then?\n• Will you have finished your studies?",
      },
    ],
  },
  {
    level: "Upper-Intermediate (B2-C1)",
    bgColor: "#1F8EEB",
    tasks: [
      {
        taskNumber: "13",
        taskType: "Compare situations",
        languageFocus: "• Verb tenses (present, past, future)\n• Comparisons",
        examples:
          "• Compare your life today with your life a few years ago.\n• How has it changed?\n• How do you think it will be different in the future?",
      },
      {
        taskNumber: "14",
        taskType: "Talk about problems and solutions",
        languageFocus: "• Superlatives\n• Present unreal conditional",
        examples:
          "• What is the biggest problem in the world (your country/your city, etc.) today?\n• Why is that the most important problem?\n• If you were responsible, how would you fix it?",
      },
      {
        taskNumber: "15",
        taskType: "Talk about social behavior",
        languageFocus: "• Infinitives",
        examples:
          "• What does it mean to be polite in your culture?\n• Give examples of polite/impolite behavior.\n• Is it OK to ask someone’s age (interrupt someone/compliment a person, etc.)?",
      },
    ],
  },
  {
    level: "Advanced (C1)",
    bgColor: "#1F8EEB",
    tasks: [
      {
        taskNumber: "16",
        taskType: "Talk about superstitions and beliefs",
        languageFocus: "• Relative clauses\n• Gerunds",
        examples:
          "• Are you superstitious?\n• Do you believe that certain things cause good or bad luck? Why or why not?\n• What things do people avoid doing because of their beliefs?",
      },
      {
        taskNumber: "17",
        taskType: "Talk about your upbringing",
        languageFocus: "• Passive forms",
        examples:
          "• What have you been told about your childhood?\n• Were you raised by relatives other than your parents?\n• Were you encouraged to be independent?",
      },
    ],
  },
];

interface PlacementTestProps2 {
  levels: any[];
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

export default function PlacementTest({ levels }: any) {
  levels = defaultLevels;
  return (
    <>
      <Whiteboard title="Courses" subtitle="Placement Test" />
      {levels.map((level: any, levelIndex: any) => (
        <div className={styles["main-container"]} key={levelIndex}>
          <p
            className={styles["main-container-level"]}
            style={{ backgroundColor: level.bgColor }}
          >
            {level.level}
          </p>
          {level.tasks.map((task: any, taskIndex: any) => (
            <div className={styles["inner-container"]} key={taskIndex}>
              <div className={styles["inner-container-text"]}>
                <p className={styles["bold"]}>TASK # {task.taskNumber}</p>
              </div>
              <div className={styles["inner-container-text"]}>
                <p className={styles["bold"]}>TASK TYPE</p>
                <p className="white-space-pre-wrap">{task.taskType}</p>
              </div>
              <div className={styles["inner-container-text"]}>
                <p className={styles["bold"]}>LANGUAGE FOCUS</p>
                <p className="white-space-pre-wrap">{task.languageFocus}</p>
              </div>
              <div className={styles["inner-container-text"]}>
                <p className={styles["bold"]}>EXAMPLES</p>
                <p className="white-space-pre-wrap">{task.examples}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
