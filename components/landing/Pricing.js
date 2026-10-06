import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  { name: "Starter", price: "$0", desc: "For small teams exploring their growth signals.", features: ["1 workspace", "3 dashboards", "7-day history", "Email support"] },
  { name: "Growth", price: "$79", desc: "For teams that want a reliable operating view.", features: ["Unlimited dashboards", "12-month history", "Custom alerts", "Priority support"], featured: true },
  { name: "Scale", price: "$249", desc: "For data-heavy teams with more control needs.", features: ["Everything in Growth", "Unlimited history", "Advanced permissions", "Dedicated support"] }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-space bg-white">
      <div className="container-pulse">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-700">Pricing</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Simple pricing. No surprises.</h2>
          <p className="mt-5 text-lg text-slate-600">Start free. Upgrade when your business needs more visibility.</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-3xl border p-7 ${plan.featured ? "border-emerald-500 bg-slate-950 text-white shadow-2xl" : "border-slate-200 bg-white"}`}>
              {plan.featured && <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950">MOST POPULAR</span>}
              <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-2 text-sm leading-6 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>{plan.desc}</p>
              <div className="mt-7 text-4xl font-black">{plan.price}<span className="text-base font-medium text-slate-400">{plan.price !== "$0" ? "/month" : ""}</span></div>
              <Link href="/dashboard" className={`mt-7 block rounded-2xl px-5 py-3 text-center font-bold ${plan.featured ? "bg-emerald-400 text-slate-950" : "bg-slate-950 text-white"}`}>
                Start with {plan.name}
              </Link>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className={plan.featured ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}