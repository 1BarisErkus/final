import {
  Bottom,
  Paragraph,
  PaymentIcon,
  PaymentIconsContainer,
} from "./styles";
import { RiVisaLine } from "react-icons/ri";
import { BiLogoMastercard } from "react-icons/bi";
import { FaAmazonPay, FaApplePay, FaGooglePay } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="container mt-5">
      <Bottom>
        <Paragraph className="text-muted">
          Shop.co © 2000-2023, All Rights Reserved
        </Paragraph>
        <PaymentIconsContainer>
          <PaymentIcon href="#">
            <RiVisaLine />
          </PaymentIcon>
          <PaymentIcon href="#">
            <BiLogoMastercard />
          </PaymentIcon>
          <PaymentIcon href="#">
            <FaAmazonPay />
          </PaymentIcon>
          <PaymentIcon href="#">
            <FaApplePay />
          </PaymentIcon>
          <PaymentIcon href="#">
            <FaGooglePay />
          </PaymentIcon>
        </PaymentIconsContainer>
      </Bottom>
    </div>
  );
};

export default FooterBottom;
