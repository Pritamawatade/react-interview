import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  // Add todo immutably
  const addTodo = () => {
    if (!todo.trim()) return; // Prevent adding empty todos
    setTodos([...todos, todo]);
    setTodo(''); // Clear input after adding
  };

  // Remove todo by its index
  const removeTodo = (indexToRemove: number) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Todo App</h2>

      <input 
        type="text" 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)} 
        placeholder="Enter a todo..."
      />
      <button onClick={addTodo} style={{ marginLeft: '8px' }}>Add Todo</button>

      {todos.length > 0 && (
        <ul>
          {todos.map((t, index) => (
            <li key={index} style={{ marginTop: '8px' }}>
              {t}{' '}
              <button 
                onClick={() => removeTodo(index)} 
                style={{ marginLeft: '10px' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;