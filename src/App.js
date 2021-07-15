import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [memes, setMemes] = useState([]);

  const getMemes = async () => {
    try {
      const data = await axios.get('https://meme-api.herokuapp.com/gimme/40')
      const res = await data.data.memes
      setMemes(res)
      console.log(res)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMemes()
  }, [])

  return (
    <div className='container'>
      <h1 className='heading'>Meme Generator</h1>
      <div className='cards'>
        {memes.map((meme, index) => (
          <div className='card' key={ index }> 
            <img src={ meme.preview[2] } alt={ meme.author }/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
