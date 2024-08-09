/**
 * @file carousel.tsx
 * @overview Sandbox of components.
 */

import { Card, CardContent } from '@/components/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/carousel';

/**
 * @returns {JSX.Element} Example of Carousel usage
 * @example
  import {CarouselExample} from '@/examples/carousel.tsx';

  <CarouselExample />
 */
function CarouselExample(): JSX.Element {
  document.title = 'Carousel';
  return (
    <div className="m-24">
      <Carousel className="w-full max-w-[368px]">
        <CarouselContent>
          {Array.from({ length: 2 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold"></span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute squircle" />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export { CarouselExample };
