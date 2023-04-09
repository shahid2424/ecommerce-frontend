import React from 'react'
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';
import {mobile} from "../pages/responsive.js"
import { NavLink } from 'react-router-dom';


const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
    padding: 0px 20px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
   `;
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
`
const Language= styled.span`
    font_size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center
    margin-left:25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`;

const Center = styled.div`
 flex: 0;
 text-align: center;
 `;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "20px"})}
`;

const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 ${mobile({flex:2, justifyContent: "center"})}
 `;

 const MenuItem = styled.div`
     font-size: 14px;
     cursor:  pointer;
     margin-left: 25px;
     ${mobile({fontSize: "10px", marginLeft:"5px"})}
 `

export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>         
                </SearchContainer>
            </Left>
            <Center><Logo>shahid</Logo></Center>
            <Right>
                <NavLink to={"/register"}>
                <MenuItem>REGISTER</MenuItem>
                </NavLink>
                <NavLink to={"/login"}>
                <MenuItem>SIGN IN</MenuItem>
                </NavLink>
                <NavLink to={"/cart"}>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                   <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
                </NavLink>
            </Right>
        </Wrapper>
    </Container>
  )
}
export default Navbar;