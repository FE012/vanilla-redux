import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";

function Home() {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state); //toDo -> toDos로 바꿈
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          // console.log(toDo) ->  {text: 'asd', id: 1673080728258}
          <ToDo {...toDo} key={toDo.id} />
          //unique에러가 뜨니 key={toDo.id} 값을 추가해줌.
        ))}
      </ul>
    </>
  );
}

export default Home;
