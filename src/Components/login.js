import React, { Component } from 'react';
import { act } from 'react-dom/test-utils';
import styled from "styled-components";
import '../App.css';


class Login extends Component {
    state = {  } 
    render() { 
        return (
       <Container>
           <Nav>
               <a href="/">
                    <img src="/images/login-logo.svg" alt=""></img>   
                </a>
                <div>
                    <join className="join">
                        Join now 
                    </join>
                    <SignIn>
                        Sign In
                    </SignIn>
                </div>
           </Nav>
           <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg"></img>
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google.svg"/>
                        Sign in with Google
                    </Google>
                </Form>
           </Section>
       </Container>
        );
    }
}
 
const Container= styled.div`
padding:0px;

`;
const Nav=styled.nav`
max-width:1128px;
margin:auto;
padding:12px 0 16px;
display:flex;
align-items:center;
position:relative;
justify-content:space-between;
flex-wrap:nowrap;

&>a{
    width:135px;
    height:34px;
    @media(max-width:768px){
        padding:0 5px;
    }
}

`;

const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
display:flex;
align-content:center;
min-height:700px;
padding-bottom:138px;

padding:60px 0;
position:relative;
flex-wrap:wrap;
width:100%;
max-width:1128px;
align-items:center;
margin:auto;
@media (max-width:768px){
   margin:auto;
   min-height:0px;
    
}


`;

const Hero = styled.div`
    width:100%;
    h1{
        padding-bottom:0;
        width:55%;
        font-size:56px;
        color:#2977c9;
        font-weight:200;
        line-height:70px;
        @media (max-width:768px){
            text-align:center;
            font-size:20px;
            width:100%;
            line-height:2;
        }


    }
    img{
        z-index:-1;
        width:700px;
        position:absolute;
        bottom:-2;
        right:-150px;
        @media (max-width:768px) {
            top:230px;
            width:initial;
            position:initial;
            height:initial;
        }
    }
`;
const Form =styled.div``;
const Google = styled.button``;


export default Login;

