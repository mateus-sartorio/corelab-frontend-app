import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Searchbar() {
  return (
    <form className={styles.container}>
      <div className={styles.input_field}>
        <input type="text" name="" id="" placeholder="Pesquisar notas" />
      </div>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
    </form>
  );
}
