import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  opacity: 0.8;

  ${mobile({ width: "80%" })}
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 20px 10px 0 0;

  ${mobile({ width: "250px" })}
`;

const AnotherLink = styled.a`
  font-size: 14px;
  margin-top: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  width: 40%;
  padding: 10px 15px;
  margin-top: 20px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetch, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetch}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}

          <AnotherLink href="#">
            DO NOT YOU, REMEMBER YOUR PASSWORD?
          </AnotherLink>
          <AnotherLink href="/register">CREATE A NEW ACCOUNT</AnotherLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
// Test pull
// tao cung tao conflick
