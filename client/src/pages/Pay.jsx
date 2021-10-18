import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";
import { useHistory } from "react-router";
import { axiosInstance } from "../config";

const KEY =
  "pk_test_51JbgRzDrivpegEIzT1BfYsVfvpHhAreHjUGrTfxP2YE2HSpBnaxHFNJyCXvNlhYt9d3cb1Lb3wkLDN426ojSQi9v00l9qgE4oX";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  width: 200px;
  border-radius: 20px;
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const Pay = () => {
  const [stripeToken, setSTripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setSTripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axiosInstance.post(
          "http://localhost:8000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);
  return (
    <Container>
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="Flash Shop"
          image="https://i.dailymail.co.uk/1s/2020/03/10/00/25759784-0-image-a-25_1583799582199.jpg"
          billingAddress
          shippingAddress
          description="Your total is $100"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <Button>PAY NOW</Button>
        </StripeCheckout>
      )}
    </Container>
  );
};

export default Pay;
