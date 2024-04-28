import UserAuthGuard from "@/components/hoc/UserAuthGuard";
import Navbar from "@/components/shared/Navbar";

export default function UserLayout({ children }) {
  return (
    <UserAuthGuard>
      <Navbar />
      {children}
    </UserAuthGuard>
  );
}
