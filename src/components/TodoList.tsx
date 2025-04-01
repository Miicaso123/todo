import React from 'react';
import { useTodo } from '../hooks/TodoContext';
import '../pages/Home.css';

const TodoList: React.FC = () => {
  const { filteredTodos, toggleTodo } = useTodo();
  console.log(filteredTodos);

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="todo-checkbox"
            />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

