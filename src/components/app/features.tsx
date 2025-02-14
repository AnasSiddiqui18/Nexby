import { featuresData } from "@/constants";
import { SectionHeading } from "./section-heading";
import { SectionTag } from "./section-tag";

export function Features() {
  return (
    <div className="h-auto py-10 font-oxanium text-primary container">
      <div className="flex gap-3 justify-center flex-col items-center">
        <SectionTag content="Key Features" />
        <SectionHeading content="“Hire Pro simplifies and optimizes hiring.”" />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6 max-md:grid-cols-1 max-lg:grid-cols-2">
        {featuresData.map((data) => {
          return (
            <div
              key={data.icon}
              className="relative group overflow-hidden bg-dark-200"
            >
              <div className="absolute inset-0 -translate-x-[500px] group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-brand-purple-500/40 via-brand-purple-500/40 to-transparent" />

              <div
                key={data.icon}
                className="flex flex-col justify-center p-6 rounded-xl gap-4"
              >
                <img
                  src={data.icon}
                  alt="no-img"
                  className="size-14 bg-brand-purple-300 items-start"
                />

                <span className="text-lg">{data.content}</span>
                <p className="text-base text-brand-gray-800">{data.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
