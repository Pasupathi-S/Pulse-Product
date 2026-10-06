"use client";

import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from "recharts";

const money = (value) => `$${Math.round(value / 1000)}k`;

export default function Charts({ revenue, conversion }) {
  return (
    <div className="grid gap-4 xl:grid-cols-[1.55fr_.75fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-500">Revenue performance</p>
            <h3 className="mt-1 text-xl font-black">$128,450</h3>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">+18.6%</span>
        </div>
        <div className="mt-6 h-[290px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenue}>
              <defs>
                <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#19b77a" stopOpacity={0.28} />
                  <stop offset="100%" stopColor="#19b77a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#edf2ef" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#7a8983" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#7a8983" }} tickFormatter={money} width={45} />
              <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, "Revenue"]} />
              <Area type="monotone" dataKey="revenue" stroke="#109c68" strokeWidth={3} fill="url(#revenueFill)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div>
          <p className="text-sm font-semibold text-slate-500">Conversion rate</p>
          <h3 className="mt-1 text-xl font-black">6.84%</h3>
        </div>
        <div className="mt-6 h-[290px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={conversion}>
              <CartesianGrid vertical={false} stroke="#edf2ef" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#7a8983" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#7a8983" }} unit="%" />
              <Tooltip formatter={(value) => [`${value}%`, "Conversion"]} />
              <Bar dataKey="rate" fill="#19b77a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}