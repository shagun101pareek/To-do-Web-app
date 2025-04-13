import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setFilteredTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos.filter(todo => 
      filteredTodos.some(ft => ft.id === todo.id)
    ));
  };

  const sortTodos = (order) => {
    const sorted = [...filteredTodos].sort((a, b) => {
      if (order === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setFilteredTodos(sorted);
  };

  const searchTodos = (query) => {
    if (!query.trim()) {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter(todo =>
        todo.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  };

  return (
    <div className="app">
      <Sidebar />
      <Navbar onSearch={searchTodos} />
      <main className="main-content">
        <div className="container">
          <h1>Todo List</h1>
          <TodoForm onAddTodo={addTodo} />
          <TodoList 
            todos={filteredTodos} 
            onDeleteTodo={deleteTodo}
            onSortTodos={sortTodos}
          />
        </div>
      </main>
    </div>
  );
}

export default App;