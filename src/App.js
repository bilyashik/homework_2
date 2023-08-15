import React, { useState } from 'react';
import './App.css';

function App() {
  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('blue');

  const swapColors = () => {
    setColor1(color2);
    setColor2(color1);
  };

  return (
    <div className="App">
      <div
        className="square"
        style={{ backgroundColor: color1 }}
        onClick={swapColors}
      ></div>
      <div
        className="square"
        style={{ backgroundColor: color2 }}
        onClick={swapColors}
      ></div>
    </div>
  );
}

export default App;
