import styles from "./CardItem.module.css";

const CardItem = ({ icon, title, description }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.iconContainer}>
        <svg className={styles.icon}>
          <use href={`/public/icons/icons.svg#${icon}`} />
        </svg>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CardItem;
