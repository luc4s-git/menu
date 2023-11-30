export default function MenuItem({ id, title, category, price, img, desc }) {
  return (
    <div className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <h5>{title}</h5>
      </div>
    </div>
  );
}
