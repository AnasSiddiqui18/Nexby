"use client";

import { reviewData } from "@/constants";
import { SectionTag } from "./section-tag";
import { Button } from "../ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { useCallback, useEffect, useState } from "react";
import "../app/embla-carousel/embla.css";

const images = [
  "success-01.png",
  "success-02.png",
  "success-03.png",
  "success-04.png",
  "success-05.png",
  "success-06.png",
];

export function Success() {
  const [imageIndex, setImageIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Fade()]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setImageIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);

    const autoPlay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoPlay);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="h-auto bg-[url('success-bg.png')] py-10 bg-cover text-primary font-oxanium">
      <div className="container">
        <div>
          <SectionTag content="Our Success Stories" />
        </div>
        <div className="flex max-md:flex-col justify-center mt-12 items-stretch max-md:h-[700px] h-[500px] gap-6">
          <div className="relative flex justify-center items-center h-full w-full embla rounded-lg overflow-hidden">
            <div className="embla__viewport w-full h-full" ref={emblaRef}>
              <div className="embla__container h-full">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="embla__slide flex-[0_0_100%] min-w-0 relative h-full"
                    style={{
                      opacity: index === imageIndex ? 1 : 0,
                    }}
                  >
                    <img
                      src={src}
                      alt={`success ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm md:text-lg lg:text-2xl absolute left-0 top-0 max-md:text-lg max-md:w-48 w-64 xl:w-64 xl:leading-relaxed bg-opacity-80 rounded-lg z-10 text-white">
              "AI screening speeds up hiring and helps find the ideal
              candidate."
            </p>
          </div>

          <div className="flex flex-col gap-4 h-full overflow-y-auto w-full">
            {reviewData.map((data, index) => (
              <div
                key={index}
                className="bg-brand-gray-600 text-brand-gray-800 rounded-md flex flex-col gap-4 p-4 w-full"
              >
                <p className="~text-sm/base !leading-relaxed">{data.review}</p>
                <div className="flex justify-between text-primary ~text-sm/xl">
                  <div className="flex gap-1">
                    {Array.from({ length: data.star }).map((_, starIndex) => (
                      <img
                        key={starIndex}
                        src="review-star.png"
                        alt="no-img"
                        className="size-4"
                      />
                    ))}
                  </div>
                  - {data.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-brand-blue-100 flex max-sm:flex-col max-sm:gap-4 justify-between p-5 mt-4 rounded-md">
          <span className="~text-sm/2xl">
            See How Nexby AI Can Help You Hire The Right Candidate
          </span>
          <Button
            className="flex gap-3 rounded-none border-2 border-primary"
            variant="ghost"
          >
            Join Now
            <img src="arrow-up.png" alt="no-img" className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
