import { Suspense } from 'react';
import TripList from '../../../components/destination/TripList';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface PageProps {
  params: Promise<{ handle: string }>;
}

const ExpertButton = () => {
  'use client';
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Button
        size="lg"
        className="shadow-lg"
        onClick={() => window.location.href = '/get-in-touch'}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Talk to an Expert
      </Button>
    </div>
  );
};

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
        
      </div>
    </main>
  );
} 