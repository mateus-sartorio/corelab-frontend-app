import React, { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from "react";
import { type Todo } from "../../models/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFillDrip, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { faPalette, faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "@/app/enums/colors";
import { deleteTodo, updateTodo } from "@/app/store/features/todosSlice";
import { useDispatch } from "react-redux";
import ColorPicker from "../ColorPicker/ColorPicker";
import { AppDispatch } from "@/app/store/store";

export function TodoCard(props: Todo) {
  const { id, title, body, color, isFavorited } = props;

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [showColorPalete, setShowColorPalette] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  let starIconFillColor = isFavorited ? "#ffa000" : "transparent";
  let line_division_color = color === Colors.WHITE ? "#e2e2e2" : "#ffffff";

  function onIsBeingEditedToggle() {
    setIsBeingEdited(true);

    const end = titleRef.current?.value.length ?? 10;
    titleRef.current?.setSelectionRange(end, end);
    titleRef.current?.focus();
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
        isFavorited,
      })
    );

    setIsBeingEdited(false);
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

  function removeTodo() {
    dispatch(deleteTodo(id));
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

  function onTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTitle(e.target.value);
  }

  function onBodyChange(e: ChangeEvent<HTMLDivElement>) {
    setNewBody(e.target.textContent ?? "");
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter") {
      saveModifications();
    }
  }

  useEffect(() => {
    bodyRef.current?.click();
    titleRef.current?.click();
  }, []);

  return (
    <div style={{ backgroundColor: color }} className={styles.container} onKeyDown={onKeyDown}>
      <div className={styles.head} style={{ borderBottom: `2px solid ${line_division_color}` }}>
        <input type="text" value={newTitle} placeholder="Título" onChange={onTitleChange} style={{ backgroundColor: color }} readOnly={!isBeingEdited} ref={titleRef} />

        <FontAwesomeIcon icon={faStar} className={styles.favoriteStar} style={{ color: starIconFillColor }} onClick={onFavoriteToggle} />
      </div>

      <div className={styles.body} contentEditable={isBeingEdited} suppressContentEditableWarning={true} onInput={onBodyChange} style={{ backgroundColor: color }}>
        {body}
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottom_left}>
          {isBeingEdited ? <FontAwesomeIcon icon={faCheck} className={styles.icon} onClick={saveModifications} /> : <FontAwesomeIcon icon={faPencil} className={styles.icon} onClick={onIsBeingEditedToggle} />}

          <div>
            <FontAwesomeIcon icon={faFillDrip} className={styles.icon} onClick={onToggleShowColorPaletteToggle} />
            {showColorPalete && <ColorPicker changeColor={changeTodoColor} isVertical={false} hasClearColorOption={false} />}
          </div>
        </div>
        <FontAwesomeIcon icon={faXmark} className={styles.icon} onClick={removeTodo} />
      </div>
    </div>
  );
}