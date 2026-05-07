type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-14 md:px-8 md:pb-20 md:pt-24">
      <p className="reveal text-xs font-semibold uppercase tracking-[0.32em] text-clay">{eyebrow}</p>
      <h1 className="reveal mt-5 max-w-5xl text-balance text-5xl font-medium leading-[0.98] tracking-[-0.04em] md:text-7xl">
        {title}
      </h1>
      <p className="reveal mt-7 max-w-2xl border-t border-ink/15 pt-5 text-base leading-8 text-graphite md:text-lg">
        {description}
      </p>
    </section>
  );
}
