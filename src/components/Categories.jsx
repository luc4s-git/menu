export default function Button({ categories }) {
  const categoriesMapping = categories.map((category) => {
    return (
      <button type="button" className="btn" key={category}>
        {category}
      </button>
    );
  });

  return <>{categoriesMapping}</>;
}
