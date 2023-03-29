import { useState } from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Palette {...seedPalettes[4]} />
    </div>
  );
}

export default App;
