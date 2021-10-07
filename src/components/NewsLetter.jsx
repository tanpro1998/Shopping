import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 30px 0 20px 0;
  font-size: 20px;
  font-weight: 300;

  ${mobile({textAlign: "center"})}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 0.5px solid gray;

  ${mobile({width: "80%"})}

`;
const Input = styled.input`
  flex: 8;
  outline: none;
  padding-left: 20px;
  border: none;
`;
const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
