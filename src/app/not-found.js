import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="d-flex justify-content-center align-items-center"
      style={{ height: "85vh" }}
      role="main"
      aria-labelledby="not-found-title"
    >
      <div className="text-center p-4">
        <h1 id="not-found-title" className="display-4 fw-bold">
          404
        </h1>
        <p className="lead mb-4">
          Page not found — the resource may have been moved or removed.
        </p>
        <Link
          href="/"
          className="btn btn-dark"
          aria-label="Navigate to homepage"
        >
          Go to homepage
        </Link>
      </div>
    </main>
  );
}
