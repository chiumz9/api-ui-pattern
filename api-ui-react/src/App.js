import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from './components/Navbar.jsx'

function App() {
  const [foods, setFoods] = useState()


  const getFoods = async () => {
    let db = await axios("https://food-api-chiu.herokuapp.com/api/foods")
    console.log(db.data)
    setFoods(db.data)
  }

  useEffect(()=>{
    getFoods()  
  }, [])

  return (
    <div className="App">
      <div className='Header'>
        <h1>List of Random Foods</h1>
      </div>
      <div className='Body'>
        <div className='food-container'>
          {(foods && foods.map((item) => (
            <div className='image-detail'>
              <div className='image-title'><h3>{item.title}</h3></div>
              <div><img className='image' src={item.image}/></div>
              <div className='image-summary'>
                <button>
                  <a href={item.sourceUrl}> More Info</a>
                </button></div>
            </div>
          )))}
        </div>
      </div>
      <div className='Footer'>
      </div>
    </div>
  );
}

export default App;
