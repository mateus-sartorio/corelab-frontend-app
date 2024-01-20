import Image from "next/image";
import React from "react";
import Logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import Searchbar from "../Searchbar/Searchbar";

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Todos logo" className={styles.logo_image} quality={100} width={20} />
        <p>CoreNotes</p>
      </div>
      <Searchbar />
      <div className={styles.icon_container}>
        <FontAwesomeIcon icon={faXmark} className={styles.icon} />
      </div>
    </div>
  );
}
