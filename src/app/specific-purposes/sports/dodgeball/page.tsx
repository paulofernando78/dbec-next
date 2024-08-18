import { BoardCard } from "@/components/Cards/BoardCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import React from "react";

export default function page() {
  return (
    <>
      <Whiteboard
        title="Specific-Purposes"
        subtitle="Sports"
        descriptions={["Dodgeball"]}
      />
      <div className="line-break">
        <p>
          Dodgeball is a popular team sport where players try to eliminate
          opponents by hitting them with a ball while avoiding being hit
          themselves. Here’s a breakdown of the basic rules:
        </p>
        <BoardCard label="1. Teams and Players:" bgColor="black" textColor="white">
          <p>• The game typically involves two teams, each with an equal number of players (usually 6-10 players per team).</p>
          <p>• The game is played on a rectangular court divided by a center line.</p>
        </BoardCard>
        <BoardCard label="2. Eliminating Opponents:" bgColor="black" textColor="white">
          <p>• A player is eliminated if they are hit by a ball thrown by an opponent and the ball hits them before touching the ground.</p>
          <p>• A player is also eliminated if an opponent catches a ball they have thrown before it touches the ground. In some variations, when a player catches a ball, a previously eliminated teammate can re-enter the game.</p>
          <p>• A player can also be eliminated if they step out of bounds or cross the center line.</p>
        </BoardCard>
        <BoardCard label="3. Avoiding Elimination:" bgColor="black" textColor="white">
        <p>• Players can dodge the ball by moving out of its path, catching it, or using a ball they hold to deflect incoming throws.</p>
        </BoardCard>
        <BoardCard label="4. Re-Entry Rules:" bgColor="black" textColor="white">
        <p>• In some versions of dodgeball, if a player catches a ball, a teammate who has been eliminated can re-enter the game.</p>
        </BoardCard>
        <BoardCard label="5. Winning the Game:" bgColor="black" textColor="white">
        <p>• A team wins when all the players on the opposing team are eliminated.</p>
        <p>• If the time limit expires and both teams still have players on the court, the team with the most players remaining wins.</p>
        </BoardCard>
        <BoardCard label="6. Court:" bgColor="black" textColor="white">
        <p>• The court is usually divided into two halves, with a center line that players cannot cross.</p>
        <p>• The dimensions of the court can vary depending on the number of players and the space available.</p>
        </BoardCard>
        <BoardCard label="7. Balls:" bgColor="black" textColor="white">
        <p>• Dodgeball typically uses multiple balls, often 3 to 6, depending on the number of players and the ruleset in use.</p>
        </BoardCard>
        <BoardCard label="8. Safety Rules:" bgColor="black" textColor="white">
        <p>• Headshots are often discouraged or may lead to penalties, depending on the specific rules in place.</p>
        <p>• Players must be aware of their surroundings to avoid collisions and injuries.</p>
        </BoardCard>
      </div>
    </>
  );
}
