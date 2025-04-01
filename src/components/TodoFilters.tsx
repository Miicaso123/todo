import React from 'react';
import { useTodo } from '../hooks/TodoContext';
import '../pages/Home.css';

const TodoFilters: React.FC = () => {
  const { filter, setFilter } = useTodo();

  return (
    <div className="filters">
      <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
        Все
      </button>
      <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>
        Активные
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}>
        Завершённые
      </button>
    </div>
  );
};

export default TodoFilters;
