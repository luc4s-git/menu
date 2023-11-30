import MenuItem from './MenuItem';

export default function Menu({ menu }) {
  const menuMapping = menu.map((item) => {
    return <MenuItem key={item.id} {...item} />;
  });

  return <>{menuMapping}</>;
}
