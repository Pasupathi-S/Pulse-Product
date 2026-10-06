"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, Download, RefreshCw } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatsCards from "./StatsCards";
import Charts from "./Charts";
import TransactionsTable from "./TransactionsTable";
import Customers from "./Customers";

export default function DashboardClient() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [state, setState] = useState({ loading: true, error: false, data: null });

  const loadDashboard = async () => {
    setState({ loading: true, error: false, data: null });
    try {
      const response = await fetch("/api/dashboard");
      if (!response.ok) throw new Error("Failed");
      const json = await response.json();
      setState({ loading: false, error: false, data: json.data });
    } catch {
      setState({ loading: false, error: true, data: null });
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7faf9]">
      <div className="flex min-h-screen">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="min-w-0 flex-1">
          <Topbar onMenu={() => setSidebarOpen(true)} />
          <main className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1500px]">
              <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                <div>
                <Link
  href="/"
  className="mb-3 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
>
  <ArrowLeft className="h-4 w-4" />
  Back to website
</Link> <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Good Morning, Pasupathi.</h1>
                  <p className="mt-2 text-sm text-slate-500">Here&apos;s what&apos;s happening with your business today.</p>
                </div>

                <div className="flex gap-2">
                  <button onClick={loadDashboard} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700">
                    <RefreshCw className="h-4 w-4" /> Refresh
                  </button>
                  </div>
              </div>

              {state.loading ? (
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[1,2,3,4].map((i) => <div key={i} className="h-36 animate-pulse rounded-2xl bg-white" />)}</div>
                  <div className="h-[380px] animate-pulse rounded-2xl bg-white" />
                </div>
              ) : state.error ? (
                <div className="rounded-2xl border border-red-200 bg-white p-12 text-center">
                  <h2 className="font-black">Something went wrong</h2>
                  <p className="mt-2 text-sm text-slate-500">We couldn&apos;t load your dashboard data.</p>
                  <button onClick={loadDashboard} className="mt-5 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white">Try again</button>
                </div>
              ) : (
                <div className="space-y-5">
                  <StatsCards stats={state.data.stats} />
                  <Charts revenue={state.data.revenue} conversion={state.data.conversion} />
                  <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(0,.75fr)]">
                    <TransactionsTable />
                    <Customers />
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}