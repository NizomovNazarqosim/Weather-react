import { useEffect, useState} from 'react';
import './App.css';

import Sunny from "./img/sunny.png"
import Snowwy from "./img/snowy.jfif"
import Rainny from "./img/rainny.png"
import Cloudy from "./img/cloudy.jfif"



function App() {


  const apiKey ="1b3e6b94aeeeb3d53ade85cfe9901c6d" 
  

  let [data, setData] = useState(null)
  
 
  const [search, setSearch] = useState('tashkent')
 


    useEffect(() => {
      
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error))
   
  
    }, [search])
     
 


  

  return (
    <div className="App">
      <form action="" onSubmit={(e) => {e.preventDefault(); setSearch(e.target[0].value)}}>
           <input className='input' type="search" placeholder='Type....'   />
      </form>
    
   { data  &&  (
  <div className='country'>
    <h2 className='name'>{data.name}</h2>

   {(data?.weather[0]?.description) === "overcast clouds" ? (<img className='img' src={Cloudy}/>) : (<img className='img' src={Sunny}/>) }

    <p className='tem'>Temperature:<span>{data?.main?.temp}℃</span></p>
    <p className='des'>Description: <span>{data?.weather[0]?.description}</span></p>
    <p className='time'>Timezone: <span>{data?.timezone}</span></p>
  
   <div className="detail">
      <div className='humidity-wraper wrap'>
        <p className='hum'>Humidity: <span>{data?.main?.humidity}</span></p>
      </div>
  
      <div className='pressure-wrapper wrap'>
       <p className='pres'>Pressure: <span>{data.main.pressure}</span></p>  
      </div>
  
      <div className='wind-wrapper wrap'>
       <p className='wind'>Wind speed:<span>{data.wind.speed}</span></p>
      </div>
         
    </div>
 </div>
   )}

   
 

   </div>
     
  
  );
}

export default App;
