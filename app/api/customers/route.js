import { NextResponse } from "next/server";
import { customers } from "../../../lib/mockData";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({
    success: true,
    data: customers
  });
}