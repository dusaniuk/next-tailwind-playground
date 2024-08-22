import { Skeleton } from "@/libs/ui/components/Skeleton";

export function EventCardSkeleton() {
  return (
    <div className="relative flex flex-col flex-1 rounded-xl overflow-hidden bg-white/[3%] basis-80 h-[23.75rem] max-w-[31.25rem] state-active">
      <Skeleton className="h-[60%] rounded-b-none" />
      <div className="flex flex-col flex-1 justify-center items-center">
        <Skeleton className="w-[80%] h-6" />
        <Skeleton className="w-[60%] h-4 mt-4" />
        <Skeleton className="w-[40%] h-4 mt-4" />
      </div>
      <div className="absolute flex flex-col justify-center items-center left-[0.75rem] top-[0.75rem] w-[3rem] h-[3rem] bg-black/30 rounded-md">
        <Skeleton className="w-[50%] h-4" />
        <Skeleton className="w-[60%] h-3 mt-1" />
      </div>
    </div>
  );
}
