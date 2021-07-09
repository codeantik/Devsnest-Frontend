import './App.css';
import List from './comps/List';
import Board from './comps/Board';

function App() {
  const data = [
    { name: 'Pizza', cal: 56 },
    { name: 'Burger', cal: 63 },
    { name: 'Coke', cal: 34},
    { name: 'Brownie', cal: 40},
    { name: 'Fried Rice', cal: 84},
    { name: 'Momos', cal: 97},
    { name: 'Cake', cal: 20}
  ]
  return (
    <div className='container'>
      <div className='chess-board'>
        <Board />
      </div>
      <div className='calorie-list'>
        <div className='instructions'>
          <h1>Instructions</h1>
          <ul>
            <li>Build a container</li>
            <li>Create a separate function and use it as a component</li>
            <li>Pass props 'calorie and food' and call it main component</li>
          </ul>
        </div>
        <h1 className='list'>Calorie List</h1>
        <div className='cal-list'>
          <List data={ data } />
        </div>
      </div>
    </div>
  );
}

export default App;
