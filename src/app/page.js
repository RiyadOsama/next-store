// SSG

import GithubProfileServerSide from "@/components/organisms/GithubProfileServerSide";
import { Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Next Store Home Page",
};

function Home() {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-4 mb-0">Next Store</h1>
            <Link
              href="/products"
              className="btn btn-outline-danger"
              aria-label="Go to products"
            >
              <Store size={24} />
              <span className="ms-2">View Products</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 mx-auto">
          <div role="status">
            <GithubProfileServerSide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
