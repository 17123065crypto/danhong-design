import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-graphite md:grid-cols-[1fr_auto] md:px-8">
        <div>
          <p className="font-medium text-ink">Danhong Wang</p>
          <p className="mt-2 max-w-md leading-6">
            UI/UX, visual, and graphic designer focused on digital experiences, brand touchpoints, and editorial systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          <Link href="/portfolio" className="hover:text-ink">Works</Link>
          <Link href="/about" className="hover:text-ink">About</Link>
          <Link href="/contact" className="hover:text-ink">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
