import React from "react";
import {
  H1,
  Paragraph,
  StatsItem,
  StatsNum,
  StatsParagraph,
  StatsWrapper,
} from "./styles";
import Button from "@/components/Button";

const Content = () => {
  return (
    <>
      <H1>FIND CLOTHES THAT MATCHES YOUR STYLE</H1>
      <Paragraph className="text-gray">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </Paragraph>
      <Button theme="dark">Shop Now</Button>
      <StatsWrapper className="d-flex flex-wrap">
        <StatsItem>
          <StatsNum>200+</StatsNum>
          <StatsParagraph>International Brands</StatsParagraph>
        </StatsItem>
        <StatsItem>
          <StatsNum>2,000+</StatsNum>
          <StatsParagraph>High-Quality Products</StatsParagraph>
        </StatsItem>
        <StatsItem>
          <StatsNum>30,000+</StatsNum>
          <StatsParagraph>Happy Customers</StatsParagraph>
        </StatsItem>
      </StatsWrapper>
    </>
  );
};

export default Content;
