import './App.css';
import List from './comps/List';
import { useState } from 'react';
import addIcon from './assets/add.svg'

function App() {
  const [items, setItems] = useState([
    {
      name: 'Pizza',
      calorie: 24
    },
    {
      name: 'Momos',
      calorie: 35
    }
  ])


  const [name, setName] = useState('')
  const [calorie, setCalorie] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setItems([...items, 
      {
        name, 
        calorie,
      }
    ])
    setName('')
    setCalorie('')
  }

  return (
    <div className='container'>
      <h1 className='list'>Calorie List</h1>
      <div className='todo'>
        <form action="" onSubmit={ handleSubmit }>
          <label htmlFor="name"> Title </label>
          <input
            type='text'
            placeholder='Type a Food name'
            name='name'
            value={ name }
            onChange={e => setName(e.target.value)}
            required
          />
          <label htmlFor='calorie'> Calorie </label>
          <input
            type='number'
            placeholder='Give Calorie count'
            name='calorie'
            value={ calorie }
            onChange={e => setCalorie(e.target.value)}
            required
          />
          <button type='submit'>
            <img src={ addIcon } alt="addIcon" />
          </button>
        </form>
      </div>
      <div className="calorie-list">
        {items.length ? (
          items.map((item, index) => (
            <List
              item={ item }
              key={ index }
              id={ index }
              items={ items }
              setItems={ setItems }
            />
          ))
        ) : (
          <h2 className='empty'>Add Items</h2>
        )
        }
      </div>
    </div>
  );
}

export default App;