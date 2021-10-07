import {
  EmailOutlined,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #dceeee;

  ${mobile({flexDirection: "column"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  margin-bottom: 20px;
`;
const Desc = styled.p`
  margin: 20px 0;
  font-weight: 500;
`;
const SocialLink = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({display: "none"})}

`;
const Title = styled.h2`
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
const Payment = styled.img``;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FLASH.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialLink>
          <SocialIcon color="darkblue">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="crimson">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="blue">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="tomato">
            <Pinterest />
          </SocialIcon>
        </SocialLink>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Ho Chi Minh, Viet Nam
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +84 964903991
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} />
          davidtanpro1998@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
