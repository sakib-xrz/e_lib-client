import UserAuthGuard from "@/components/hoc/UserAuthGuard";

export default function UserLayout({ children }) {
  return <UserAuthGuard>{children}</UserAuthGuard>;
}
