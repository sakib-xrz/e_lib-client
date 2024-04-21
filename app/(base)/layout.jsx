import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function BaseLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-216px)]">{children}</div>
      <Footer />
    </>
  );
}
