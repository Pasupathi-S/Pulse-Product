import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pb-8 text-white">
      <div className="container-pulse grid gap-10 border-t border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400 text-slate-950">P</span>
            pulse
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">Business analytics in perfect rhythm.</p>
        </div>
        <div>
          <p className="font-bold">Product</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="#features" className="block hover:text-white">Features</a>
            <a href="#pricing" className="block hover:text-white">Pricing</a>
            <Link href="/dashboard" className="block hover:text-white">Dashboard</Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Company</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="#how-it-works" className="block hover:text-white">About</a>
            <a href="#faq" className="block hover:text-white">FAQ</a>
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <p className="mt-4 text-sm leading-6 text-slate-400">hello@pulse.example</p>
        </div>
      </div>
      <div className="container-pulse flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
        <span>© 2026 pulse</span>
      </div>
    </footer>
  );
}