import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slice";
import Question from "./components/Question";

const App = () => {
  const dispatch = useDispatch();
  console.log(`useSelector loaded  successfully`);
  console.log(`dispatch loaded  successfully`);
  return (
    <>
      <div>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
      <Question />
    </>
  );
};

export default App;
