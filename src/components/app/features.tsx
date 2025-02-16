import { featuresData } from "@/constants";
import { SectionHeading } from "./section-heading";
import { SectionTag } from "./section-tag";

export function Features() {
  return (
    <div className="h-auto py-10 font-oxanium text-primary container">
      <SectionTag content="Key Features" />

      <div className="flex gap-3 justify-center flex-col items-center mt-10">
        <SectionHeading content="“Hire Pro simplifies and optimizes hiring.”" />
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 mt-14 max-lg:grid-cols-2">
          {featuresData.map((data) => {
            return (
              <div
                key={data.icon}
                className="relative group overflow-hidden bg-dark-200 rounded-md w-96"
              >
                <div className="absolute inset-0 -translate-x-[500px] group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-brand-purple-700/40 via-brand-purple-700/40 to-transparent" />

                <div
                  key={data.icon}
                  className="flex flex-col justify-center p-6 rounded-xl gap-4"
                >
                  <img
                    src={data.icon}
                    alt="no-img"
                    className="size-14 items-start"
                  />
                  <span className="text-lg">{data.content}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
