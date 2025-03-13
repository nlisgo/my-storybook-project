import React from "react";
import styles from "./Food.module.css";

const Food: React.FC< { burger: string, people?: {name: string, surname: string} [] } > = ({ burger, people }) => {
  return (
    <div className={styles.food}>
      <h3>Card Title</h3>
      <ul>
        {
          (people ?? []).map(person => <li>{person.name} {person.surname}</li>)
        }
      </ul>

      <p>{burger}</p>
    </div>
  );
};

export default Food;
