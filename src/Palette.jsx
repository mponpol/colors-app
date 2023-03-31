import { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox background={color[format]} name={color.name} key={color.id} />
  ));
  const changeFormat = evt => {
    setFormat(evt.target.value);
    setOpenSnackbar(true);
  };
  return (
    <div className="Palette">
      <Navbar
        level={level}
        setLevel={setLevel}
        handleFormatChange={changeFormat}
        format={format}
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
}

export default Palette;
