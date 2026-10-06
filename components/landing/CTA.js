import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="container-pulse relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[.04] p-8 text-center sm:p-14">
        <Sparkles className="mx-auto h-8 w-8 text-emerald-300" />
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Make every metric mean something.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Turn scattered business activity into one clear pulse your team can act on.</p>
        <Link href="/dashboard" className="mt-8 inline-flex items-center rounded-2xl bg-emerald-400 px-6 py-3.5 font-bold text-slate-950">
          Open pulse <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}