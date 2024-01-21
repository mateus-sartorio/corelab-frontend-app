"use client";

import { useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo/CreateTodo";
import { Todo } from "./components/Todo/Todo";
import { Colors } from "./enums/colors";
import { setAllTodos, addTodo, removeTodo, updateTodo, selectAllTodos, selectFavoritedTodos, selectNonFavoritedTodos } from "./store/todosReducers";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const favoritedTodos = useSelector(selectFavoritedTodos);
  const nonfavoritedTodos = useSelector(selectNonFavoritedTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addTodo({
        id: "1",
        title: "favorite",
        body: "nice bro",
        color: Colors.BLUE,
        isFavorited: true,
      })
    );

    dispatch(
      addTodo({
        id: "2",
        title: "what",
        body: "not favorited",
        color: Colors.WHITE,
        isFavorited: false,
      })
    );
  }, []);

  return (
    <main>
      <CreateTodo />

      <br />

      <p>Favoritas</p>

      {favoritedTodos.map((todo) => (
        <Todo id={todo.id} title={todo.title} body={todo.body} isFavorited={todo.isFavorited} color={todo.color} />
      ))}

      <br />

      <p>Outras</p>

      <br />

      {nonfavoritedTodos.map((todo) => (
        <Todo id={todo.id} title={todo.title} body={todo.body} isFavorited={todo.isFavorited} color={todo.color} />
      ))}
    </main>
  );
}
