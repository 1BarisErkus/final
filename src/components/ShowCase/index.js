import { Container, H2, Row } from "./styles";
import WearCard from "@/components/Wear/Card";
import WearCardList from "@/components/Wear/CardList";
import Button from "@/components/Button";
import Link from "next/link";

const ShowCase = ({ title, button, cards }) => {
  return (
    <section>
      <Container className="container">
        <Row className="row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <H2 className=" text-center">{title}</H2>
            <WearCardList>
              {cards && cards.length > 0 ? (
                cards.map((card) => {
                  return (
                    <Link key={card.id} href={`/product/${card.id}`}>
                      <WearCard
                        src={card.image}
                        title={card.title}
                        price={card.price}
                        discount={card.discount}
                      />
                    </Link>
                  );
                })
              ) : (
                <div>Products are not found.</div>
              )}
            </WearCardList>
            {button && (
              <Link href="/category">
                <Button>View All</Button>
              </Link>
            )}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ShowCase;
