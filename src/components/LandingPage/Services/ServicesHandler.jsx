import { servicesCardsData } from "../../../../data/servicesCardsData";
import Card from "./Card";
import ReversedCard from "./ReversedCard";

const ServicesCards = () => {
  return (
    <>
      {servicesCardsData.map((card) => {
        if (card.id === 2) {
          return <ReversedCard card={card} key={card.id} />;
        } else {
          return <Card card={card} key={card.id} />;
        }
      })}
    </>
  );
};

export default ServicesCards;
