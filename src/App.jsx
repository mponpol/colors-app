import { Routes, Route } from 'react-router-dom';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>PALETTE LIST GOES HERE</h1>} />
      <Route path="/palette/:id" element={<h1>INDIVIDUAL PALETTE</h1>} />
    </Routes>
    // <div>
    //   <Palette palette={generatePalette(seedPalettes[4])} />
    // </div>
  );
}

export default App;
