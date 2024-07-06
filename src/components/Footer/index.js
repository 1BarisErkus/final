import Newsletter from "./Newsletter";
import CompanyInfos from "./CompanyInfos";
import Infos from "./Infos";
import FooterBottom from "./Bottom";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Newsletter />
      <div className="container ">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-2 mb-4 mb-lg-0 text-center">
            <CompanyInfos />
          </div>
          <Infos
            title="COMPANY"
            list={["About", "Features", "Works", "Career"]}
          />
          <Infos
            title="HELP"
            list={[
              "Customer Support",
              "Delivery Details",
              "Terms & Conditions",
              "Privacy Policy",
            ]}
          />
          <Infos
            title="FAQ"
            list={["Account", "Manage Deliveries", "Orders", "Payments"]}
          />
          <Infos
            title="RESOURCES"
            list={[
              "Free eBooks",
              "Development Tutorial",
              "How to - Blog",
              "Youtube Playlist",
            ]}
          />
        </div>
      </div>
      <FooterBottom />
    </FooterContainer>
  );
};

export default Footer;
