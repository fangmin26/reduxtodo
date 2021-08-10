
import { useState } from "react";
//useDispatch:액션디스패치, useSelector:상태조회
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleClick = (id) =>
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  if (!todos || !todos.length) {
    return <p>No Todos</p>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li onClick={() => handleClick(todo.id)}>{todo.label}</li>
      ))}
    </ul>
  );
};
const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = (event) => setNewTodo(event.target.value);
  const handleClick = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });
  return (
    <>
      <input value={newTodo} onChange={handleChange} type="text" />
      <button onClick={handleClick}>ADD TODO</button>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-Header">Todos</header>
      <Todos />
      <TodoInput />
    </div>
  );
}

export default App;
