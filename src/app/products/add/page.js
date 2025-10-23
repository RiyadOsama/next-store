"use client";

// import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// export const dynamic = "force-dynamic";

export default function ProductFormPage() {
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");

  const [id, setId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    setId(productId);
  }, []);

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    if (!id) return;
    (async function () {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct({
          name: data.name || "",
          price: data.price || 0,
          description: data.description || "",
        });
      } catch {
        toast.error("Error loading product data", {
          position: "top-right",
          theme: "light",
        });
      }
    })();
  }, [id]);

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(id ? `/api/products/${id}` : "/api/products", {
        method: id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!res.ok) throw new Error("Failed to save product");

      toast.success(
        id ? "Product updated successfully" : "Product added successfully",
        {
          position: "top-right",
          theme: "light",
        }
      );

      setProduct({ name: "", price: 0, description: "" });
    } catch {
      toast.error("Something went wrong while saving the product", {
        position: "top-right",
        theme: "light",
      });
    }
  }

  return (
    <div className="container">
      <div className="text-center mb-5">
        <h1>{id ? "Edit Product" : "Add Product"}</h1>
        <p className="text-muted">This Page is Rendered using CSR</p>
      </div>

      <div className="card shadow-sm border-0 p-4">
        <h5 className="mb-4">Product Form</h5>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product name"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter product price"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Enter product description"
              name="description"
              value={product.description}
              onChange={handleChange}
              style={{ resize: "none" }}
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">
            {id ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
