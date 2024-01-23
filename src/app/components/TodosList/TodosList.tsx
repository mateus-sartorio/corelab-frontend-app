import { selectSearch } from "@/app/store/features/generalStateSlice";
import { selectFavoritedTodos, selectNonFavoritedTodos, fetchTodos } from "@/app/store/features/todosSlice";
import { AppDispatch } from "@/app/store/store";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Todo } from "../Todo/Todo";
import styles from "./styles.module.scss";

export default function TodosList() {
  const favoritedTodos = useSelector(selectFavoritedTodos);
  const nonfavoritedTodos = useSelector(selectNonFavoritedTodos);
  const search = useSelector(selectSearch);

  return (
    <div className={styles.container}>
      {favoritedTodos.length > 0 && <p>Favoritas</p>}

      <ul>
        {favoritedTodos
          .toReversed()
          .filter((todo) => todo.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || todo.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .map((todo) => (
            <li key={todo.id}>
              <Todo id={todo.id} title={todo.title} body={todo.body} isFavorited={todo.isFavorited} color={todo.color} />
            </li>
          ))}
      </ul>

      {favoritedTodos.length > 0 && nonfavoritedTodos.length > 0 && <p>Outras</p>}
      {favoritedTodos.length === 0 && nonfavoritedTodos.length > 0 && <p>Todas</p>}

      <ul>
        {nonfavoritedTodos
          .toReversed()
          .filter((todo) => todo.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || todo.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .map((todo) => (
            <li key={todo.id}>
              <Todo id={todo.id} title={todo.title} body={todo.body} isFavorited={todo.isFavorited} color={todo.color} />
            </li>
          ))}
      </ul>

      {favoritedTodos.length === 0 && nonfavoritedTodos.length === 0 && <p className={styles.no_todo_addded_text}>Nenhuma tarefa adicionada :(</p>}
    </div>
  );
}
