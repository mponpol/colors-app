import { useState } from 'react';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

function Navbar({
  level,
  setLevel,
  format,
  openSnackbar,
  setOpenSnackbar,
  handleFormatChange,
}) {
  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={setLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={openSnackbar}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed to {format.toUpperCase()}</span>
        }
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </nav>
  );
}

export default Navbar;
