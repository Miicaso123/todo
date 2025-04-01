import React from 'react';
import { useTodo } from '../hooks/TodoContext';
import '../pages/Home.css';

const TodoFooter: React.FC = () => {
  const { remainingTasks, clearCompleted } = useTodo();

  return (
    <div className="footer">
      <span>{remainingTasks} задач осталось</span>
      <button className="clear-btn" onClick={clearCompleted}>
        Очистить выполненные
      </button>
    </div>
  );
};

export default TodoFooter;
