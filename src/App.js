import React,{useState} from 'react';
import './App.css'
import Content from './components/Content';
import Header from './components/Header';
import Navbar from './components/Navbar';
import requests from './requests'


function App() {
  const [selectedOption,setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="App">
      <Header/>
      <Navbar setSelectedOption={setSelectedOption}/>
      <Content selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
