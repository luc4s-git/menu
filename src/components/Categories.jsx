export default function Button({ categories, menuFiltering }) {
  const categoriesMapping = categories.map((category) => {
    return (
      <button
        type="button"
        className="btn"
        key={category}
        onClick={() => menuFiltering(category)}
      >
        {category}
      </button>
    );
  });

  return <>{categoriesMapping}</>;
}
