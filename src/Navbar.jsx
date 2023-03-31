import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

function Navbar({ level, setLevel }) {
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
    </nav>
  );
}

export default Navbar;

// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import './Navbar.css';

// function Navbar({ level, setLevel }) {
//   <nav className="Navbar">
//     <div className="logo">
//       <a href="#">reactcolorpicker</a>
//     </div>
//     <div className="slider-container">
//       <span>Level: {level}</span>
//       <div className="slider">
//         <Slider
//           defaultValue={level}
//           min={100}
//           max={900}
//           step={100}
//           onChange={setLevel}
//         />
//       </div>
//     </div>
//   </nav>;
// }

// export default Navbar;
