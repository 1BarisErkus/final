import { Container, H2, Row } from "./styles";
import WearCard from "@/components/Wear/Card";
import WearCardList from "@/components/Wear/CardList";
import Button from "@/components/Button";

const ShowCase = ({ title, button, cards }) => {
  return (
    <section>
      <Container className="container">
        <Row className="row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <H2 className=" text-center">{title}</H2>
            <WearCardList>
              {cards.map((card, index) => {
                return (
                  <WearCard
                    key={index}
                    src={card.src}
                    title={card.title}
                    price={card.price}
                    discount={card.discount}
                  />
                );
              })}
            </WearCardList>
            {button && <Button>View All</Button>}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ShowCase;
