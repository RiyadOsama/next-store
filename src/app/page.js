// SSG

import { Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Next Store Home Page",
};

function Home() {
  return (
    <div className="container">
      <div className=" d-flex justify-content-evenly align-items-center">
        <h1>Next Store</h1>
        <Link href="/products">
          <Store size={35} color="red" />
        </Link>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Image
          src={"/next.svg"}
          alt="Next.js log"
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
}

export default Home;
