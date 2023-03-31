import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';
import './App.css';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedPalettes[4])} />
    </div>
  );
}

export default App;
