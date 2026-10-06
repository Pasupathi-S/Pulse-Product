import FAQClient from "./FAQClient";

export default function FAQ() {
  return (
    <section id="faq" className="section-space bg-[#f7faf9]">
      <div className="container-pulse grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-700">FAQ</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Questions, answered.</h2>
          <p className="mt-5 max-w-md leading-7 text-slate-600">A few things teams usually want to know before bringing pulse into their workflow.</p>
        </div>
        <FAQClient />
      </div>
    </section>
  );
}