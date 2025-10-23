import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/organisms/NavBar";
import ToastContainerWrapper from "@/components/atoms/ToastContainerWrapper";
import BootstrapJsWrapper from "@/components/atoms/BootstrapJsWrapper";
import NextAuthProdider from "@/context/NextAuthProdider";

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
