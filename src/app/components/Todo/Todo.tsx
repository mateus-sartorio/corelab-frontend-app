import React, { useState } from "react";
import { type Todo } from "../../models/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { faPalette, faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "@/app/enums/colors";
import { setAllTodos, addTodo, removeTodo, updateTodo, selectAllTodos, selectFavoritedTodos, selectNonFavoritedTodos } from "../../store/todosReducers";
import { useSelector, useDispatch } from "react-redux";
import ColorPicker from "../ColorPicker/ColorPicker";

export function Todo(props: Todo) {
  const { id, title, body, color, isFavorited } = props;

  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [showColorPalete, setShowColorPalette] = useState(false);

  const dispatch = useDispatch();

  let starIconFillColor = isFavorited ? "#ffa000" : "transparent";
  let line_division_color = color === Colors.WHITE ? "#e2e2e2" : "#ffffff";

  function onIsBeingEditedToggle() {
    setIsBeingEdited((current) => !current);
  }

  function onToggleShowColorPaletteToggle() {
    setShowColorPalette((current) => !current);
  }

  function saveModifications() {
    dispatch(
      updateTodo({
        id,
        title: newTitle,
        body: newBody,
        color,
        isFavorited: !isFavorited,
      })
    );
  }

  function onFavoriteToggle() {
    dispatch(
      updateTodo({
        id,
        title,
        body,
        color,
        isFavorited: !isFavorited,
      })
    );
  }

  function deleteTodo() {
    dispatch(removeTodo(id));
  }

  function changeTodoColor(color: Colors) {
    dispatch(
      updateTodo({
        id,
        title,
        body,
        color,
        isFavorited,
      })
    );

    setShowColorPalette(false);
  }

  return (
    <>
      <div style={{ backgroundColor: color }} className={styles.container}>
        <div className={styles.head} style={{ borderBottom: `2px solid ${line_division_color}` }}>
          {isBeingEdited ? <input type="text" value={newTitle} placeholder="Título" onChange={(e) => setNewTitle(e.target.value)} style={{ backgroundColor: color }} /> : <h2>{title}</h2>}

          <FontAwesomeIcon icon={faStar} className={styles.favoriteStar} style={{ color: starIconFillColor }} onClick={onFavoriteToggle} />
        </div>

        <div className={styles.body}>{isBeingEdited ? <textarea value={newBody} onChange={(e) => setNewBody(e.target.value)} placeholder="Criar nota..." style={{ backgroundColor: color }} /> : <p>{body}</p>}</div>

        <div className={styles.bottom}>
          <div className={styles.bottom_left}>
            {isBeingEdited ? <FontAwesomeIcon icon={faCheck} className={styles.icon} onClick={saveModifications} /> : <FontAwesomeIcon icon={faPencil} className={styles.icon} onClick={onIsBeingEditedToggle} />}

            <div>
              <FontAwesomeIcon icon={faPalette} className={styles.icon} onClick={onToggleShowColorPaletteToggle} />
              {showColorPalete && <ColorPicker changeColor={changeTodoColor} />}
            </div>
          </div>
          <FontAwesomeIcon icon={faXmark} className={styles.icon} onClick={deleteTodo} />
        </div>
      </div>
    </>
  );
}
