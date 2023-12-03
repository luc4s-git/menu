// Data
import data from './data';
// Hooks
import { useState } from 'react';
// Components
import Title from './components/Title';
import Menu from './components/Menu';
import Categories from './components/Categories';

const allCategories = [
  'all',
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  ),
];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const menuFiltering = (category) => {
    if (category === 'all') {
      setMenu(data);
      return;
    }

    const filter = menu.filter((item) => {
      return item.category === category;
    });

    setMenu((currentValue) => {
      const newValue = filter;
      return newValue;
    });
  };

  return (
    <main className="menu">
      <Title>our menu</Title>
      <div className="btn-container">
        <Categories
          categories={categories}
          menuFiltering={menuFiltering}
        ></Categories>
      </div>
      <section className="section-center">
        <Menu menu={menu}></Menu>
      </section>
    </main>
  );
};
export default App;
