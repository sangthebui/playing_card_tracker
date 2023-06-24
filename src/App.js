import { useState } from "react";
import "./App.css";

import { ReactComponent as AceC } from "./PlayingCard/CardImages/1c.svg";
import { ReactComponent as AceD } from "./PlayingCard/CardImages/1d.svg";
import { ReactComponent as AceH } from "./PlayingCard/CardImages/1h.svg";
import { ReactComponent as AceS } from "./PlayingCard/CardImages/1s.svg";

import { ReactComponent as TwoC } from "./PlayingCard/CardImages/2c.svg";
import { ReactComponent as TwoD } from "./PlayingCard/CardImages/2d.svg";
import { ReactComponent as TwoH } from "./PlayingCard/CardImages/2h.svg";
import { ReactComponent as TwoS } from "./PlayingCard/CardImages/2s.svg";

import { ReactComponent as ThreeC } from "./PlayingCard/CardImages/3c.svg";
import { ReactComponent as ThreeD } from "./PlayingCard/CardImages/3d.svg";
import { ReactComponent as ThreeH } from "./PlayingCard/CardImages/3h.svg";
import { ReactComponent as ThreeS } from "./PlayingCard/CardImages/3s.svg";

import { ReactComponent as FourC } from "./PlayingCard/CardImages/4c.svg";
import { ReactComponent as FourD } from "./PlayingCard/CardImages/4d.svg";
import { ReactComponent as FourH } from "./PlayingCard/CardImages/4h.svg";
import { ReactComponent as FourS } from "./PlayingCard/CardImages/4s.svg";

import { ReactComponent as FiveC } from "./PlayingCard/CardImages/5c.svg";
import { ReactComponent as FiveD } from "./PlayingCard/CardImages/5d.svg";
import { ReactComponent as FiveH } from "./PlayingCard/CardImages/5h.svg";
import { ReactComponent as FiveS } from "./PlayingCard/CardImages/5s.svg";

import { ReactComponent as SixC } from "./PlayingCard/CardImages/6c.svg";
import { ReactComponent as SixD } from "./PlayingCard/CardImages/6d.svg";
import { ReactComponent as SixH } from "./PlayingCard/CardImages/6h.svg";
import { ReactComponent as SixS } from "./PlayingCard/CardImages/6s.svg";

import { ReactComponent as SevenC } from "./PlayingCard/CardImages/7c.svg";
import { ReactComponent as SevenD } from "./PlayingCard/CardImages/7d.svg";
import { ReactComponent as SevenH } from "./PlayingCard/CardImages/7h.svg";
import { ReactComponent as SevenS } from "./PlayingCard/CardImages/7s.svg";

import { ReactComponent as EightC } from "./PlayingCard/CardImages/8c.svg";
import { ReactComponent as EightD } from "./PlayingCard/CardImages/8d.svg";
import { ReactComponent as EightH } from "./PlayingCard/CardImages/8h.svg";
import { ReactComponent as EightS } from "./PlayingCard/CardImages/8s.svg";

import { ReactComponent as NineC } from "./PlayingCard/CardImages/9c.svg";
import { ReactComponent as NineD } from "./PlayingCard/CardImages/9d.svg";
import { ReactComponent as NineH } from "./PlayingCard/CardImages/9h.svg";
import { ReactComponent as NineS } from "./PlayingCard/CardImages/9s.svg";

import { ReactComponent as TenC } from "./PlayingCard/CardImages/10c.svg";
import { ReactComponent as TenD } from "./PlayingCard/CardImages/10d.svg";
import { ReactComponent as TenH } from "./PlayingCard/CardImages/10h.svg";
import { ReactComponent as TenS } from "./PlayingCard/CardImages/10s.svg";

import { ReactComponent as JackC } from "./PlayingCard/CardImages/jc.svg";
import { ReactComponent as JackD } from "./PlayingCard/CardImages/jd.svg";
import { ReactComponent as JackH } from "./PlayingCard/CardImages/jh.svg";
import { ReactComponent as JackS } from "./PlayingCard/CardImages/js.svg";

import { ReactComponent as QueenC } from "./PlayingCard/CardImages/qc.svg";
import { ReactComponent as QueenD } from "./PlayingCard/CardImages/qd.svg";
import { ReactComponent as QueenH } from "./PlayingCard/CardImages/qh.svg";
import { ReactComponent as QueenS } from "./PlayingCard/CardImages/qs.svg";

import { ReactComponent as KingC } from "./PlayingCard/CardImages/kc.svg";
import { ReactComponent as KingD } from "./PlayingCard/CardImages/kd.svg";
import { ReactComponent as KingH } from "./PlayingCard/CardImages/kh.svg";
import { ReactComponent as KingS } from "./PlayingCard/CardImages/ks.svg";

const allCards = [
  AceS,
  AceC,
  AceD,
  AceH,

  KingS,
  KingC,
  KingD,
  KingH,

  QueenS,
  QueenC,
  QueenD,
  QueenH,

  JackS,
  JackC,
  JackD,
  JackH,

  TenS,
  TenC,
  TenD,
  TenH,

  NineS,
  NineC,
  NineD,
  NineH,

  EightS,
  EightC,
  EightD,
  EightH,

  SevenS,
  SevenC,
  SevenD,
  SevenH,

  SixS,
  SixC,
  SixD,
  SixH,
  FiveS,
  FiveC,
  FiveD,
  FiveH,

  FourS,
  FourC,
  FourD,
  FourH,

  ThreeS,
  ThreeC,
  ThreeD,
  ThreeH,

  TwoS,
  TwoC,
  TwoD,
  TwoH,
];

const visibilityState = allCards.map((_) => true);
const initialState = { deck: allCards, visibility: visibilityState };

function App() {
  const [state, setState] = useState(initialState);

  const resetDeck = () => {
    setState(initialState);
  };

  const filter = (index) => {
    setState(({ deck, visibility }) => {
      return {
        deck,
        visibility: visibility.map((value, idx) => {
          return idx === index ? false : value;
        }),
      };
    });
  };

  console.log(state);
  return (
    <div className="App">
      <button className="btnReset" onClick={resetDeck}>
        Reset
      </button>
      <div className="lowCards">
        {state.deck.map((CardSrc, index) => {
          const visibility = state.visibility[index] ? "visible" : "hidden";
          return (
            <CardSrc
              width={"100%"}
              height={"80%"}
              key={`cardSmall-${index}`}
              onClick={() => filter(index)}
              style={{ visibility: visibility }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
