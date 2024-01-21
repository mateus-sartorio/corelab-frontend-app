import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

import ContentEditable from "react-contenteditable";

export function CreateTodo() {
  const [title, setTitle] = useState("Title");
  const [body, setBody] = useState("Criar nota...");
  const [isFavorited, setIsFavorited] = useState(false);

  const onContentChange = (event: any) => {
    setBody(event.currentTarget.textContent);
  };

  return (
    <form className={styles.container}>
      <div className={styles.head}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <FontAwesomeIcon icon={faStar} className={styles.favoriteStar} style={{ color: isFavorited ? "#ffa000" : "transparent" }} onClick={() => setIsFavorited((previous) => !previous)} />
      </div>

      <div className={styles.body}>
        <ContentEditable onChange={onContentChange} onBlur={onContentChange} html={body} />
      </div>
    </form>
  );
}
