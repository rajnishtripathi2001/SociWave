import React from 'react'
import './Blogs.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


export default function Blogs() {
  return (
    <section>
        <Navbar/>
        <section style={{marginTop:"10vh", height:"90vh", backgroundColor:"pink"}}>
          Blog page
        </section>


        <Footer/>
    </section>
  )
}
