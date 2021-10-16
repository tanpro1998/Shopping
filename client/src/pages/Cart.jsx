import styled from "styled-components";
import Navbar from "../components/Navbar";
import Notification from "../components/Notification";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { userRequest } from "../request";
import { useHistory } from "react-router";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  border: 2px solid black;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-weight: 600;
  cursor: pointer;
`;

const TopText = styled.div`
  ${mobile({ display: "none" })}
`;

const Text = styled.span`
  margin: 0 10px;
  text-decoration: underline;
  font-weight: 500;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: lightgray;
  height: 1px;
  border: none;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 30%;
  height: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 10px;
`;

const NameDetail = styled.span``;

const IdDetail = styled.span``;

const ColorDetail = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const SizeDetail = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  cursor: pointer;
  font-weight: 600;
`;

const Count = styled.span`
  margin: 0 5px 0;
  font-size: 20px;

  ${mobile({ margin: "0 10px" })}
`;

const Price = styled.span`
  font-size: 30px;
  font-weight: 100;
`;

const Summary = styled.div`
  flex: 1;
`;

const SummaryWrapper = styled.div`
  height: 90%;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const SummaryTitle = styled.h2`
  font-weight: 400;
  margin-bottom: 50px;
  text-align: center;
`;

const SummaryDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
`;

const SummaryDetail = styled.span``;

const SummaryPrice = styled.span``;

const Button = styled.button`
  font-size: 16px;
  padding: 15px;
  background-color: black;
  color: white;
  border: none;
  width: 100%;
  cursor: pointer;
  margin-top: 50px;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const request = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total,
        });
        history.push("/success", { data: res.data });
      } catch (err) {}
    };
    stripeToken && request();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      <Notification />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <Link to="/">
            <TopButton bgColor="white" color="black">
              CONTINUE SHOPPING
            </TopButton>
          </Link>
          <TopText>
            <Text>Shopping Bag ({quantity})</Text>
            <Text>Your Wishlist (2)</Text>
          </TopText>
          <TopButton bgColor="black" color="white">
            CHECK NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <NameDetail>
                      <b>Product: </b>
                      {product.title}
                    </NameDetail>
                    <IdDetail>
                      <b>ID: </b>
                      {product._id}
                    </IdDetail>
                    <ColorDetail color={product.color}></ColorDetail>
                    <SizeDetail>
                      <b>Size: </b>
                      {product.size}
                    </SizeDetail>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <Amount>
                    <Remove />
                    <Count>{product.quantity}</Count>
                    <Add />
                  </Amount>
                  <Price>$ {product.price * product.quantity}</Price>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryWrapper>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryDetails>
                <SummaryDetail>Subtotal</SummaryDetail>
                <SummaryPrice>$ {cart.total}</SummaryPrice>
              </SummaryDetails>
              <SummaryDetails>
                <SummaryDetail>Estimated Shipping</SummaryDetail>
                <SummaryPrice>$ 5.0</SummaryPrice>
              </SummaryDetails>
              <SummaryDetails>
                <SummaryDetail>Shipping Discount</SummaryDetail>
                <SummaryPrice>-$ 5.0</SummaryPrice>
              </SummaryDetails>
              <SummaryDetails style={{ fontSize: "24px", padding: "0 5px" }}>
                <SummaryDetail>
                  <b>Total</b>
                </SummaryDetail>
                <SummaryPrice>
                  <b>$ {cart.total}</b>
                </SummaryPrice>
              </SummaryDetails>
              <StripeCheckout
                name="Flash Shop"
                image="https://adchiase.com/upload/tour/cach-len-do-bang-ngoc-the-flash045693556715.jpg"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <Button>CHECK OUT</Button>
              </StripeCheckout>
            </SummaryWrapper>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
