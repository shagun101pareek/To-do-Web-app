import { useState } from 'react';
import { format } from 'date-fns';
import './TodoForm.css';

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('Title cannot be empty');
      return;
    }
    
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      createdAt: format(new Date(), 'yyyy-MM-dd HH:mm'),
      completed: false
    };
    
    onAddTodo(newTodo);
    setTitle('');
    setError('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={error ? 'error' : ''}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;