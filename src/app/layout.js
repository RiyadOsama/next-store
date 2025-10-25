import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/organisms/NavBar";
import ToastContainerWrapper from "@/components/atoms/ToastContainerWrapper";
import BootstrapJsWrapper from "@/components/atoms/BootstrapJsWrapper";
import NextAuthProdider from "@/context/NextAuthProdider";

export const metadata = {
  title: "Next Store",
  description: "A Progressive Web App built with Next.js",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-512x512.png",
  },
};

export const viewport = {
  theme_color: "#d3e3fd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <NextAuthProdider>
          <Header />
          {children}
          <ToastContainerWrapper />
          <BootstrapJsWrapper />
        </NextAuthProdider>
      </body>
    </html>
  );
}
