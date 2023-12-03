// Data
import data from './data';
// Hooks
import { useState } from 'react';
// Components
import Title from './components/Title';
import Menu from './components/Menu';
import Categories from './components/Categories';

const App = () => {
  const [menu, setMenu] = useState(data);

  // Categories shenanigans
  const uniqueCategories = new Set(
    menu.map((item) => {
      return item.category;
    })
  );
  const categoriesArray = ['all', ...uniqueCategories];
  const [categories, setCategories] = useState(categoriesArray);
  // Categories shenanigans

  const menuFiltering = (category) => {
    const filter = menu.filter((item) => {
      return item.category === category;
    });

    setMenu(filter);
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
