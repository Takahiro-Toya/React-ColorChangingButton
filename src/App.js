import React from 'react';
import buttonImage from './images/sample.png';
import './App.css';
import MyButton from './MyButton';

function App() {
  return (
    <div>
      {/* first color -the original color */}
      <MyButton firstColor="#E6E6FA" secondColor="#FF7256" img={buttonImage} />
    </div>
  );
}

export default App;
