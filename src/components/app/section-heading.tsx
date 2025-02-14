type SectionHeadingProps = {
  content: string;
};

export function SectionHeading({ content }: SectionHeadingProps) {
  return (
    <h3 className="~text-xl/3xl text-primary text-center z-10">{content}</h3>
  );
}
