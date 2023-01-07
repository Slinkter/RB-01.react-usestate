import React, { useState } from "react";
import useTodos from "../hook/useTodos";

const initTodos = [
    { id: 1, title: "learing react" },
    { id: 2, title: "learing node" },
];

const TodoApp = () => {
    const [todos, addTodo, deleteTodo] = useTodos(initTodos);

    return (
        <div>
            <button onClick={() => addTodo({ title: "new Todo" })}>add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => deleteTodo(todo.id)}>
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
