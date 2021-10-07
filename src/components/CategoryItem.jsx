import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ height: "20vh" })}
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  color: white;
`;
const Button = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  background-color: white;
  border: none;
  font-weight: 600;
  color: gray;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <InfoContainer>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </InfoContainer>
      </Link>
    </Container>
  );
};

export default CategoryItem;
