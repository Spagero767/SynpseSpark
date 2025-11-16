import { GameCard, type Game } from "@/components/game-card";
import { BrainCircuit, Calculator, MemoryStick, Puzzle, Shapes } from "lucide-react";

const games: Game[] = [
  {
    title: "Quick Math",
    description: "Solve math problems against the clock.",
    icon: <Calculator className="w-8 h-8" />,
    colorClass: "text-chart-1",
  },
  {
    title: "Pattern Match",
    description: "Identify the next shape in the sequence.",
    icon: <Shapes className="w-8 h-8" />,
    colorClass: "text-chart-2",
  },
  {
    title: "Memory Flow",
    description: "Memorize and repeat a sequence of items.",
    icon: <MemoryStick className="w-8 h-8" />,
    colorClass: "text-chart-3",
  },
  {
    title: "Logic Puzzle",
    description: "Deduce the solution with given clues.",
    icon: <Puzzle className="w-8 h-8" />,
    colorClass: "text-chart-4",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-card p-3">
         <BrainCircuit className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Today's Challenges</h1>
          <p className="text-muted-foreground">
            Sharpen your mind with these daily brain teasers.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.title} game={game} />
        ))}
      </div>
    </main>
  );
}
