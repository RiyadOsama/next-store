"use client";

import { SquarePen, Trash } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";

function Interactions({ id }) {
  async function handleDelete() {
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });

      if (!res.ok) throw new Error("Failed to delete product");

      toast.success("Product deleted successfully", {
        position: "top-right",
        theme: "light",
      });
    } catch (error) {
      toast.error("Something went wrong while deleting the product", {
        position: "top-right",
        theme: "light",
      });
    }
  }

  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <Link href={`/products/add?id=${id}`}>
        <SquarePen size={25} color="blue" />
      </Link>

      <button
        onClick={handleDelete}
        style={{
          background: "none",
          border: "none",
          padding: 0,
        }}
      >
        <Trash size={25} color="red" />
      </button>
    </div>
  );
}

export default Interactions;
