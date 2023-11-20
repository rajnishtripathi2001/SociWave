import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function FAQ() {
  return (
    <div>
      <Navbar />
      <section className="term">
        <center>
          <h2>Frequently Asked Questions (FAQ)</h2>
        </center>
        <b>1. What services does SociWave offer?</b><br /><br />
        <p>
          SociWave provides a range of social media marketing services,
          including Instagram likes, comments, followers, as well as YouTube
          likes, comments, and subscribers.
        </p>
        <b>2. How does the personal wallet system work?</b><br /><br />
        <p>
          Our personal wallet system allows users to deposit funds into their
          accounts on SociWave. These funds can then be used to
          purchase services on the website. The personal wallet is a convenient
          and secure way to manage transactions.
        </p>
        <b>3. How do I create an account on SociWave?</b><br /><br />
        <p>
          To create an account, click on the <span>"Sign Up"</span> button and follow the
          registration process. You will need to provide accurate information
          during registration. Once your account is created, you can access
          various features on our platform.
        </p>
        <b>4. Are the funds in my personal wallet refundable?</b> <br />
        <br />
        <p>
          No, funds deposited into your personal wallet are non-refundable.
          Please ensure that you review your choices carefully before making a
          deposit.
        </p>
        <b>5. What payment methods are accepted?</b> <br />
        <br />
        <p>
          We accept payments through <span>UPI and Other Methods</span>. You can find the
          available payment methods in the payment section of your account.
        </p>
        <b>6. How long does it take for services to be delivered?</b> <br />
        <br />
        <p>
          The delivery time for services may vary. It depends on the type and
          quantity of the service you have purchased. Average delivery time is <span>48 hours</span>.
        </p>
        <b>7. Is it safe to use SociWave services?</b><br /><br />
        <p>
          Yes, SociWave takes the privacy and security of your information
          seriously. We employ industry-standard security measures to protect
          your data. Additionally, we do not require your social media account
          passwords to provide our services.
        </p>
        <b>8. Can I use SociWave services for any social media account?</b><br /><br />
        <p>
          While our services are designed to work with a variety of social media
          accounts, it's important to review and comply with the terms of
          service of each platform. Using our services in violation of these
          terms may result in consequences for your social media accounts.
        </p>
        <b>9. How can I contact customer support?</b> <br /><br />
        <p>
          For any questions or concerns, you can reach out to our customer
          support team at <span>sociwave.official@gmail.com</span>. We strive to respond promptly to
          inquiries and provide assistance as needed.
        </p>
        <b>10. What happens if I violate the terms of service?</b> <br />
        <br />
        <p>
          Violation of our terms of service may result in the termination or
          suspension of your account. Please review our terms and conditions for
          more details on user responsibilities and consequences of
          non-compliance.
        </p>
      </section>
      <Footer/>

    </div>
  );
}
