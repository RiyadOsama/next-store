import { getData, setData } from "@/lib/db/data.js";
import { NextResponse } from "next/server";

// Get All
export async function GET() {
  const products = await getData();

  return NextResponse.json(products, { status: 200 });
}

// Create One
export async function POST(req) {
  const body = await req.json();
  const product = { id: Date.now(), ...body };

  const products = await getData();
  products.push(product);
  await setData(products);

  return NextResponse.json(products, { status: 200 });
}
