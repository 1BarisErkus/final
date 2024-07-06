import { Description, Logo, SocialIcon, SocialIconsContainer } from "./styles";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const CompanyInfos = () => {
  return (
    <>
      <Logo>SHOP.CO</Logo>
      <Description>
        We have clothes that suits your style and which you&apos;re proud to
        wear. From women to men.
      </Description>
      <SocialIconsContainer>
        <SocialIcon href="#">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="#">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon href="#">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="#">
          <FaGithub />
        </SocialIcon>
      </SocialIconsContainer>
    </>
  );
};

export default CompanyInfos;
