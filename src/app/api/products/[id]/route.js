import { getData, setData } from "@/lib/db/data.js";
import { NextResponse } from "next/server";

// Get One
export async function GET(req, { params }) {
  const { id } = await params;
  const products = await getData();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}

// Delete One
export async function DELETE(req, { params }) {
  const { id } = await params;
  const products = await getData();

  const index = products.findIndex((p) => p.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  products.splice(index, 1);

  await setData(products);

  return NextResponse.json(products, { status: 200 });
}

// Update One
export async function PATCH(req, { params }) {
  const { id } = await params;
  const products = await getData();

  const index = products.findIndex((p) => p.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  const body = await req.json();

  products[index] = { ...products[index], ...body };

  await setData(products);

  return NextResponse.json(products[index], { status: 200 });
}

// Replace One
export async function PUT(req, { params }) {
  const { id } = await params;
  const products = await getData();

  const index = products.findIndex((p) => p.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  const body = await req.json();

  products[index] = { id: products[index].id, ...body };

  await setData(products);

  return NextResponse.json(products[index], { status: 200 });
}
