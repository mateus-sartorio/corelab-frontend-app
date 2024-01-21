import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Todo } from "../models/todo";
import { RootState } from "./store";

export const appStateSlice = createSlice({
  name: "todosState",
  initialState: {
    todos: [] as Todo[],
  },
  reducers: {
    setAllTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      let isNewTodoPresent = false;
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          isNewTodoPresent = true;
        }
      });

      if (isNewTodoPresent === false) {
        state.todos.push(action.payload);
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
    },
  },
});

export const { setAllTodos, addTodo, removeTodo, updateTodo } = appStateSlice.actions;

export const selectAllTodos = (state: RootState) => state.appState.todos;
export const selectFavoritedTodos = (state: RootState) => state.appState.todos.filter((todo) => todo.isFavorited);
export const selectNonFavoritedTodos = (state: RootState) => state.appState.todos.filter((todo) => !todo.isFavorited);

export default appStateSlice.reducer;
