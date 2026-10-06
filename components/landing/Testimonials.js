const testimonials = [
  {
    quote: "pulse replaced three weekly spreadsheet rituals with one dashboard the whole team actually uses.",
    name: "David",
    role: "Owner, Northstar"
  },
  {
    quote: "The biggest win is clarity. I can see what changed and why without asking an analyst for a custom report.",
    name: "Daniel",
    role: "Admin, Orbit Labs"
  },
  {
    quote: "It feels like someone took our analytics stack and removed everything that got in the way.",
    name: "Paul",
    role: "User, Lumina"
  }
];

export default function Testimonials() {
  return (
    <section className="section-space bg-[#f7faf9]">
      <div className="container-pulse">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-700">Customer stories</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Loved by teams that move quickly.</h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="card flex min-h-[250px] flex-col justify-between p-7">
              <blockquote className="text-xl font-semibold leading-8 text-slate-800">“{item.quote}”</blockquote>
              <figcaption className="mt-8 border-t border-slate-200 pt-5">
                <div className="font-bold">{item.name}</div>
                <div className="mt-1 text-sm text-slate-500">{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}