import { BarChart3, BellRing, Gauge, Layers3, MousePointerClick, ShieldCheck } from "lucide-react";

const features = [
  ["One clear view", "See revenue, users, conversion and orders without stitching five tools together.", BarChart3],
  ["Actionable alerts", "Know when a metric moves outside the range your team cares about.", BellRing],
  ["Fast by default", "A lightweight interface designed to feel instant, even as your data grows.", Gauge],
  ["Flexible workspaces", "Organize the metrics and views that matter to your business.", Layers3],
  ["Explore the details", "Move from a top-level metric to the customers and transactions behind it.", MousePointerClick],
  ["Built with care", "Responsive, accessible and structured for real production frontend workflows.", ShieldCheck]
];

export default function Features() {
  return (
    <section id="features" className="section-space bg-[#f7faf9]">
      <div className="container-pulse">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-700">Why pulse</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Everything your growth team needs.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">A focused analytics experience that turns business activity into a clear next step.</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, desc, Icon], i) => (
            <article key={title} className="card group p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{desc}</p>
              <div className="mt-6 h-1 w-10 rounded-full bg-emerald-400 transition-all group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}