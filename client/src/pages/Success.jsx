import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  padding: 10px 15px;
  background-color: teal;
  color: white;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const SubTitle = styled.p`
  font-size: 18px;
  text-align: center;
`;

const Back = styled.a`
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 20px;
  cursor: pointer;
`;

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
      <Image src="https://i.dailymail.co.uk/1s/2020/03/10/00/25759784-0-image-a-25_1583799582199.jpg" />
      <Title>Successfull.</Title>
      <SubTitle>
        Your order is being prepared. Thanks for choosing Flash Shop.
      </SubTitle>
      <Back href="/">Return Home Page</Back>
    </Container>
  );
};

export default Success;
