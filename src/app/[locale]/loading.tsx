import CardProjectSkeleton from "@/components/feature/projects/card-project-skeleton";
import { SkeletonGroup } from "@/components/shared/skeleton";

export default function Loading() {
  return (
    <>
      <SkeletonGroup
        label="Chargement de la page…"
        className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <CardProjectSkeleton key={i} />
        ))}
      </SkeletonGroup>
    </>
  );
}
