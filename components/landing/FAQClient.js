"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["Can I use pulse with my existing stack?", "Yes. This assessment version uses mock API endpoints, but the UI is structured so those endpoints can be replaced by a real backend or analytics provider."],
  ["Is the dashboard responsive?", "Yes. The layout adapts from wide desktop dashboards to mobile cards and horizontally scrollable data tables."],
  ["Does pulse support alerts?", "The product concept supports alerts, and the UI architecture leaves room for notification and alert workflows."],
  ["Can I customize the metrics?", "Yes. A production version could expose configurable dashboards, saved filters and role-based views."],
  ["How quickly can a team get started?", "The intended experience is designed around a short setup flow: connect data, validate key events and start exploring the dashboard."]
];

export default function FAQClient() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map(([question, answer], index) => (
        <div key={question} className="rounded-2xl border border-slate-200 bg-white">
          <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-6 p-5 text-left font-bold">
            {question}
            <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === index ? "rotate-180" : ""}`} />
          </button>
          {open === index && <div className="px-5 pb-5 text-sm leading-7 text-slate-600">{answer}</div>}
        </div>
      ))}
    </div>
  );
}