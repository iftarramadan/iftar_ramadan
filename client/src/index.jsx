import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import Foods from "./components/Foods.jsx"
import Fooddetails from "./components/Fooddetails.jsx"
// import { CreateData } from "./components/CreateData.jsx";



const App = () => {
  const [data,setData]=useState([]) 
  const [togler,setTogler]=useState(false) 
  const mekla =()=>{
    setTogler(!togler)
  }
  
  const getAll=()=>{
    axios.get('http://localhost:3000/api/food/getAll').then((result)=>{
      setData(result.data)
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getAll()
    },[togler])

  const [view, setView] = useState('Foods')
  const changeView = (option) => {
    setView(option)
  }

  const renderView = () => {
    if (view === "Foods") {
      return <Foods data={data}  mekla={mekla}/>;
    } else if ((view === "CreateData")){
      return <CreateData data={data}  mekla={mekla}/>
    }
    else {
      return <Fooddetails />;
    }
  }
  return (
    <div>
      <div className="nav">
        <span className="logo"
          onClick={() => changeView('Foods')}>
          Iftar Ramadan
        </span>
        <input type="text" placeholder="search Food" />
        <input type="button" value="submit" />
        <span className={view === 'Foods'
          ? 'nav-selected'
          : 'nav-unselected'}
          onClick={() => changeView('Foods')}>
          See all Foods
        </span>
        <span className={view === 'CreateData'
          ? 'nav-selected'
          : 'nav-unselected'}
          onClick={() => changeView('CreateData')}>
          Create new Food
        </span>
      </div>

      <div className="main">
        {renderView()}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("nour"));
