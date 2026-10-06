import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="container-pulse flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-white">P</span>
          pulse
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="hover:text-slate-950">Features</a>
          <a href="#how-it-works" className="hover:text-slate-950">How it works</a>
          <a href="#pricing" className="hover:text-slate-950">Pricing</a>
          <a href="#faq" className="hover:text-slate-950">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
        <Link
  href="/dashboard"
  className="hidden rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-100 hover:shadow-md sm:block"
>
  Dashboard
</Link>          <a href="#pricing" className="hidden rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white sm:block">
            Get started <ArrowUpRight className="ml-1 inline h-4 w-4" />
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}