"use client";

import { SessionProvider } from "next-auth/react";

function NextAuthProdider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProdider;
