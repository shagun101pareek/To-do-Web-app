import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onSortTodos }) => {
  const [sortOrder, setSortOrder] = useState('none');

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    onSortTodos(newOrder);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <h2>My Tasks</h2>
        <button 
          className="sort-button"
          onClick={handleSort}
        >
          Sort {sortOrder === 'asc' ? 'Z-A' : 'A-Z'}
        </button>
      </div>
      
      {todos.length === 0 ? (
        <div className="empty-state">
          <p>No tasks found. Add a new task to get started!</p>
        </div>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onDelete={onDeleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;