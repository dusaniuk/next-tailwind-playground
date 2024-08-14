import { cn } from "@/libs/utils";

export type SkeletonProps = {
  className?: string;
};

export function Skeleton(props: SkeletonProps) {
  const { className } = props;

  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[34rem] rounded-md bg-white/5",
        className
      )}
    />
  );
}
