export default function MenuItem({ id, title, category, price, img, desc }) {
  return (
    <div className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
      </div>
    </div>
  );
}
