import Form from "./Form";
import { H2, NewsletterSection, Section } from "./styles";

const Newsletter = () => {
  return (
    <NewsletterSection className="container">
      <Section>
        <H2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</H2>
      </Section>
      <Form />
    </NewsletterSection>
  );
};

export default Newsletter;
