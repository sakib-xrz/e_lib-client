import Container from "@/components/shared/Container";
import Card from "./components/Card";

const Blog = () => {
  return (
    <Container>
      <div className="grid grid-cols-3">
        <div className="flex justify-center">
          <Card />
        </div>
        <div className="flex justify-center">
          <Card />
        </div>
        <div className="flex justify-center">
          <Card />
        </div>
      </div>
    </Container>
  );
};

export default Blog;
