// Data
import data from './data';
// Hooks
import { useState } from 'react';
// Components
import Title from './components/Title';
import Menu from './components/Menu';
import Button from './components/Button';

const App = () => {
  const [menu, setMenu] = useState(data);

  const categories = new Set(
    menu.map((item) => {
      return item.category;
    })
  );

  const categoriesArray = ['all', ...categories];

  console.log(categoriesArray);

  return (
    <main className="menu">
      <Title>our menu</Title>
      <div className="btn-container">
        <Button>filler</Button>
      </div>
      <section className="section-center">
        <Menu menu={menu}></Menu>
      </section>
    </main>
  );
};
export default App;
