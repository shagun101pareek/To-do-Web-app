import './TodoItem.css';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <h3 className="todo-title">{todo.title}</h3>
        <p className="todo-date">Created: {todo.createdAt}</p>
      </div>
      <button 
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;