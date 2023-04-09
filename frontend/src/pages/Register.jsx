import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
         url("https://img.freepik.com/free-photo/young-attractive-dark-haired-woman-with-short-haircut-with-lot-shopping-bags_295783-12429.jpg?w=996&t=st=1673355278~exp=1673355878~hmac=5e7f278bbb380b9b2d76098ca7efba7cf8c02c6f0e0191f64a116653c7910b08") 
         center;
         background-size: cover;
         display: flex;
         align-items: center;
         justify-content: center;
`;
const Wrapper = styled.div`
   width: 40%;
   padding: 20px;
   background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width:40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


export const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processig of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}
