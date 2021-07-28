import './App.css';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <div className="container">
      <h1>Redux Todo List</h1>
      <AddTodo />
      <ListTodos />
    </div>
  );
}

export default App;
