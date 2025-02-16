import { sectionData } from "@/constants";
import { SectionTag } from "./section-tag";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  return (
    <div className="flex flex-col gap-3 h-auto font-oxanium py-10 items-center container overflow-hidden">
      <SectionTag content="How It Works" />

      <div className="py-5 relative w-full flex justify-center">
        <h3 className="~text-xl/2xl text-primary text-center z-10 relative w-fit">
          “Hire Pro makes hiring faster and easier from start to finish”
          <img
            src="star.png"
            alt="no-img"
            className="absolute -top-6 -left-36 size-14 max-md:hidden"
          />
        </h3>
      </div>

      <div className="flex flex-col gap-14 w-full">
        {sectionData.map(
          ({ step, star_position, heading, para, src, className }) => {
            return (
              <div
                key={step}
                className={cn(
                  "flex max-md:flex-col gap-24 max-md:gap-16 justify-center items-center text-primary pt-14 relative",
                  className
                )}
              >
                <img
                  src="star.png"
                  alt="no-img"
                  className={cn("absolute", star_position)}
                />
                <div className="flex flex-col gap-6 max-md:gap-3 items-start">
                  <SectionTag content={step} />
                  <h4 className="~text-base/3xl">{heading}</h4>
                  <p className="~text-sm/xl leading-relaxed tracking-wide max-w-xl text-brand-gray-700">
                    {para}
                  </p>
                </div>
                <img src={src} alt="no-img" className="max-w-72" />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
