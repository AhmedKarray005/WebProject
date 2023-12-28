import React from 'react';
import * as Components from './DonateStyle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Npo() {
  const url = 'http://localhost:6050/api/NPO';
  const url1 = 'http://localhost:6050/api/sign';
  const [NpoIn, setNPOIn] = useState({ email_address: '', password: '' });

  const [Npo, setNPO] = useState({
    NPO_id: "",
    Organization_name: "",
    foundation_date: "",
    address: "",
    phone_number: "",
    email_address: "",
    password: ""
  });
  const [signIn, toggle] = React.useState(true);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNPO({ ...Npo, [e.target.id]: e.target.value });
  };

  const handleChangeIn = (e) => {
    setNPOIn({ ...NpoIn, [e.target.name]: e.target.value });
  };

  const handleSubmit1 = (e) => {
    console.log(NpoIn);
    e.preventDefault();
    axios
      .post(url1, NpoIn)
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem("token", token);

        if (response.data.NPO.role === 'user') {
          navigate('/donation-page', { replace: true });
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, Npo)
      .then((response) => {
        console.log(response);
        alert(response.data.msg);
      })
      .catch((error) => {
        alert(error.response.data.msg);
        console.error("There was an error!", error);
      });
  };

    return (
        <div>
            <Components.Container style={{ height: '500px', overflowY: 'scroll' }}>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleSubmit}>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder=' NPO_id' onChange={handleChange} id="NPO_id" />
                        <Components.Input type='text' placeholder='Organisation Name ' onChange={handleChange} id='Organization_name' />
                        <Components.Input type='text' placeholder='Username' onChange={handleChange} id='username' />
                        <Components.Input type='text' placeholder='Foundation Date' id='foundation_date' onChange={handleChange} />
                        <Components.Input type='email' placeholder='Email' id='email_address' onChange={handleChange} />
                        <Components.Input type='password' placeholder='Password' id='password' onChange={handleChange} />
                        <Components.Input type='number' placeholder='Phone Number' id='phone_number' onChange={handleChange} />
                        <Components.Input type='text' placeholder='Adress' id='address' onChange={handleChange} />

                        <Components.Button>Sign up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleSubmit1}>
                        <Components.Title>Log in</Components.Title>
                        <Components.Input type='email' placeholder='Email' name='email_address' onChange={handleChangeIn} />
                        <Components.Input type='password' placeholder='Password' name='password' onChange={handleChangeIn} />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button>Log In</Components.Button>
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
                                Log in
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Welcome to our NPO platform! Sign up to amplify your cause, connect with supporters, and receive vital contributions to further your initiatives. Thank you for choosing our platform to strengthen your noble endeavors.
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Join
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>
    )
}

export default Npo;
