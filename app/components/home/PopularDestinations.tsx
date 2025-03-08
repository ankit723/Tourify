'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Destination {
  title: string;
  handle: string;
  img: string;
}

const PopularDestinations = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('https://json-data-1wm2.onrender.com/featured-destination');
        const data = await response.json();
        if (data.destination.length > 0) {
          setDestinations(data.destination);
        }
      } catch (error) {
        console.error('Error fetching destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-[400px] w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((destination) => (
        <Card key={destination.handle} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={destination.img}
              alt={destination.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{destination.title}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button 
              className="w-full"
              onClick={() => router.push(`/destination/${destination.handle}`)}
            >
              Explore
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PopularDestinations; 