import Palette from './Palette';
import seedPalettes from './seedPalettes';
import './App.css';

function App() {
  return (
    <div>
      <Palette {...seedPalettes[4]} />
    </div>
  );
}

export default App;
