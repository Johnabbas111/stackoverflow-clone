import {BrowserRouter as Routes} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Allroutes from './Allroutes';
import { fetchAllQuestions } from './actions/question';
import {fetchAllUsers} from './actions/users'



function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <>
   
        <div className="App">
       
 
          
        
         
          <Routes>
          <Allroutes/>
          <Navbar/>
       

          </Routes>
        
        </div>

   
    
    </>
   
  );
}

export default App;
