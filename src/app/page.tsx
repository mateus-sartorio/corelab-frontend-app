"use client";

import { useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo/CreateTodo";
import { Todo } from "./components/Todo/Todo";
import { Colors } from "./enums/colors";
import { fetchTodos, selectFavoritedTodos, selectNonFavoritedTodos } from "./store/features/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { todoResponseDTO } from "./DTOs/response/todoResponseDTO";
import { AppDispatch } from "./store/store";

export default function Home() {
  const favoritedTodos = useSelector(selectFavoritedTodos);
  const nonfavoritedTodos = useSelector(selectNonFavoritedTodos);
  const dispatch = useDispatch<AppDispatch>();

  // async function getAllTodos(url: string) {
  //   const response = await fetch(url);
  //   const todos: todoResponseDTO[] = await response.json();
  //   dispatch(
  //     setAllTodos(
  //       todos.map((todo) => {
  //         return {
  //           id: todo._id,
  //           title: todo.title,
  //           body: todo.body,
  //           isFavorited: todo.isFavorited,
  //           color: todo.color,
  //         };
  //       })
  //     )
  //   );
  // }

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <main>
      <CreateTodo />

      <br />

      {favoritedTodos.length > 0 && <p>Favoritas</p>}

      <ul>
        {favoritedTodos.map((todo) => (
          <li key={todo.id}>
            <Todo id={todo.id} title={todo.title} body={todo.body} isFavorited={todo.isFavorited} color={todo.color} />
          </li>
        ))}
      </ul>

      {favoritedTodos.length > 0 && nonfavoritedTodos.length > 0 && <p>Outras</p>}
      {favoritedTodos.length === 0 && nonfavoritedTodos.length > 0 && <p>Todas</p>}

      <ul>
        {nonfavoritedTodos.map((todo) => (
          <li key={todo.id}>
            <Todo id={todo.id} title={todo.title} body={todo.body} isFavorited={todo.isFavorited} color={todo.color} />
          </li>
        ))}
      </ul>

      {favoritedTodos.length === 0 && nonfavoritedTodos.length === 0 && <p>Nenhuma tarefa adicionada :(</p>}
    </main>
  );
}
