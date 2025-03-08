import { Suspense } from 'react';
import TripList from '../../../components/destination/TripList';
import { Skeleton } from '@/components/ui/skeleton';
import ExpertButton from '../../../components/destination/ExpertButton';

interface PageProps {
  params: Promise<{ handle: string }>;
}


export default async function DestinationPage({ params }: PageProps) {
  const { handle } = await params;
  const formattedHandle = handle.replace('-', ' ');

  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 capitalize">
          {formattedHandle}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover amazing trips and experiences
        </p>

        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-[400px] w-full" />
            ))}
          </div>
        }>
          <TripList handle={handle} />
        </Suspense>

        {/* Fixed Talk to Expert Button */}
        <ExpertButton />
      </div>
    </main>
  );
} 