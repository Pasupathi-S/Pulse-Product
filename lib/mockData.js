export const dashboardData = {
  stats: [
    {
      key: "revenue",
      label: "Total revenue",
      value: 128450,
      formatted: "$128,450",
      change: 18.6,
      comparison: "vs last month"
    },
    {
      key: "users",
      label: "Active users",
      value: 18420,
      formatted: "18,420",
      change: 12.4,
      comparison: "vs last month"
    },
    {
      key: "conversion",
      label: "Conversion rate",
      value: 6.84,
      formatted: "6.84%",
      change: 2.1,
      comparison: "vs last month"
    },
    {
      key: "orders",
      label: "Orders",
      value: 2846,
      formatted: "2,846",
      change: 9.8,
      comparison: "vs last month"
    }
  ],
  revenue: [
    { month: "Jan", revenue: 42000, users: 7200 },
    { month: "Feb", revenue: 47000, users: 7900 },
    { month: "Mar", revenue: 52000, users: 8400 },
    { month: "Apr", revenue: 61000, users: 9300 },
    { month: "May", revenue: 68000, users: 10600 },
    { month: "Jun", revenue: 72000, users: 11900 },
    { month: "Jul", revenue: 84000, users: 13100 },
    { month: "Aug", revenue: 97000, users: 14800 },
    { month: "Sep", revenue: 113000, users: 16600 },
    { month: "Oct", revenue: 128450, users: 18420 }
  ],
  conversion: [
    { month: "Jan", rate: 4.1 },
    { month: "Feb", rate: 4.5 },
    { month: "Mar", rate: 4.8 },
    { month: "Apr", rate: 5.2 },
    { month: "May", rate: 5.0 },
    { month: "Jun", rate: 5.7 },
    { month: "Jul", rate: 5.9 },
    { month: "Aug", rate: 6.2 },
    { month: "Sep", rate: 6.5 },
    { month: "Oct", rate: 6.84 }
  ]
};

export const transactions = [
  { id: "TX-10482", customer: "Ava Morgan", email: "ava@northstar.io", product: "Growth", amount: 249, status: "Completed", date: "2026-10-05" },
  { id: "TX-10481", customer: "Noah Wilson", email: "noah@orbitlabs.co", product: "Scale", amount: 499, status: "Completed", date: "2026-10-05" },
  { id: "TX-10480", customer: "Mia Chen", email: "mia@lumina.ai", product: "Starter", amount: 79, status: "Pending", date: "2026-10-04" },
  { id: "TX-10479", customer: "Ethan Lee", email: "ethan@brightdesk.com", product: "Growth", amount: 249, status: "Completed", date: "2026-10-04" },
  { id: "TX-10478", customer: "Olivia Smith", email: "olivia@vertex.dev", product: "Scale", amount: 499, status: "Refunded", date: "2026-10-03" },
  { id: "TX-10477", customer: "Liam Brown", email: "liam@flowgrid.app", product: "Growth", amount: 249, status: "Completed", date: "2026-10-03" },
  { id: "TX-10476", customer: "Sophia Davis", email: "sophia@atlascrm.com", product: "Starter", amount: 79, status: "Completed", date: "2026-10-02" },
  { id: "TX-10475", customer: "James Miller", email: "james@metricly.io", product: "Scale", amount: 499, status: "Pending", date: "2026-10-02" },
  { id: "TX-10474", customer: "Isabella Garcia", email: "isabella@nova.co", product: "Growth", amount: 249, status: "Completed", date: "2026-10-01" },
  { id: "TX-10473", customer: "Lucas Martin", email: "lucas@stridehq.com", product: "Growth", amount: 249, status: "Completed", date: "2026-09-30" },
  { id: "TX-10472", customer: "Amelia Wilson", email: "amelia@northstar.io", product: "Scale", amount: 499, status: "Completed", date: "2026-09-29" },
  { id: "TX-10471", customer: "Benjamin Taylor", email: "ben@peakflow.dev", product: "Starter", amount: 79, status: "Refunded", date: "2026-09-28" },
  { id: "TX-10470", customer: "Harper Anderson", email: "harper@relay.ai", product: "Growth", amount: 249, status: "Completed", date: "2026-09-27" },
  { id: "TX-10469", customer: "Henry Thomas", email: "henry@signalbase.io", product: "Scale", amount: 499, status: "Completed", date: "2026-09-26" },
  { id: "TX-10468", customer: "Evelyn Moore", email: "evelyn@clearpath.co", product: "Growth", amount: 249, status: "Pending", date: "2026-09-25" },
  { id: "TX-10467", customer: "Daniel Jackson", email: "daniel@riseops.com", product: "Starter", amount: 79, status: "Completed", date: "2026-09-24" }
];

export const customers = [
  { id: 1, name: "Ava Morgan", email: "ava@northstar.io", plan: "Growth", spend: 4210, status: "Active", joined: "Jan 12, 2026" },
  { id: 2, name: "Noah Wilson", email: "noah@orbitlabs.co", plan: "Scale", spend: 7940, status: "Active", joined: "Feb 03, 2026" },
  { id: 3, name: "Mia Chen", email: "mia@lumina.ai", plan: "Starter", spend: 1180, status: "Active", joined: "Mar 21, 2026" },
  { id: 4, name: "Ethan Lee", email: "ethan@brightdesk.com", plan: "Growth", spend: 2980, status: "Active", joined: "Apr 09, 2026" },
  { id: 5, name: "Olivia Smith", email: "olivia@vertex.dev", plan: "Scale", spend: 5340, status: "Inactive", joined: "Apr 17, 2026" }
];