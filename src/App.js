import './App.css';
import { userNameChange, emailChange } from './actions'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const inputChange = useSelector(state => state.inputChange)
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Redux Counter</h1>
      <div className="input">
        <h2>Input</h2>
        <input 
         type="text"
         name='username' 
         placeholder='Username' 
         onChange={e => dispatch(userNameChange(e.target.value))}
        />
        <input 
         type='text' 
         name='email' 
         placeholder='Email' 
         onChange={e => dispatch(emailChange(e.target.value))}
        />
      </div>
      <div className="data">
        <h2>Data</h2>
        <p>Username: {inputChange.username}</p>
        <p>Email: {inputChange.email}</p>
      </div>
    </div>
  );
}

export default App;
