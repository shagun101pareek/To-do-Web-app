import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, { ...newTodo, id: Date.now() }];
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const sortTodos = (order) => {
    const sorted = [...filteredTodos].sort((a, b) => {
      return order === 'asc' 
        ? a.title.localeCompare(b.title) 
        : b.title.localeCompare(a.title);
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

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="app">
      <Sidebar 
        isExpanded={isSidebarExpanded}
        onToggle={toggleSidebar}
      />
      <Navbar 
        onSearch={searchTodos} 
        onMenuToggle={toggleSidebar}
        isMobile={isMobile}
      />
      <main className={`main-content ${isSidebarExpanded ? 'expanded' : ''}`}>
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