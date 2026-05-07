import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="text-xs font-semibold uppercase tracking-[0.24em] md:text-sm">
          Danhong Wang
        </Link>
        <nav className="flex text-[0.7rem] uppercase tracking-[0.14em] text-graphite md:text-xs">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="px-2 py-2 transition hover:bg-ink hover:text-paper md:px-4">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
