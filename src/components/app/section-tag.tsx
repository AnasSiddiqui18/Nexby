import { cn } from "@/lib/utils";

type SectionTagProps = {
  content: string;
} & React.ComponentProps<"div">;

export function SectionTag({ content, className }: SectionTagProps) {
  return (
    <div className="flex justify-center text-primary text-center">
      <span
        className={cn(
          "border border-brand-white-300 bg-brand-gray-300 rounded-sm px-2 font-oxanium h-10 flex items-center max-md:text-sm text-lg w-26 justify-center",
          className
        )}
      >
        {content}
      </span>
    </div>
  );
}
