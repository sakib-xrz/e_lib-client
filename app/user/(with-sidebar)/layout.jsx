import Container from "@/components/shared/Container";
import Sidebar from "./components/Sidebar";

const UserLayoutWithSidebar = ({ children }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="hidden bg-white md:w-1/5 lg:block">
          <Sidebar />
        </div>
        <div className="w-full lg:w-4/5">
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  );
};

export default UserLayoutWithSidebar;
