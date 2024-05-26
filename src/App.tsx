import React, { useEffect, useState } from 'react';
import './App.css';


/*
DOCS

- Caratteri Base (alfabeto minuscolo): 26
- Maiuscole: 26
- Numeri: 0...9 -> 10
- Caratteri Speciali: 42 (su tastiera layout ITA)

- TOTALE = 26 * 2 + 10 + 42 = 104

CALCOLI

Per trovare le combinazioni possibili (DISPOSIZIONI SEMPLICI) si usa la formula k^n, dove k è il punteggio (numero di char) e n è la lunghezza
*/


function App() {
  const [punteggio, setPunteggio] = useState<number>(26);
  const [carattSpeciali, setCarattSpeciali] = useState<boolean>(false);
  const [maiuscole, setMaiuscole] = useState<boolean>(false);
  const [numeri, setNumeri] = useState<boolean>(false);
  const [lunghezza, setLunghezza] = useState<number>();

  const [combinazioni, setCombinazioni] = useState<number>(0);

  const calcola_combinazioni = (): void => {
    if (lunghezza) setCombinazioni(Math.pow(punteggio, lunghezza));
  }

  return (
    <div className="App">
      <h1>Calcolo password possibili</h1>
      <fieldset>
        <legend>Caratteristiche</legend>
        <label>
          <input
            type="checkbox"
            name="caratt_speciali"
            checked={carattSpeciali}
            onClick={() => {
              if (carattSpeciali) setPunteggio(punteggio - 42);
              else setPunteggio(punteggio + 42);

              setCarattSpeciali(!carattSpeciali);
            }}
          />
          Caratteri Speciali
        </label>
        <label>
          <input
            type="checkbox"
            name="maiuscole"
            checked={maiuscole}
            onClick={() => {
              if (maiuscole) setPunteggio(punteggio - 26);
              else setPunteggio(punteggio + 26);

              setMaiuscole(!maiuscole);
            }}
          />
          Maiuscole
        </label>
        <label>
          <input
            type="checkbox"
            name="numeri"
            checked={numeri}
            onClick={() => {
              if (numeri) setPunteggio(punteggio - 10);
              else setPunteggio(punteggio + 10);

              setNumeri(!numeri);
            }}
          />
          Numeri
        </label>
      </fieldset>
      <input className="input_normale" type="number" placeholder='Lunghezza' onChange={(e: any) => setLunghezza(e.target.value)}/>
      <button onClick={() => calcola_combinazioni()}>Calcola</button>
      <h2>Combinazioni: {combinazioni}</h2>
    </div>
  );
}

export default App;
