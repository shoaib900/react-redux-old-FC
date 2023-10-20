import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incNumber,decNumber } from "./components/redux/actions/action";

// import Uncontroled from './components/Uncontroled'

const App  = () => {
  const mystate = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();



  return (
    <div>
      {/* <Uncontroled /> */}

      <div className="card">
      <button onClick={() => dispatch(incNumber())} >Increase number</button>
      <p>{mystate}</p>
      <button onClick={() => dispatch(decNumber())} >Decrease number</button>
      </div>

    </div>
  );
};

export default App;
