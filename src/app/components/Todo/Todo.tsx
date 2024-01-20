import React from "react";
import { Todo } from "../../models/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss";
import { faPalette, faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "@/app/enums/colors";

export function Todo(props: Todo) {
  const { title, body, color, isFavorited } = props;

  let starIconFillColor = isFavorited ? "#ffa000" : "transparent";
  let line_division_color = color === Colors.WHITE ? "#e2e2e2" : "#ffffff";

  return (
    <div style={{ backgroundColor: color }} className={styles.container}>
      <div className={styles.head} style={{ borderBottom: `2px solid ${line_division_color}` }}>
        <h2>{title}</h2>
        <FontAwesomeIcon icon={faStar} className={styles.favoriteStar} style={{ color: starIconFillColor }} />
      </div>

      <div className={styles.body}>
        <p>{body}</p>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottom_left}>
          <FontAwesomeIcon icon={faPencil} className={styles.icon} />
          <FontAwesomeIcon icon={faPalette} className={styles.icon} />
        </div>
        <FontAwesomeIcon icon={faXmark} className={styles.icon} />
      </div>
    </div>
  );
}
