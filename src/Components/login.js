import React, { Component } from 'react';
import { act } from 'react-dom/test-utils';
import styled from "styled-components";


class Login extends Component {
    state = {  } 
    render() { 
        return (
       <Container>
           <Nav>
               <a href="/">
                    <img src="/images/login-logo.svg" alt=""></img>   
                </a>
           </Nav>
       </Container>
        );
    }
}
 
const Container= styled.div`
padding:0px;
`;
const Nav=styled.nav`

`;

export default Login;

