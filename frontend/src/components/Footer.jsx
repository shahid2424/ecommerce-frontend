import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;
const DESC = styled.p`
    margin: 20px 0px;

`;
const SocialContainer = styled.div`
   display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height:40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
`;
const Center = styled.div`
    flex:1;
    padding:20px;
`;

const Title = styled.h3`
   margin-bottom: 30px;
`;

const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;
const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`;
const Payment = styled.img`
   width: 50%;
`;

 const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo> SHAHID.</Logo>
            <DESC>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos nostrum explicabo, voluptatem optio placeat distinctio nesciunt tempore eius nisi adipisci illum, reprehenderit libero totam reiciendis ratione magni animi id pariatur!
            </DESC>
            <SocialContainer>
                <SocialIcon color='385999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon  color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title> Useful Links </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>  622 Dixie Path , South Tobinchester 98336</ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +91 7700118811 </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>  Contact@shahid</ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}
export default Footer