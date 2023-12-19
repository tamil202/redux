import React from "react";
import data from "../data/data";
import { useSelector } from "react-redux";

const Question = () => {
  const count = useSelector((state) => state.counter.count);
  const datas = data[count];

  return (
    <>
      <ul key={datas.id}>
        <h1>{datas.question}</h1>
        {datas.options.map((item) => (
          <li key={datas.id}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Question;
