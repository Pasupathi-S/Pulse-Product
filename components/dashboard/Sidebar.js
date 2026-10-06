"use client";

import { LayoutDashboard,X } from "lucide-react";

const links = [
  ["Overview", LayoutDashboard],
  
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <button onClick={onClose} className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden" aria-label="Close sidebar" />}
      <aside className={`fixed inset-y-0 left-0 z-50 w-[260px] border-r border-slate-200 bg-white px-4 py-5 transition-transform lg:static lg:z-auto lg:block lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-2">
          <a href="/" className="flex items-center gap-2 text-xl font-black">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-white">P</span>
            pulse
          </a>
          <button onClick={onClose} className="rounded-lg p-2 lg:hidden" aria-label="Close"><X className="h-5 w-5" /></button>
        </div>

        <div className="mt-10">
          <p className="px-3 text-[10px] font-black uppercase tracking-[.2em] text-slate-400">Workspace</p>
          <nav className="mt-3 space-y-1">
            {links.map(([label, Icon], index) => (
              <button key={label} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${index === 0 ? "bg-emerald-50 text-emerald-700" : "text-slate-600 hover:bg-slate-50"}`}>
                <Icon className="h-[18px] w-[18px]" /> {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-5 left-4 right-4 rounded-2xl bg-slate-950 p-4 text-white">
          <p className="text-sm font-bold">Growth plan</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">72% of your monthly events used.</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[72%] rounded-full bg-emerald-400" />
          </div>
        </div>
      </aside>
    </>
  );
}