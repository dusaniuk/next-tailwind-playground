import { PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<unknown>;

export function Container(props: ContainerProps) {
  const { children } = props;
  return (
    <div className="flex flex-col max-w-7xl min-h-screen mx-auto bg-white/[1%]">
      {children}
    </div>
  );
}
