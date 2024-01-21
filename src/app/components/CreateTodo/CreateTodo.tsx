"use client";

import React, { ChangeEvent, FocusEventHandler, FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setAllTodos, addTodo, removeTodo, updateTodo, selectAllTodos, selectFavoritedTodos, selectNonFavoritedTodos } from "../../store/todosReducers";
import { v4 } from "uuid";

import ContentEditable from "react-contenteditable";
import { Colors } from "@/app/enums/colors";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isFavorited, setIsFavorited] = useState(false);

  const dispatch = useDispatch();

  function createTodo(e: any) {
    dispatch(
      addTodo({
        id: v4(),
        title,
        body,
        isFavorited,
        color: Colors.WHITE,
      })
    );

    setTitle("");
    setBody("");
    setIsFavorited(false);
  }

  function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setBody(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  return (
    <form className={styles.container}>
      <div className={styles.head}>
        <input type="text" value={title} placeholder="Título" onChange={(e) => setTitle(e.target.value)} />
        <FontAwesomeIcon icon={faStar} className={styles.favoriteStar} style={{ color: isFavorited ? "#ffa000" : "transparent" }} onClick={() => setIsFavorited((previous) => !previous)} />
      </div>

      <div className={styles.body}>
        {/* <ContentEditable onChange={(e) => setBody(e.currentTarget.textContent)} html={body} /> */}
        <textarea value={body} onChange={onChange} placeholder="Criar nota..." />
      </div>

      {(title.length > 0 || body.length > 0) && (
        <div className={styles.createTodosContainer}>
          <FontAwesomeIcon icon={faCheck} className={styles.icon} onClick={createTodo} />
        </div>
      )}
    </form>
  );
}
