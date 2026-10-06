import { ArrowDownRight, ArrowUpRight, DollarSign, ShoppingCart, UserRound, Percent } from "lucide-react";

const icons = {
  revenue: {
    icon: DollarSign,
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  users: {
    icon: UserRound,
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  conversion: {
    icon: Percent,
    bg: "bg-purple-50",
    color: "text-purple-600",
  },
  orders: {
    icon: ShoppingCart,
    bg: "bg-orange-50",
    color: "text-orange-600",
  },
};

export default function StatsCards({ stats }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const { icon: Icon, bg, color } = icons[stat.key];

        return (
          <div
            key={stat.key}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <div
                className={`grid h-10 w-10 place-items-center rounded-xl ${bg} ${color}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div
                className={`flex items-center gap-1 text-xs font-bold ${
                  stat.change >= 0 ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {stat.change >= 0 ? (
                  <ArrowUpRight className="h-3.5 w-3.5" />
                ) : (
                  <ArrowDownRight className="h-3.5 w-3.5" />
                )}
                {stat.change}%
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-500">{stat.label}</p>
            <p className="mt-1 text-2xl font-black tracking-tight">
              {stat.formatted}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {stat.comparison}
            </p>
          </div>
        );
      })}
    </div>
  );
}
