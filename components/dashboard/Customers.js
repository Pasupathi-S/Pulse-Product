"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function Customers() {
  const [state, setState] = useState({ loading: true, error: false, data: [] });

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/customers", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((json) => setState({ loading: false, error: false, data: json.data }))
      .catch((error) => {
        if (error.name !== "AbortError") setState({ loading: false, error: true, data: [] });
      });
    return () => controller.abort();
  }, []);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black">Top customers</h3>
          <p className="mt-1 text-sm text-slate-500">Customers contributing the most value.</p>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><Users className="h-5 w-5" /></div>
      </div>

      {state.loading ? (
        <div className="mt-6 space-y-3">{[1,2,3,4].map((i) => <div key={i} className="h-14 animate-pulse rounded-xl bg-slate-100" />)}</div>
      ) : state.error ? (
        <p className="mt-6 text-sm text-red-500">Unable to load customers.</p>
      ) : (
        <div className="mt-5 space-y-2">
          {state.data.map((customer) => (
            <div key={customer.id} className="flex items-center justify-between rounded-xl p-3 hover:bg-slate-50">
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-xs font-black">
                  {customer.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{customer.name}</p>
                  <p className="truncate text-xs text-slate-400">{customer.email}</p>
                </div>
              </div>
              <div className="ml-3 text-right">
                <p className="text-sm font-black">${customer.spend.toLocaleString()}</p>
                <p className="text-[10px] text-slate-400">{customer.plan}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}