import React, { useState } from "react";

const useTodos = (initTodos) => {
    const [todos, setTodos] = useState(initTodos);

    const addTodo = (todo) => {
        todo.id = Date.now();
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return [todos, addTodo, deleteTodo];
};

export default useTodos;
