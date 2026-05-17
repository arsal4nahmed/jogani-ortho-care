interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, description, center }: Props) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold ${center ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-serif text-3xl font-semibold text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
