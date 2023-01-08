import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const toDos = useSelector((state) => state);
  console.log(toDos);
  const id = useParams().id; //클릭된 리스트의 아이디값을 가져옴
  console.log(id);

  const toDoText = toDos.find((todo) => todo.id === parseInt(id)); //아이디가 같은것을 찾아냄
  console.log(toDoText);

  return (
    <>
      <h1>{toDoText?.text}</h1>
      <h5>Created at: {toDoText?.id}</h5>
    </>
  );
}

export default Detail;
