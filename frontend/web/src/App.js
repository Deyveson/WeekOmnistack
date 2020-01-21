import React, { useState } from 'react';

// Conceitos Basicos de React 
// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente Pai passa para o filho 
// Estado: Informações mantidas pelo componente (Lembrar: Imutalidade)

// 'useState' função do react para deixa as propriedades reativas no html 

function App() {

  const [counter, setCounter] = useState(0);
  // utilizando o conceito de desistruturação JavaScript

  function incrementCounter(){
    setCounter(counter + 1)
  }

  return (
    <>
      <h1> Contador: {counter}</h1>
      <button onClick={incrementCounter}>+</button>
    </>
  );

}

export default App;
