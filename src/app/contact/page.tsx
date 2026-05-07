import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

const contactItems = [
  ["Email", "Iris4409905696@gmail.com", "mailto:Iris4409905696@gmail.com"],
  ["Location", "Shanghai / Remote", ""],
  ["Availability", "Freelance & Full-time", ""],
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Open to UI/UX, visual design, and brand-focused opportunities."
        description="I am interested in roles and projects where product structure, visual craft, typography, and brand expression need to work together."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-28">
        <div className="grid gap-5">
          {contactItems.map(([label, value, href]) => (
            <div key={label} className="border-t border-ink/15 pt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-clay">{label}</p>
              {href ? (
                <Link href={href} className="mt-2 block text-2xl font-medium tracking-[-0.03em] hover:text-clay md:text-3xl">
                  {value}
                </Link>
              ) : (
                <p className="mt-2 text-2xl font-medium tracking-[-0.03em] md:text-3xl">{value}</p>
              )}
            </div>
          ))}
        </div>
        <form className="grid gap-4 border-t border-ink/15 pt-5">
          <label className="grid gap-2">
            <span className="text-sm font-medium">Name</span>
            <input className="h-12 border border-ink/15 bg-paper/25 px-4 outline-none transition focus:border-ink" placeholder="Name" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium">Email</span>
            <input className="h-12 border border-ink/15 bg-paper/25 px-4 outline-none transition focus:border-ink" placeholder="Email" type="email" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium">Role or project type</span>
            <input className="h-12 border border-ink/15 bg-paper/25 px-4 outline-none transition focus:border-ink" placeholder="Brand / UI / Visual / Portfolio" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium">Message</span>
            <textarea className="min-h-36 resize-y border border-ink/15 bg-paper/25 p-4 outline-none transition focus:border-ink" placeholder="Budget, timeline, goals..." />
          </label>
          <button className="mt-2 h-12 bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-graphite" type="button">
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
