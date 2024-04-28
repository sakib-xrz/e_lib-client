import UserAuthGuard from "@/components/hoc/UserAuthGuard";

export default function UserLayout({ children }) {
  return (
    <UserAuthGuard>
      <h2>User Navbar Here</h2>
      {children}
      <h2>User Footer Here</h2>
    </UserAuthGuard>
  );
}
