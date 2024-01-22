"use client";

import { useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo/CreateTodo";
import { Todo } from "./components/Todo/Todo";
import { fetchTodos, selectFavoritedTodos, selectNonFavoritedTodos } from "./store/features/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { selectSearch } from "./store/features/generalStateSlice";
import styles from "./styles.module.scss";

export default function Home() {
  const favoritedTodos = useSelector(selectFavoritedTodos);
  const nonfavoritedTodos = useSelector(selectNonFavoritedTodos);
  const dispatch = useDispatch<AppDispatch>();

  const search = useSelector(selectSearch);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <main className={styles.main}>
      <CreateTodo />

      <br />

      {favoritedTodos.length > 0 && <p>Favoritas</p>}

      <ul>
        {favoritedTodos
          .toReversed()
          .filter((todo) => todo.title.includes(search) || todo.body.includes(search))
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
          .filter((todo) => todo.title.includes(search) || todo.body.includes(search))
          .map((todo) => (
            <li key={todo.id}>
              <Todo id={todo.id} title={todo.title} body={todo.body} isFavorited={todo.isFavorited} color={todo.color} />
            </li>
          ))}
      </ul>

      {favoritedTodos.length === 0 && nonfavoritedTodos.length === 0 && <p className={styles.no_todo_addded_text}>Nenhuma tarefa adicionada :(</p>}
    </main>
  );
}
