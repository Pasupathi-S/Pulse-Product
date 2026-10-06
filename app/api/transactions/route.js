import { NextResponse } from "next/server";
import { transactions } from "../../../lib/mockData";

export async function GET(request) {
  await new Promise((resolve) => setTimeout(resolve, 450));

  const { searchParams } = new URL(request.url);
  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const limit = Math.min(10, Math.max(1, Number(searchParams.get("limit") || 6)));
  const search = (searchParams.get("search") || "").trim().toLowerCase();
  const status = searchParams.get("status") || "all";
  const sort = searchParams.get("sort") || "date-desc";

  let result = [...transactions];

  if (search) {
    result = result.filter((item) =>
      [item.customer, item.email, item.product, item.id]
        .join(" ")
        .toLowerCase()
        .includes(search)
    );
  }

  if (status !== "all") {
    result = result.filter((item) => item.status.toLowerCase() === status.toLowerCase());
  }

  result.sort((a, b) => {
    if (sort === "amount-desc") return b.amount - a.amount;
    if (sort === "amount-asc") return a.amount - b.amount;
    if (sort === "customer-asc") return a.customer.localeCompare(b.customer);
    return new Date(b.date) - new Date(a.date);
  });

  const total = result.length;
  const start = (page - 1) * limit;
  const paginated = result.slice(start, start + limit);

  return NextResponse.json({
    success: true,
    data: paginated,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.max(1, Math.ceil(total / limit))
    }
  });
}