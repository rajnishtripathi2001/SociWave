import React from 'react'
import './Terms.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer' 
import { Helmet } from 'react-helmet'

export default function Terms() {
  return (
    <div>
      <Helmet>
        <title>Terms & Conditions | Sociwave</title>
        <meta
          name="description"
          content="Read the terms and conditions of Sociwave before using our services."
        />
      </Helmet>
        <Navbar/>
        <section className='term'>
            <center><h2><span>Terms & Conditions for Sociwave</span></h2></center>
            

            <b>Last Updated: <span>21 November 2023</span></b> <br /><br />

            <p><span>Welcome to Sociwave</span> ("we," "us," or "our"). Please read these terms and conditions carefully before using our website and services.</p>
        
            <b>1. Acceptance of Terms</b> <br />
            <p>By accessing or using <span>Sociwave</span> and its services, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use our website.</p>
            
            <b>2. Services Offered</b><br /> 
            <p><span>Sociwave</span> provides social media marketing services, including but not limited to Instagram likes, comments, followers, and YouTube likes, comments, and subscribers. Users can deposit money into their personal wallet on the website to purchase these services.</p>
            
            <b>3. User Accounts</b><br />
            <ol type='a'>
                <li><span>Registration:</span> To use certain features of the website, you may be required to create a user account. You agree to provide accurate, current, and complete information during the registration process.</li>
                <li><span>Personal Wallet:</span> Users can deposit funds into their personal wallet on <span>Sociwave</span>. Funds deposited into the wallet are non-refundable and can only be used to purchase services on the website.</li>
            </ol>
            
            <b>4. User Responsibilities</b><br />
            <ol type='a'>
                <li><span>Compliance:</span> Users are responsible for complying with all applicable laws and regulations when using our services.</li>
                <li><span>Use of Services:</span> Users agree not to use our services for any illegal or unauthorized purpose, including but not limited to violating the terms of service of the social media platforms.</li>
            </ol>
            
            <b>5. Payments and Refund</b><br />
            <ol type='a'>
                <li><span>Payments:</span> Users can make payments to deposit funds into their personal wallet using the available payment methods on <span>Sociwave</span>.</li>
                <li><span>Refunds:</span> All payments are non-refundable. Refunds will not be provided for unused services or funds in the user's personal wallet.</li>
            </ol>

            <b>6. Termination</b><br />
            <p>We reserve the right to terminate or suspend your account and access to our services at our discretion, without prior notice or liability.</p>

            <b>7. Changes to Terms and Conditions</b><br />
            <p>We may update these terms and conditions from time to time. The date of the latest revision will be indicated at the top of this page. Continued use of the website after any changes constitutes acceptance of the new terms.</p>

            <b>8. Contact Information</b><br />
            <p>If you have any questions or concerns about these terms and conditions, please contact us at <b><span>Sociwave.official@gmail.com</span></b></p>
        </section>
        <Footer/>
      <br />
    </div>
  )
}
