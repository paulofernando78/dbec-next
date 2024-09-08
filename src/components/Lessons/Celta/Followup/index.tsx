import { BoardCard } from "@/components/Cards/BoardCard";

interface Questions {
  question: string;
}

interface FollowupProps {
  questions: Questions[];
}

export const Followup = ({ questions }: FollowupProps) => {
  return (
    <>
      <BoardCard
        label="Follow-up"
        bgColor="black"
        textColor="white"
        time="5'"
      >
        <div>
          {questions.map((question, questionIndex) => (
            <p key={questionIndex}>
              {questionIndex + 1}. {question.question}
            </p>
          ))}
        </div>
      </BoardCard>
    </>
  );
};
