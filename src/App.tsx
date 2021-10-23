import axios from 'axios';
import { useState } from 'react';
import { Practice1 } from './practices/Practice1';
import { Practice2 } from './practices/Practice2';
import { Practice3 } from './practices/Practice3';
import { Practice4 } from './practices/Practice4';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { typeList } from './practices/typeList';
import './styles.css';
import { Todo } from './Todo'

export default function App() {
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);  
    console.log(res.data);  
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userid} />
      ))}
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
    </div>
  );
};