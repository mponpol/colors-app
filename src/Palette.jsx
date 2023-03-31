import { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox background={color[format]} name={color.name} />
  ));
  const changeFormat = evt => {
    setFormat(evt.target.value);
  };
  return (
    <div className="Palette">
      <Navbar
        level={level}
        setLevel={setLevel}
        handleChange={changeFormat}
        format={format}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  );
}

export default Palette;
