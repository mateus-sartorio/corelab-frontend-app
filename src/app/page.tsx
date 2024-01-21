"use client";

import { useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo/CreateTodo";
import { Todo } from "./components/Todo/Todo";
import { Colors } from "./enums/colors";
import { setAllTodos, addTodo, removeTodo, updateTodo, selectAllTodos, selectFavoritedTodos, selectNonFavoritedTodos } from "./store/todosReducers";
import { useSelector, useDispatch } from "react-redux";
import { todoResponseDTO } from "./models/DTO/todoResponseDTO";

const API_ENDPOINT = "http://localhost:4000/api/v1/todos";

export default function Home() {
  const favoritedTodos = useSelector(selectFavoritedTodos);
  const nonfavoritedTodos = useSelector(selectNonFavoritedTodos);
  const dispatch = useDispatch();

  async function getAllTodos(url: string) {
    const response = await fetch(url);
    const todos: todoResponseDTO[] = await response.json();
    dispatch(
      setAllTodos(
        todos.map((todo) => {
          return {
            id: todo._id,
            title: todo.title,
            body: todo.body,
            isFavorited: todo.isFavorited,
            color: todo.color,
          };
        })
      )
    );
  }

  useEffect(() => {
    getAllTodos(API_ENDPOINT ?? "");
  }, []);

  return (
    <main>
      <CreateTodo />

      <br />

      <p>Favoritas</p>

      <ul>
        {favoritedTodos.map((todo) => (
          <li key={todo.id}>
            <Todo id={todo.id} title={todo.title} body={todo.body} isFavorited={todo.isFavorited} color={todo.color} />
          </li>
        ))}
      </ul>

      <br />

      <p onMouseEnter={(e) => console.log("nice")}>Outras</p>

      <br />

      <ul>
        {nonfavoritedTodos.map((todo) => (
          <li key={todo.id}>
            <Todo id={todo.id} title={todo.title} body={todo.body} isFavorited={todo.isFavorited} color={todo.color} />
          </li>
        ))}
      </ul>
    </main>
  );
}
