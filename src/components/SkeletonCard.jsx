
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 animate-pulse">
      <Skeleton className="h-4 w-3/4 mb-4" />
      <Skeleton className="h-3 w-full mb-2" />
      <Skeleton className="h-3 w-2/3 mb-4" />
      <div className="flex items-center space-x-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
};

export default SkeletonCard;
