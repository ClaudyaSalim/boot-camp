import React from 'react';
import IndexPractice from './views/2502006341';

function App() {
  const handleClick = () => {
    alert('Clicked');
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
