import React from 'react';
import * as Components from './DonateStyle';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import  { useState } from 'react';


function Donate() {
    const url = 'http://localhost:6050/api/Donors';
    const url1 = 'http://localhost:6050/api/signIn';
    const [DonorIn, setDonorIn] = useState({ email_address: '', password: '' });

    const [Donor, setDonor] = useState({

            donor_id:  null,
            first_name: "",
            last_name: "",
            birthday: "",
            address: "",
            phone_number: "",
            email_address: "",
            password: ""
    });  
    const [signIn, toggle] = React.useState(true);

      const navigate = useNavigate();

    const handleChange = (e) => {
        setDonor({ ...Donor, [e.target.id]: e.target.value });
    };

   
    const handleChangeIn = (e) => {
        setDonorIn({ ...DonorIn, [e.target.name]: e.target.value });
    };
  
    const handleSubmit1 = (e) => {
        console.log(DonorIn);
        e.preventDefault();
        axios
            .post(url1, DonorIn)
            .then((response) => {
                console.log(response.data);
                const token = response.data.token;
                localStorage.setItem("token", token);
                
                // Check if the role is 'user'
                console.log(response.data)
                if (response.data.donor.role === 'user') {
                
                navigate('/profileView', { replace: true });
                } else {
                    navigate('/donate');
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post(url, Donor)
        .then((response) => {
            console.log(response);
            alert(response.data.msg);
        })
        .catch((error) => {
            alert(error.response.data.msg);
            console.error("There was an error!", error);
        });
    };



     return(
        <Components.Container style={{ height: '500px', overflowY: 'scroll' }}>
        <Components.SignUpContainer   signinIn={signIn}>
             <Components.Form onSubmit={handleSubmit}>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='donor_id' onChange={handleChange}  id="donor_id"/>
                     <Components.Input type='text' placeholder='First Name' onChange={handleChange}  id="first_name"/>
                     <Components.Input type='text' placeholder='Last Name'onChange={handleChange}   id="last_name"/>
                     <Components.Input type='text' placeholder='Birthday Date'onChange={handleChange}  id="birthday"/>
                     <Components.Input type='email' placeholder='Email' onChange={handleChange}      id="email_address"/>
                     <Components.Input type='password' placeholder='Password'onChange={handleChange}   id="password"/>
                     <Components.Input type='number' placeholder='Phone Number'onChange={handleChange}  id=" phone_number" />
                     <Components.Input type='text' placeholder='Adress*' onChange={handleChange}  id="address" />
                   
                     <Components.Button >Sign up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>


             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={handleSubmit1}>
                      <Components.Title>Log in</Components.Title>
                      <Components.Input type='email' placeholder='Email'  onChange={handleChangeIn} name="email_address" />
                      <Components.Input type='password' placeholder='Password'  onChange={handleChangeIn}  name="password" />
                      <Components.GhostButton onClick={() => {
    toggle(true);
}}>
    Log In
</Components.GhostButton>

                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      
                  </Components.Form>
                  
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Log In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                       Welcome to our donation platform! Your support makes a positive impact
        on the community. Sign up to contribute and be a part of the positive
        change. Thank you for choosing our platform to make a difference.
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Join
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default Donate;
