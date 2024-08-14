import { PropsWithChildren } from "react";
import clsx from "clsx";

export type H1Props = PropsWithChildren<{
  center?: boolean;
}>;

export function H1(props: H1Props) {
  const { center, children } = props;

  return (
    <h1
      className={clsx("text-4xl md:text-5xl font-bold tracking-tight", {
        "text-center": center,
      })}
    >
      {children}
    </h1>
  );
}
