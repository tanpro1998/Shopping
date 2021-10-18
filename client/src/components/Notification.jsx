import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: darkgreen;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const Notification = () => {
  return (
    <Container>Super Sale! Free Shipping on Orders over $100</Container>
  );
};

export default Notification;
