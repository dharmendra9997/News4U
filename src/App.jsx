
import Navbar from './Components/Navbar';
import './App.css';
import NewsBoard from './Components/NewsBoard';
import { useState } from 'react';

function App() {
  const [category,setCategory]=useState('general')
  const [search,setSearch]=useState("")
  return (
    <>
    <Navbar setCategory={setCategory} setSearch={setSearch}/>
    <NewsBoard category={category} search={search}/>
    </>
  );
}

export default App;
