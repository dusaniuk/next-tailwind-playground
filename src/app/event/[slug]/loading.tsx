import { Skeleton } from "@/libs/ui/components/Skeleton";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center">
      <Skeleton className="w-full h-[510px] lg:h-[361px]" />
      <div className="flex flex-col gap-y-4 my-14">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}
