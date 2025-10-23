// ISR

import Interactions from "@/components/molecules/Interactions";
import { Eye } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "All Products",
  description: "Next Store — All Products Page",
};

async function getData() {
  let data = [];
  let error = null;

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_PRODUCT_API, {
      next: { revalidate: 21600 }, // Refetch Every 6 Hours
    });

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  return { data, error };
}

export default async function Page() {
  const { data, error } = await getData();

  return (
    <div className="container">
      <div className="text-center mb-5">
        <h1>All Products</h1>
        <p className="text-muted">This Page is Rendered using ISR</p>
      </div>

      {error ? (
        <div className="alert alert-danger text-center" role="alert">
          Error: {error}
        </div>
      ) : data.length === 0 ? (
        <div className="alert alert-secondary text-center" role="alert">
          No products found
        </div>
      ) : (
        <div
          className="row g-4 overflow-auto"
          style={{
            maxHeight: "70vh",
            scrollbarWidth: "thin",
          }}
        >
          {data.reverse().map((p) => (
            <div className="col-12 col-lg-6 mb-1" key={p.id}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{p.name}</h5>
                  </div>

                  <div className="d-flex gap-3 align-items-center">
                    <Link
                      href={`products/${p.id}`}
                      aria-label={`View details for ${p.name}`}
                    >
                      <Eye size={30} color="green" />
                    </Link>
                    <Interactions id={p.id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
