import React from 'react'
import Autenticador from './components/provider/Auth';
import Rotas from './components/Rotas';


function App() {
  return (
    <div className="App">
      <Autenticador>
        <Rotas/>
      </Autenticador>
    </div>
  );
}

export default App;
