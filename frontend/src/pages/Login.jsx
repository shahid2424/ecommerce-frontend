import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
         url("https://img.freepik.com/free-photo/portrat-trendy-feminine-girl-posing-with-shopping-bags-from-store-credit-card-paying-contactl_1258-87458.jpg?w=900&t=st=1673361327~exp=1673361927~hmac=fec85cd65a790823a56e7ddf8c7618a20840a1f76a56d45d69f3358a1e0c1d4a") 
         center;
         background-size: cover;
         display: flex;
         align-items: center;
         justify-content: center;
`;
const Wrapper = styled.div`
   width: 25%;
   padding: 20px;
   background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width:40%;
    margin: 10px 0px ;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.div`
   margin: 5px 0px;
   font-size: 12px;
   text-decoration: underline;
   cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}
export default Login