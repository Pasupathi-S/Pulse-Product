"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";

function Status({ value }) {
  const styles = {
    Completed: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
    Refunded: "bg-red-50 text-red-600"
  };

  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${styles[value] || "bg-slate-100 text-slate-600"}`}>{value}</span>;
}

export default function TransactionsTable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("date-desc");
  const [page, setPage] = useState(1);
  const [state, setState] = useState({ loading: true, error: false, data: [], pagination: { totalPages: 1, total: 0 } });

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setState((current) => ({ ...current, loading: true, error: false }));
      try {
        const params = new URLSearchParams({ page, limit: 6, search, status, sort });
        const response = await fetch(`/api/transactions?${params}`, { signal: controller.signal });
        if (!response.ok) throw new Error("Failed to load");
        const json = await response.json();
        setState({ loading: false, error: false, data: json.data, pagination: json.pagination });
      } catch (error) {
        if (error.name !== "AbortError") setState((current) => ({ ...current, loading: false, error: true }));
      }
    }

    const timer = setTimeout(load, 250);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search, status, sort, page]);

  const changeFilter = (fn) => {
    fn();
    setPage(1);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-4">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h3 className="text-xl font-black">Transactions</h3>
            <p className="mt-1 text-sm text-slate-500">Recent customer payments and order activity.</p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
              <Search className="h-4 w-4 text-slate-400" />
              <input value={search} onChange={(e) => changeFilter(() => setSearch(e.target.value))} placeholder="Search Product..." className="w-full bg-transparent text-sm outline-none sm:w-44" />
            </label>

            <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
              <SlidersHorizontal className="h-4 w-4 text-slate-400" />
              <select value={status} onChange={(e) => changeFilter(() => setStatus(e.target.value))} className="bg-transparent text-sm outline-none">
                <option value="all">All status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="refunded">Refunded</option>
              </select>
            </label>

            <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
              <ArrowUpDown className="h-4 w-4 text-slate-400" />
              <select value={sort} onChange={(e) => changeFilter(() => setSort(e.target.value))} className="bg-transparent text-sm outline-none">
                <option value="date-desc">Newest</option>
                <option value="amount-desc">Amount high</option>
                <option value="amount-asc">Amount low</option>
                <option value="customer-asc">Customer A-Z</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      {state.loading ? (
        <div className="space-y-4 p-6">
          {[1, 2, 3, 4, 5].map((i) => <div key={i} className="h-12 animate-pulse rounded-xl bg-slate-100" />)}
        </div>
      ) : state.error ? (
        <div className="p-10 text-center">
          <p className="font-bold">Couldn&apos;t load transactions.</p>
          <p className="mt-1 text-sm text-slate-500">Please refresh and try again.</p>
        </div>
      ) : state.data.length === 0 ? (
        <div className="p-10 text-center">
          <p className="font-bold">No transactions found</p>
          <p className="mt-1 text-sm text-slate-500">Try changing your search or filters.</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-bold">Customer</th>
                  <th className="px-6 py-4 font-bold">Product</th>
                  <th className="px-6 py-4 font-bold">Amount</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {state.data.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">{item.customer}</div>
                      <div className="mt-0.5 text-xs text-slate-400">{item.email}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{item.product}</td>
                    <td className="px-6 py-4 font-bold">${item.amount.toLocaleString()}</td>
                    <td className="px-6 py-4"><Status value={item.status} /></td>
                    <td className="px-6 py-4 text-slate-500">{new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 px-5 py-4 text-sm">
            <span className="text-slate-500">{state.pagination.total} transactions</span>
            <div className="flex items-center gap-2">
              <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="rounded-lg border border-slate-200 p-2 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Previous">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="px-2 font-semibold">{page} / {state.pagination.totalPages}</span>
              <button disabled={page >= state.pagination.totalPages} onClick={() => setPage((p) => p + 1)} className="rounded-lg border border-slate-200 p-2 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Next">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}