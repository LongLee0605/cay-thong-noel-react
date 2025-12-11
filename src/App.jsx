import { useState } from 'react';
import MagicChristmas from './MagicChristmas';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="page">
      <MagicChristmas started={started} onStart={() => setStarted(true)} />
    </div>
  );
}

export default App;


