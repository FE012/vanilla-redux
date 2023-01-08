import React from "react";
import { useDispatch } from "react-redux"; //2. import 해오기
import { Link } from "react-router-dom";
import { deleteTodo } from "../store";

function ToDo({ id, text }) {
  const dispatch = useDispatch(); //1.useDispatch()로 dispatch생성하기

  const onBtnClick = () => {
    //3. 함수를 생성해서 dispatch로 액션함수 인자에 넣기
    dispatch(deleteTodo(id));
  };

  return (
    // 4. onClick 이벤트함수에 onBtnClick함수 넣기
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

export default ToDo;
