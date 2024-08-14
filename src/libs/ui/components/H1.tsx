import { PropsWithChildren } from "react";
import { cn } from "@/libs/utils";

export type H1Props = PropsWithChildren<{
  className?: string;
}>;

export function H1(props: H1Props) {
  const { className, children } = props;

  return (
    <h1
      className={cn("text-4xl md:text-5xl font-bold tracking-tight", className)}
    >
      {children}
    </h1>
  );
}
