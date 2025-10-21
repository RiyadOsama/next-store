import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/organisms/Header";
import ToastContainerWrapper from "@/components/atoms/ToastContainerWrapper";
import BootstrapJsWrapper from "@/components/atoms/BootstrapJsWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <ToastContainerWrapper />
        <BootstrapJsWrapper />
      </body>
    </html>
  );
}
