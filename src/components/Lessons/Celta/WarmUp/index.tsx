import { BoardCard } from "@/components/Cards/BoardCard";

interface WarmUpProps {
  prompt: string;
}

export const WarmUp = ({ prompt }: WarmUpProps) => {
  return (
    <>
      <BoardCard label="Warm-up" bgColor="black" textColor="white" time="5'">
        <p className="line-break">{prompt}</p>
      </BoardCard>
    </>
  );
};
