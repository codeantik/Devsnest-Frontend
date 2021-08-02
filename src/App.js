import Form from "./components/Form";
import Card from "./components/Card";
import ToggleTheme from "./components/ToggleTheme";
import { useSelector } from 'react-redux'
import './App.css'

function App() {

  const theme = useSelector(state => state.theme)

  const root = document.querySelector('#root')
  if(theme) {
    document.documentElement.classList.add('dark')
    root.setAttribute('backgroundColor', '#000')
    // document.documentElement.classList.add('dark-theme')

  }
  else {
    document.documentElement.classList.remove('dark')
    root.setAttribute('backgroundColor', '#fff')
    // document.documentElement.classList.add('dark-theme')

  }


  return (
    <div className='app container mx-auto dark:bg-black'>
      <ToggleTheme />
      <Form />
      <Card />
    </div>
  );
}

export default App;
