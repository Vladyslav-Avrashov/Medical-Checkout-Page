import CardItem from "../CardItem/CardItem";
import styles from "./CardList.module.css";

const CardList = ({ cards }) => {
  return (
    <section className={styles.cardList}>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <CardItem
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
