export default function BaseLayout({ children }) {
  return (
    <>
      <div className="min-h-[calc(100vh-216px)]">{children}</div>
    </>
  );
}
