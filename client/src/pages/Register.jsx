import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { register } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

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
  /* flex-wrap: wrap; */
`;

const Input = styled.input`
  /* flex: 1; */
  width: 300px;
  padding: 10px;
  margin: 20px 10px 0 0;

  ${mobile({ width: "250px" })}
`;

const Agree = styled.p`
  font-size: 14px;
  margin: 20px 0;

  ${mobile({ textAlign: "center" })}
`;

const Button = styled.button`
  width: 40%;
  padding: 10px 15px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password, confirmPassword });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Agree>
            By creating an account, i agree to the processing of my personal
            data in accordance with me <b>PRIVACY POLICY</b>
          </Agree>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
