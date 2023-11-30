import { useState } from 'react';
import Title from './components/Title';
import data from './data';

const App = () => {
  const [menu, setMenu] = useState(data);

  return (
    <main className="menu">
      <Title>our menu</Title>
    </main>
  );
};
export default App;
