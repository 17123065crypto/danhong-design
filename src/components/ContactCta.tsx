import Link from "next/link";

export function ContactCta() {
  return (
    <section className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-signal">Available for work</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
            Looking for a designer who can connect structure, visual craft, and production detail?
          </h2>
        </div>
        <Link href="/contact" className="inline-flex h-12 items-center justify-center border border-paper/40 px-6 text-sm font-semibold transition hover:bg-paper hover:text-ink">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
