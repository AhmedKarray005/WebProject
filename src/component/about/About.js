import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/619-removebg-preview.png"
import img1 from "../images/logo.png"

import "./about.css"
import Team from "../home/team/Team"
import Footer from "../common/footer/Footer";

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
          <Heading title='Discover About DonnorConnect' subtitle='' />

<p>In our Tunisian community, people who are willing to donate to charity (money, food, clothes, school supplies ...) face different challenges. A donator may not know which nonprofit organization (NPO) is collecting which item he is willing to donate, and if the organization is devoted to the cause he is willing to donate.
<br />
 Also, a donator may lack the effort, time or transport means to bring its contribution to the NPO’s office. As a solution, we thought about creating an intermediate system between NPOs and donors..</p>


<p>From the donator’s perspective, the program provides the person with the possibility to list the product to donate, select the pick-up location and his availability (date and time) among other specifications. From the NPO’s viewpoint, the organization can check the people nearby willing to donate and send a request regarding picking up the donation. As of receiving the request, the donator can accept or decline the donation based on the information provided by the NPO on its profile and other considerations. So, the program will make it easier for people to donate and the lack of effort motivates them to donate more. On the other side, it gives NPOs access to more people and, therefore more donations.</p>
 </div>
          
          <div className='right row'>
            <img src={img1} alt='' />
          </div>
        </div>
        <div>    
            <Team />
</div>
<Footer />

      </section>
    </>
  )
}

export default About
