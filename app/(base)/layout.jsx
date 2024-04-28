import GlobalAuthGuard from "@/components/hoc/GlobalAuthGuard";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function BaseLayout({ children }) {
  return (
    <GlobalAuthGuard>
      <Navbar />
      <div className="min-h-[calc(100vh-224px)]">{children}</div>
      <Footer />
    </GlobalAuthGuard>
  );
}
