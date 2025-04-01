import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { TodoContext } from '../hooks/TodoContext'; 
import { Todo } from '../types'; 

test('renders todo list', () => {
  const mockTodos: Todo[] = [
    { id: 1, text: 'Тестовое задание', completed: false }
  ];

  const mockContextValue = {
    todos: mockTodos,
    filteredTodos: mockTodos,
    filter: 'all' as 'all', 
    remainingTasks: 1, 
    addTodo: jest.fn(),
    toggleTodo: jest.fn(),
    deleteTodo: jest.fn(),
    setFilter: jest.fn(),
    clearCompleted: jest.fn()
  };

  render(
    <TodoContext.Provider value={mockContextValue}>
      <TodoList />
    </TodoContext.Provider>,
  );

  screen.debug(); 

  expect(screen.getByText('Тестовое задание')).toBeInTheDocument();
});



