import { cn } from "@/lib/utils";

type SectionTagProps = {
  content: string;
} & React.ComponentProps<"div">;

export function SectionTag({ content, className }: SectionTagProps) {
  return (
    <div className="flex justify-center text-primary text-center">
      <span
        className={cn(
          "border border-brand-gray-400 bg-brand-gray-300 rounded-sm px-2 font-oxanium py-1 max-md:text-sm",
          className
        )}
      >
        {content}
      </span>
    </div>
  );
}
