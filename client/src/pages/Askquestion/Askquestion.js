import React,{useState}from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import './Askquestion.css'
import {askQuestion} from '../../actions/question'
   



const Askquestion=()=>{
  const[questionTitle,setQuestionTitle]=useState('')
  const[questionBody,setQuestionBody]=useState('')
  const[questionTag,setQuestionTag]=useState('')
  const dispatch =useDispatch()
  const User=useSelector(state=>(state.currentUserReducer))
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(askQuestion({questionTitle,questionBody,questionTag,userPosted:User.result.name},navigate))
    //console.log({questionTitle,questionBody,questionTag})
  }
  const handleEnter=(e)=>{
    if(e.key==='Enter'){
      setQuestionBody(questionBody+"\n")

    }

  }
  
  
  return (
  
    <>
    
           
           <div className='ask-question'>
            <div className="ask-ques-container">
              <h1>ask a public questions</h1>
         
              <form onSubmit={handleSubmit}>
                <div className='ask-form-container'>
                  <label htmlFor='ask-ques-title'>
                    <h4>Title</h4>
                    <p>Be specific and ask question you're asking a question to another person</p>
                    <input type ='text' placeholder='e.g. Is there an R function for finding the index of an element in a vector' onChange={(e)=>{setQuestionTitle(e.target.value)}} id="ask-ques-title"/>
                  </label>
                  <label htmlFor='ask-ques-body'>
                    <h4>Body</h4>
                    <p>Include All the information someone need to answer yours question</p>
                    <textarea name =""  onChange={(e)=>{setQuestionBody(e.target.value)}} onKeyPress={handleEnter}id="ask-ques-body" cols="30" rows="10"></textarea>
                  </label>
                  <label htmlFor='ask-ques-tags'>
                    <h4>Tags</h4>
                    <p>Add up to 5 tags to describe what your question is about</p>
                    <input type ='text' onChange={(e)=>{setQuestionTag(e.target.value)}}  id="ask-ques-tags"/>
                  </label>
                </div>
                <input type ="submit" value="Rewiew your question" className='review-btn'/>

              </form>
            </div>
           
            
           </div>
    
     


    
  

    </>
  )

}


  



export default Askquestion;