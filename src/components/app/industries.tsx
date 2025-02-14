import { industriesData } from "@/constants";
import { SectionHeading } from "./section-heading";
import { SectionTag } from "./section-tag";

export function Industries() {
  return (
    <div className="relative overflow-hidden font-oxanium py-14 border-b border-brand-gray-500/50 border">
      <img
        src="industry-elipse.png"
        alt="no-img"
        className="absolute top-0 -right-44 max-w-96 opacity-30"
      />
      <img
        src="industry-elipse.png"
        alt="no-img"
        className="absolute -bottom-5 -left-44 max-w-96 opacity-30"
      />

      <div className="flex flex-col gap-5 container relative">
        <SectionTag content="Industries" />
        <SectionHeading content="“Industries We Empower with AI-Driven Interview Solutions”" />

        <div className="text-primary grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-6 gap-6">
          {industriesData.map((data, index) => (
            <div
              className="group relative rounded-lg p-[2px] transition-all duration-300 border border-brand-gray-600"
              key={index}
            >
              <div
                className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to right, #FFC342 3%, #5B71FF 23%, #CE440E 47%, #3600AC 69%, #50FF64 100%)",
                }}
              />
              <div
                key={index}
                className="relative grid grid-cols-1 gap-4 justify-center items-center size-full text-center bg-dark-200 rounded-lg p-6 border-brand-gray-600 group"
              >
                <img
                  src={data.icon}
                  alt="no-img"
                  className="max-sm:w-11 md:w-12 lg:w-16 mx-auto object-contain bg-[url('box-grid.png')] bg-cover"
                />
                <span className="text-sm">{data.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
