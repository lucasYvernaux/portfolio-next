import { Skeleton } from "@/components/shared/skeleton";

export default function CardProjectSkeleton() {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden size-full bg-zinc-900 shadow-xl shadow-black/50 border border-zinc-800/50">
      <Skeleton variant="rect" className="h-48 w-full rounded-none" />
      <div className="p-5 flex flex-1 flex-col gap-3">
        <Skeleton variant="title" />
        <Skeleton variant="text" className="w-1/3" />
        <div className="flex flex-col gap-2 mt-1">
          <Skeleton variant="text" />
          <Skeleton variant="text" className="w-4/5" />
        </div>
        <div className="flex gap-1.5 mt-2">
          <Skeleton variant="rect" className="h-5 w-14 rounded-full" />
          <Skeleton variant="rect" className="h-5 w-16 rounded-full" />
          <Skeleton variant="rect" className="h-5 w-12 rounded-full" />
        </div>
      </div>
    </div>
  );
}
