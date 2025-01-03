import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const fetchDefinition = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setDefinition(response.data[0].meanings[0].definitions[0].definition);
    } catch (error) {
      setDefinition("Definition not found");
    }
  };

  return (
    <div className="App">
      <h1>Mon Dictionnaire</h1>
      <input
        type="text"
        placeholder="Veuillez entrer un mot"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={fetchDefinition}>Rechercher</button>
      <p>{definition}</p>
    </div>
  );
}

export default App;
