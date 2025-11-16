import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export type Game = {
  title: string;
  description: string;
  icon: ReactNode;
  colorClass: string;
};

export function GameCard({ game }: { game: Game }) {
  return (
    <Card className="flex flex-col transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-primary/20">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className={game.colorClass}>{game.icon}</div>
          <CardTitle>{game.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{game.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          Play Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
