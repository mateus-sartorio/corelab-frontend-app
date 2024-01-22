import React, { ChangeEvent } from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "@/app/store/features/generalStateSlice";

export default function Searchbar() {
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  function onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setSearch(e.target.value));
  }

  return (
    <form className={styles.container}>
      <div className={styles.input_field}>
        <input type="text" placeholder="Pesquisar notas" value={search} onChange={onSearchChange} />
      </div>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
    </form>
  );
}
