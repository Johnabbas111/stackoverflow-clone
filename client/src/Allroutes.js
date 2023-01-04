import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import Askquestion from './pages/Askquestion/Askquestion'
import DisplayQuestions from './pages/Questions/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
const Allroutes=()=>{
    return(
        <div>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/Auth' element ={<Auth/>}/>
                <Route exact path='/Questions' element={<Questions/>}/>
                <Route exact path='/Askquestion' element ={<Askquestion/>}/>
                <Route exact path='/Questions/:id' element ={<DisplayQuestions/>}/>
                <Route exact path='/Tags' element={<Tags/>}/>
                <Route exact path='/Users' element={<Users/>}/>
                

                

            </Routes>

        </div>
    )

}
export default Allroutes;