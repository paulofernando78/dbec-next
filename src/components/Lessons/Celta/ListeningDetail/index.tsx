import { BoardCard } from "@/components/Cards/BoardCard";

interface Questions {
  question: string;
}

interface ListeningDetailProps {
  questions: Questions[];
}

export const ListeningDetail = ({ questions }: ListeningDetailProps) => {
  return (
    <>
      <BoardCard
        label="Listening for detail"
        smallerLabel="(Specific)"
        bgColor="black"
        textColor="white"
        time="10'"
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
