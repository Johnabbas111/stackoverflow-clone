import React from 'react'
import './RightSideBar.css'
import comment from '../../assests/comment.svg'
import pen from '../../assests/pen.svg'
import blackLogo from '../../assests/blackLogo.svg'


const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blogs</h4>
      <div className='right-sidebar-div-1'>
        <img src={pen} alt="pen" width='18'/>
        <p>Observalibity is key to the future of software (and your DevOps carrier)</p>
      
      <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" width='18'/>
        <p>Podcast 374: how valuable is your screen name</p>
        
      </div>
      </div>
      
      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <img src={comment} alt="pen" width='18'/>
        <p>Reviw queue workflows-Final release......</p>
     
      <div className='right-sidebar-div-2'>
        <img src={comment} alt="pen" width='18'/>
        <p>Please Welcomed Valued Associates:#958-V2Blast #958-Spencer-G</p>
      </div>
      <div className='right-sidebar-div-2'>
        <img src={blackLogo} alt="pen" width='18'/>
        <p>OutDated Answers:accepted answer is now unpinned on Stack Overflow</p>
      </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
         <p>38</p>
        <p>Why was this spam flag declined,yet the question marked as spam?</p>
      
      <div className='right-sidebar-div-2'>
        <p>20</p>
        <p>what is the best course of action when a user has high enough rep to...</p>
      </div>
      <div className='right-sidebar-div-2'>
        <p>14</p>
        <p>Is a link to the "How to ask"help page a useful comment</p>

      </div>
      </div>
    </div>
  )
}

export default Widget;