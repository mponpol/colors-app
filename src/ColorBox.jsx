import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
import { useState } from 'react';
import { useEffect } from 'react';

function ColorBox({ background, name }) {
  const [copied, setCopied] = useState(false);

  function changeCopyState() {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && 'show'}`}
        ></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
