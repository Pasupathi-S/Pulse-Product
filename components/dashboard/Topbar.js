"use client";

import { Bell, Menu } from "lucide-react";

export default function Topbar({ onMenu }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="flex h-[72px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button onClick={onMenu} className="rounded-xl border border-slate-200 p-2 lg:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </button>
          <div className="ml-2 flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold">Pasupathi</p>
              <p className="text-xs text-slate-500">Admin</p>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 text-sm font-black text-white">P</div>
          </div>
        </div>
      </div>
    </header>
  );
}