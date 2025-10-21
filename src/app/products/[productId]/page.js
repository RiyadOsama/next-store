// SSR

import Interactions from "@/components/molecules/Interactions";

export async function generateMetadata({ params }) {
  const { productId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PRODUCT_API}/${productId}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return {
    title: data.name,
    description: data.description,
  };
}

async function getProductById(id) {
  let product = null;
  let error = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API}/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    product = await res.json();
  } catch (err) {
    error = err.message;
  }

  return { product, error };
}

export default async function Page({ params }) {
  const { productId } = await params;
  const { product, error } = await getProductById(productId);

  return (
    <div className="container">
      <div className="text-center mb-5">
        <h1>Product Details</h1>
        <p className="text-muted">This Page is Rendered using SSR</p>
      </div>

      {error ? (
        <div className="alert alert-danger text-center" role="alert">
          Error: {error}
        </div>
      ) : !product ? (
        <div className="alert alert-secondary text-center" role="alert">
          No product found
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title mb-3">{product.name}</h5>
                <p className="card-text text-muted mb-4">
                  {product.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold fs-5">$ {product.price}</span>
                  <Interactions id={productId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
