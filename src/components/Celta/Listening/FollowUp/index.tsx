import styles from "../../../Cards/BoardCard/styles.module.css";

export interface FollowupQuestionData {
  enQuestion?: string;
  ptQuestion?: string;
}

interface FollowUpProps {
followupQuestions: FollowupQuestionData[]
}

export const FollowUp = ({ followupQuestions }: FollowUpProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Follow-up</span>
          </p>
          <p className="p-size-smaller">10'</p>
        </div>
      </div>
      <div className={styles["children"]}>
        <div>
          {followupQuestions.map((followupQuestion, followQuestionIndex) => (
            <p key={followQuestionIndex}>
              {followQuestionIndex + 1}. {followupQuestion.enQuestion}{" "}
              <span className="portuguese">{followupQuestion.ptQuestion}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
