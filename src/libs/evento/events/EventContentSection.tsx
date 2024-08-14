export interface EventContentSectionProps {
  title: string;
  content: string;
  className?: string;
}

export function EventContentSection(props: EventContentSectionProps) {
  const { title, content, className } = props;

  return (
    <section className={className}>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-lg mt-4 leading-8 text-white/75 max-w-4xl mx-auto">
        {content}
      </p>
    </section>
  );
}
