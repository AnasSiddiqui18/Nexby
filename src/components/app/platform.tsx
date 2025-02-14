import ScrollCards from "./scroll-cards";
import { SectionHeading } from "./section-heading";
import { SectionTag } from "./section-tag";

export function Platform() {
  return (
    <div className="flex flex-col gap-6 font-oxanium text-primary justify-center">
      <SectionTag content="Our Platform" />
      <SectionHeading content='"Streamlining Recruitment with AI-Driven Screening and Sourcing"' />
      <div className="flex items-center min-h-screen">
        <ScrollCards />
      </div>
    </div>
  );
}
