import React from 'react';
import { TodoProvider } from '../hooks/TodoContext';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import TodoFilters from '../components/TodoFilters';
import TodoFooter from '../components/TodoFooter';
import '../pages/Home.css';

const Home: React.FC = () => {
  return (
    <TodoProvider>
      <div className="home-container">
        <h1>todos</h1>
        <TodoInput />
        <TodoFilters />
        <TodoList />
        <TodoFooter />
      </div>
    </TodoProvider>
  );
};

export default Home;
