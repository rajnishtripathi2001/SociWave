import React from 'react'
import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

export default function Contact() {

  function submitContact(){
    alert("conatct sub");
  }

  return (
    <div>
      <Navbar/>
      <div className='contactPage'>
        <div className='xxx'>

          <button onClick={submitContact}>submit</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
