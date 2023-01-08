import { createStore } from "redux"; //1

const ADD = "ADD"; //4
const DELETE = "DELETE";

export const addToDo = (text) => {
  //6
  return {
    type: ADD,
    text,
  };
};
export const deleteTodo = (id) => {
  //7
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  //3
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer); //2

// store.subscribe();  -> 지금은 사용하지 않을거임

export default store; //5
