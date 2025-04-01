jest.mock('../src/hooks/TodoContext', () => ({
  useTodo: jest.fn(),
}));

import React from 'react';
import { render, screen } from '@testing-library/react';
import { useTodo } from '../src/hooks/TodoContext';
import TodoList from '../src/components/TodoList';
import { act } from '@testing-library/react';

test('renders todo list', async () => {
  (useTodo as jest.Mock).mockReturnValue({
    filteredTodos: [{ id: 1, text: 'Тестовое задание', completed: false }],
    toggleTodo: jest.fn(),
  });

  await act(async () => {
    render(React.createElement(TodoList));
  });

  await expect(screen.findByText('Тестовое задание')).resolves.toBeInTheDocument();
});



