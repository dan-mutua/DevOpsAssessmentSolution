import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_URL}/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (title) => {
    try {
      await axios.post(`${API_URL}/todos`, { title });
      fetchTodos();
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`${API_URL}/todos/${id}`, { completed: !completed });
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Todo App</h1>
        <TodoForm onSubmit={addTodo} />
        <TodoList 
          todos={todos} 
          onToggle={toggleTodo} 
          onDelete={deleteTodo} 
        />
      </div>
    </div>
  );
}

export default App;