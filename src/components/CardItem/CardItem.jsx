import styles from "./CardItem.module.css";

const CardItem = ({ icon, title, description }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.iconContainer}>
        <svg className={styles.icon}>
          <use href={`/src/assets/icons.svg#${icon}`} />
        </svg>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CardItem;
