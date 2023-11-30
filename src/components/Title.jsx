export default function Title({ children }) {
  return (
    <>
      <h1 className="title">{children}</h1>
      <div className="title-underline"></div>
    </>
  );
}
