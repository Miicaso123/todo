import React, { useState } from 'react';
import { useTodo } from '../hooks/TodoContext';
import '../pages/Home.css';

const TodoInput: React.FC = () => {
  const { addTodo } = useTodo();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Что нужно сделать?"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TodoInput;
