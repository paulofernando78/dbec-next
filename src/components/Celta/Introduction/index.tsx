import styles from "../../Cards/BoardCard/styles.module.css";
import SwiperFraction, {
  SwiperFractionData,
} from "@/components/Swiper/Fraction";

export interface DiscussionQuestionData {
  questions: {
    question?: string;
    component?: (props: any) => JSX.Element;
    componentProps?: any;
  }[];
}

export interface IntroductionData {
  prompt: string;
  swiperFraction?: SwiperFractionData[];
  discussionQuestions?: DiscussionQuestionData[];
}

interface IntroductionProps {
  introduction: IntroductionData;
}

export const Introduction = ({ introduction }: IntroductionProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Introduction</span>{" "}
            <span className="p-size-smaller">(Contextualization)</span>
          </p>
          <p className="p-size-smaller">5'</p>
        </div>
      </div>
      <div className={`line-break ${styles["children"]}`}>
        
        {/* prompt */}
        <div className="line-break">
          <p className={styles[""]}>
            {introduction.prompt}
          </p>
          {/* swiperFraction */}
          {introduction.swiperFraction && (
            <SwiperFraction images={introduction.swiperFraction} />
          )}

          {/* dicussionQuestions */}
          <div>
            {introduction.discussionQuestions?.map(
              (discussionQuestion, discussionQuestionIndex) => (
                <div key={discussionQuestionIndex}>
                  {discussionQuestion.questions.map(
                    (question, questionIndex) => (
                      <span key={questionIndex}>
                        {/* question.component */}
                        {question.component && (
                          <span className="margin-inline-3px">
                            {question.component(question.componentProps)}
                          </span>
                        )}
                        {/* question */}
                        {question.question && (
                          <div className="display-inline">
                            <span className="p-font display-inline margin-right">
                              {/* ${discussionQuestionIndex + 1}. */}
                              {` ${question.question}`}
                            </span>
                          </div>
                        )}
                      </span>
                    )
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
