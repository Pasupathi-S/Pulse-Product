import { ArrowRight, Database, LineChart, Rocket } from "lucide-react";

const steps = [
  ["01", "Connect your data", "Bring your key business events into one reliable source of truth.", Database],
  ["02", "See the pulse", "pulse turns activity into clean metrics, trends and customer signals.", LineChart],
  ["03", "Move faster", "Spot opportunities, share context and make confident decisions.", Rocket]
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-space bg-white">
      <div className="container-pulse">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-700">How it works</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">From data to decision in minutes.</h2>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {steps.map(([number, title, desc, Icon], index) => (
            <div key={number} className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-emerald-600">{number}</span>
                <Icon className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="mt-12 text-2xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{desc}</p>
              {index < 2 && <ArrowRight className="absolute -right-5 top-1/2 hidden h-9 w-9 rounded-full border border-slate-200 bg-white p-2 text-slate-400 lg:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}