import { useState } from "react";
import { ParamForm } from "./components/ParamForm";
import { Result } from "./components/Result";
import { vacationMap } from "./data/vacationMap";
import "./App.css";

const keyOf = ({ season, budget, continent, activity, style }) =>
  [season, budget, continent, activity, style].join("|");

export function App() {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (values) => {
    const key = keyOf(values);
    setAnswer(vacationMap[key] || "No match found.");
  };

  return (
    <div className="app">
      <h1 className="title">Vacation Planner</h1>
      <ParamForm onSubmit={handleSubmit} />
      <Result answer={answer} />
    </div>
  );
}
