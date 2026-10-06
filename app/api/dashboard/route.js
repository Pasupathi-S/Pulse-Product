import { NextResponse } from "next/server";
import { dashboardData } from "../../../lib/mockData";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 350));

  return NextResponse.json({
    success: true,
    data: dashboardData
  });
}