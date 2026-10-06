import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Users, ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-white">
      <div className="hero-orb -right-28 top-20" />
      <div className="hero-orb -left-52 top-80 opacity-60" />
      <div className="container-pulse grid-bg relative grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[.92fr_1.08fr]">
        <div className="fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
            <Sparkles className="h-3.5 w-3.5" /> The smarter way to track growth
          </div>

          <h1 className="max-w-3xl text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
            Your business, <span className="gradient-text">in perfect rhythm.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            pulse brings revenue, customers, orders and conversion insights into one beautifully simple workspace — so your team can act on what matters.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard" className="rounded-2xl bg-slate-950 px-6 py-3.5 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
              Explore the dashboard <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
            <a href="#features" className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-center font-bold text-slate-800">
              See how pulse works
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {["Live business visibility", "Built for fast-moving teams", "Simple, actionable insights", "No spreadsheet chaos"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up lg:pl-6">
          <div className="card relative overflow-hidden p-3 sm:p-5">
            <div className="rounded-[20px] bg-slate-950 p-4 text-white sm:p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Overview</p>
                  <h2 className="mt-1 text-xl font-bold">Good morning, Arun</h2>
                </div>
                <div className="rounded-xl bg-white/10 px-3 py-2 text-xs">Oct 2026</div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Revenue", "$128.4K", "+18.6%", TrendingUp],
                  ["Users", "18.4K", "+12.4%", Users],
                  ["Orders", "2,846", "+9.8%", ShoppingCart]
                ].map(([label, value, change, Icon]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[.06] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{label}</span>
                      <Icon className="h-4 w-4 text-emerald-300" />
                    </div>
                    <div className="mt-4 text-xl font-bold">{value}</div>
                    <div className="mt-1 text-xs text-emerald-300">{change}</div>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[.06] p-4">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Revenue</p>
                    <p className="text-2xl font-bold">$128,450</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">+18.6%</span>
                </div>
                <div className="flex h-40 items-end gap-2">
                  {[34, 45, 39, 57, 61, 52, 72, 67, 82, 94, 76, 100].map((height, i) => (
                    <div key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-emerald-500 to-emerald-200 opacity-80" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}