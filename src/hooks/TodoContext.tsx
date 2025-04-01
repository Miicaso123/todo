import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Todo } from '../types';

// Тип для контекста
interface TodoContextType {
  todos: Todo[];
  filteredTodos: Todo[];
  filter: 'all' | 'active' | 'completed';
  remainingTasks: number;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  clearCompleted: () => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

// Создаём контекст
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Провайдер
export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const remainingTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        filter,
        setFilter,
        addTodo,
        toggleTodo,
        clearCompleted,
        remainingTasks,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

// Хук для использования контекста
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};
