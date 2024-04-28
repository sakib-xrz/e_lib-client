import AdminAuthGuard from "@/components/hoc/AdminAuthGuard";

export default function AdminLayout({ children }) {
  return (
    <AdminAuthGuard>
      <h2>Admin Navbar Here</h2>
      {children}
    </AdminAuthGuard>
  );
}
